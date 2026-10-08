#!/usr/bin/env node
/**
 * check-images.mjs — image integrity checker for public/images.
 *
 * Pure Node (no dependencies). Read-only with respect to the images and src/;
 * the only file it can write is docs/IMAGE_REPLACEMENT_CHECKLIST.md (--markdown).
 *
 * Usage:
 *   npm run check:images
 *   npm run check:images -- --dir public/images/about
 *   npm run check:images -- --verbose
 *   npm run check:images -- --markdown
 *   npm run check:images -- --strict
 *
 * Flags:
 *   --dir <path>   Directory to scan (default: public/images). Relative paths
 *                  resolve against the current working directory.
 *   --strict       Exit with code 1 if any ERROR is found (default exit is 0).
 *   --markdown     Write docs/IMAGE_REPLACEMENT_CHECKLIST.md.
 *   --verbose      List every finding per file, not just folder counts.
 *   --help         Show this help.
 *
 * Findings
 *   ERROR    zero-byte             File is empty.
 *            format-mismatch       Magic bytes do not match the file extension.
 *            missing-reference     A string literal in src/ points at an image
 *                                  (inside the scanned dir) that is not on disk.
 *            unreadable-dimensions Format is valid but the header cannot be parsed.
 *   WARNING  low-width             Width < 1920px (files under a /hero/ folder)
 *                                  or < 1200px (everything else).
 *   INFO     unreferenced          On disk but never referenced as a literal in src/.
 *
 * Notes
 *   - Zero-byte files and files with an unrecognisable format are not also
 *     reported as "unreadable-dimensions" (that would double-count one problem).
 *     A file whose real format is a *different* supported format (e.g. WebP
 *     saved as .jpg) is reported as a mismatch AND still width-checked.
 *   - Only static string literals are detected. Paths built at runtime
 *     (template literals with ${...}, concatenation) are invisible to the
 *     reference check, so "unreferenced" is informational only.
 *   - Exit codes: 0 normally; 1 with --strict and errors; 2 for bad usage.
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// ─────────────────────────────────────────────
// Config
// ─────────────────────────────────────────────

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC_DIR = path.join(ROOT, 'public');
const SRC_DIR = path.join(ROOT, 'src');
const DEFAULT_DIR = path.join(PUBLIC_DIR, 'images');
const CHECKLIST_PATH = path.join(ROOT, 'docs', 'IMAGE_REPLACEMENT_CHECKLIST.md');

/** Supported image extensions → the format their content must have. */
const EXT_TO_FORMAT = new Map([
  ['.jpg', 'jpeg'],
  ['.jpeg', 'jpeg'],
  ['.png', 'png'],
  ['.webp', 'webp'],
  ['.avif', 'avif'],
]);

const FORMAT_LABEL = { jpeg: 'JPEG', png: 'PNG', webp: 'WebP', avif: 'AVIF' };

/** Source file types searched for image string literals. */
const SRC_EXTS = new Set([
  '.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.mts', '.cts', '.css', '.json', '.mdx',
]);

const MIN_WIDTH_HERO = 1920;
const MIN_WIDTH_DEFAULT = 1200;

const TYPES = {
  ZERO: 'zero-byte',
  MISMATCH: 'format-mismatch',
  MISSING: 'missing-reference',
  UNREADABLE: 'unreadable-dimensions',
  LOW_WIDTH: 'low-width',
  UNREFERENCED: 'unreferenced',
};

const LEVEL = {
  [TYPES.ZERO]: 'error',
  [TYPES.MISMATCH]: 'error',
  [TYPES.MISSING]: 'error',
  [TYPES.UNREADABLE]: 'error',
  [TYPES.LOW_WIDTH]: 'warning',
  [TYPES.UNREFERENCED]: 'info',
};

// ─────────────────────────────────────────────
// CLI
// ─────────────────────────────────────────────

function usageError(message) {
  console.error(`check-images: ${message}`);
  console.error('Run with --help for usage.');
  process.exit(2);
}

function parseArgs(argv) {
  const opts = { dir: null, strict: false, markdown: false, verbose: false, help: false };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--strict') opts.strict = true;
    else if (arg === '--markdown') opts.markdown = true;
    else if (arg === '--verbose') opts.verbose = true;
    else if (arg === '--help' || arg === '-h') opts.help = true;
    else if (arg === '--dir') {
      const value = argv[++i];
      if (!value || value.startsWith('--')) usageError('--dir requires a path.');
      opts.dir = value;
    } else if (arg.startsWith('--dir=')) {
      opts.dir = arg.slice('--dir='.length);
      if (!opts.dir) usageError('--dir requires a path.');
    } else usageError(`unknown argument "${arg}".`);
  }
  return opts;
}

function printHelp() {
  console.log(`Usage: npm run check:images -- [flags]

  --dir <path>   Directory to scan (default: public/images)
  --strict       Exit 1 if any error is found (default exit code is 0)
  --markdown     Write docs/IMAGE_REPLACEMENT_CHECKLIST.md
  --verbose      List every finding per file
  --help         Show this help

Errors:   zero-byte, format-mismatch, missing-reference, unreadable-dimensions
Warnings: low-width (hero >= ${MIN_WIDTH_HERO}px, others >= ${MIN_WIDTH_DEFAULT}px)
Info:     unreferenced`);
}

// ─────────────────────────────────────────────
// Small helpers
// ─────────────────────────────────────────────

const toPosix = (p) => p.split(path.sep).join('/');
const useColor = Boolean(process.stdout.isTTY) && !process.env.NO_COLOR;
const paint = (code, text) => (useColor ? `\x1b[${code}m${text}\x1b[0m` : text);

async function walk(dir) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  entries.sort((a, b) => a.name.localeCompare(b.name));
  for (const entry of entries) {
    if (entry.name === 'node_modules') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (entry.isFile()) out.push(full);
  }
  return out;
}

function isHeroPath(relPosixPath) {
  // "/hero/" folder: any directory segment named "hero".
  const segments = relPosixPath.split('/');
  segments.pop(); // drop the filename
  return segments.includes('hero');
}

const minWidthFor = (relPosixPath) =>
  isHeroPath(relPosixPath) ? MIN_WIDTH_HERO : MIN_WIDTH_DEFAULT;

// ─────────────────────────────────────────────
// Format detection (magic bytes)
// ─────────────────────────────────────────────

/** @returns {'jpeg'|'png'|'webp'|'avif'|'unknown'} */
function detectFormat(buf) {
  if (buf.length >= 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return 'jpeg';

  if (buf.length >= 4 && buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) {
    return 'png';
  }

  if (
    buf.length >= 12 &&
    buf.toString('latin1', 0, 4) === 'RIFF' &&
    buf.toString('latin1', 8, 12) === 'WEBP'
  ) {
    return 'webp';
  }

  // AVIF: ISO-BMFF "ftyp" box whose major or compatible brands include avif/avis.
  // (A bare "ftyp" would also match HEIC/MP4, so the brand is checked too.)
  if (buf.length >= 16 && buf.toString('latin1', 4, 8) === 'ftyp') {
    const boxSize = Math.min(buf.readUInt32BE(0) || buf.length, buf.length);
    const isAvifBrand = (brand) => brand === 'avif' || brand === 'avis';
    if (isAvifBrand(buf.toString('latin1', 8, 12))) return 'avif';
    for (let o = 16; o + 4 <= boxSize; o += 4) {
      if (isAvifBrand(buf.toString('latin1', o, o + 4))) return 'avif';
    }
  }

  return 'unknown';
}

// ─────────────────────────────────────────────
// Dimension parsers (header-only, no dependencies)
// ─────────────────────────────────────────────

function parseJpeg(buf) {
  let o = 2;
  while (o + 4 <= buf.length) {
    if (buf[o] !== 0xff) {
      o++;
      continue;
    }
    while (buf[o] === 0xff && o < buf.length) o++; // skip fill bytes
    const marker = buf[o++];
    // Standalone markers carry no length: TEM, RSTn, SOI, EOI.
    if (marker === 0x01 || (marker >= 0xd0 && marker <= 0xd9) || marker === 0x00) continue;
    if (o + 2 > buf.length) return null;
    const length = buf.readUInt16BE(o);
    const isSof =
      marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
    if (isSof) {
      if (o + 7 > buf.length) return null;
      return { width: buf.readUInt16BE(o + 5), height: buf.readUInt16BE(o + 3) };
    }
    if (marker === 0xda) return null; // start of scan reached without a SOF
    o += length;
  }
  return null;
}

function parsePng(buf) {
  if (buf.length < 24 || buf.toString('latin1', 12, 16) !== 'IHDR') return null;
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function parseWebp(buf) {
  if (buf.length < 30) return null;
  const chunk = buf.toString('latin1', 12, 16);

  if (chunk === 'VP8X') {
    // 24-bit little-endian "canvas width/height minus one".
    return { width: 1 + buf.readUIntLE(24, 3), height: 1 + buf.readUIntLE(27, 3) };
  }
  if (chunk === 'VP8 ') {
    // Lossy bitstream: frame tag (3 bytes), start code 9D 01 2A, 14-bit dims.
    if (buf[23] !== 0x9d || buf[24] !== 0x01 || buf[25] !== 0x2a) return null;
    return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
  }
  if (chunk === 'VP8L') {
    // Lossless bitstream: signature 0x2F, then 14-bit width-1 and height-1.
    if (buf[20] !== 0x2f) return null;
    const bits = buf.readUInt32LE(21);
    return { width: (bits & 0x3fff) + 1, height: ((bits >>> 14) & 0x3fff) + 1 };
  }
  return null;
}

/** Iterate ISO-BMFF boxes in buf[start, end). */
function readBoxes(buf, start, end) {
  const boxes = [];
  let o = start;
  while (o + 8 <= end) {
    let size = buf.readUInt32BE(o);
    const type = buf.toString('latin1', o + 4, o + 8);
    let header = 8;
    if (size === 1) {
      if (o + 16 > end) break;
      size = Number(buf.readBigUInt64BE(o + 8));
      header = 16;
    } else if (size === 0) {
      size = end - o;
    }
    if (size < header || o + size > end) break;
    boxes.push({ type, dataStart: o + header, end: o + size });
    o += size;
  }
  return boxes;
}

function parseAvif(buf) {
  const top = readBoxes(buf, 0, buf.length);
  const meta = top.find((b) => b.type === 'meta');
  if (!meta) return null;
  // "meta" is a FullBox: 4 bytes of version/flags precede its children.
  const metaChildren = readBoxes(buf, meta.dataStart + 4, meta.end);
  const iprp = metaChildren.find((b) => b.type === 'iprp');
  if (!iprp) return null;
  const iprpChildren = readBoxes(buf, iprp.dataStart, iprp.end);
  const ipco = iprpChildren.find((b) => b.type === 'ipco');
  if (!ipco) return null;
  const props = readBoxes(buf, ipco.dataStart, ipco.end); // property index is 1-based

  const readIspe = (box) => {
    if (!box || box.type !== 'ispe' || box.dataStart + 12 > box.end) return null;
    return { width: buf.readUInt32BE(box.dataStart + 4), height: buf.readUInt32BE(box.dataStart + 8) };
  };

  // Prefer the primary item's own ispe (pitm → ipma → ipco), applying irot.
  let picked = null;
  const pitm = metaChildren.find((b) => b.type === 'pitm');
  const ipma = iprpChildren.find((b) => b.type === 'ipma');
  if (pitm && ipma) {
    const pitmVersion = buf[pitm.dataStart];
    const primaryId =
      pitmVersion === 0 ? buf.readUInt16BE(pitm.dataStart + 4) : buf.readUInt32BE(pitm.dataStart + 4);

    const version = buf[ipma.dataStart];
    const flags = buf.readUIntBE(ipma.dataStart + 1, 3);
    let o = ipma.dataStart + 4;
    const entryCount = buf.readUInt32BE(o);
    o += 4;
    for (let i = 0; i < entryCount && o < ipma.end; i++) {
      const itemId = version < 1 ? buf.readUInt16BE(o) : buf.readUInt32BE(o);
      o += version < 1 ? 2 : 4;
      const assocCount = buf[o++];
      const indices = [];
      for (let a = 0; a < assocCount; a++) {
        if (flags & 1) {
          indices.push(buf.readUInt16BE(o) & 0x7fff);
          o += 2;
        } else {
          indices.push(buf[o] & 0x7f);
          o += 1;
        }
      }
      if (itemId !== primaryId) continue;
      let dims = null;
      let rotated = false;
      for (const index of indices) {
        const prop = props[index - 1];
        if (!prop) continue;
        if (prop.type === 'ispe') dims = readIspe(prop);
        if (prop.type === 'irot') rotated = (buf[prop.dataStart] & 3) % 2 === 1;
      }
      if (dims) picked = rotated ? { width: dims.height, height: dims.width } : dims;
      break;
    }
  }
  if (picked) return picked;

  // Fallback: the largest ispe in the file.
  let best = null;
  for (const prop of props) {
    const dims = readIspe(prop);
    if (dims && (!best || dims.width * dims.height > best.width * best.height)) best = dims;
  }
  return best;
}

/** @returns {{width:number,height:number}|null} */
function parseDimensions(buf, format) {
  try {
    const dims =
      format === 'jpeg' ? parseJpeg(buf)
      : format === 'png' ? parsePng(buf)
      : format === 'webp' ? parseWebp(buf)
      : format === 'avif' ? parseAvif(buf)
      : null;
    return dims && dims.width > 0 && dims.height > 0 ? dims : null;
  } catch {
    return null; // truncated / malformed header (RangeError etc.)
  }
}

// ─────────────────────────────────────────────
// Per-image analysis
// ─────────────────────────────────────────────

async function analyseImage(absPath, scanDir) {
  const rel = toPosix(path.relative(scanDir, absPath));
  const ext = path.extname(absPath).toLowerCase();
  const expected = EXT_TO_FORMAT.get(ext);
  const buf = await fs.readFile(absPath);

  const info = {
    rel,
    abs: absPath,
    ext,
    expected,
    actual: null,
    size: buf.length,
    width: null,
    height: null,
    minWidth: minWidthFor(rel),
    issues: [], // { type, detail }
  };

  if (buf.length === 0) {
    info.issues.push({ type: TYPES.ZERO, detail: 'Empty file (0 bytes)' });
    return info;
  }

  info.actual = detectFormat(buf);

  if (info.actual !== expected) {
    const actualLabel = FORMAT_LABEL[info.actual] ?? 'not a recognised image';
    const detail =
      info.actual === 'unknown'
        ? `Format mismatch (${ext} file is not a recognised image format)`
        : `Format mismatch (${ext} file is actually ${actualLabel})`;
    info.issues.push({ type: TYPES.MISMATCH, detail });
  }

  // Nothing to parse if we cannot even identify the format.
  if (info.actual === 'unknown') return info;

  const dims = parseDimensions(buf, info.actual);
  if (!dims) {
    info.issues.push({ type: TYPES.UNREADABLE, detail: 'Cannot read image dimensions' });
    return info;
  }

  info.width = dims.width;
  info.height = dims.height;
  if (dims.width < info.minWidth) {
    info.issues.push({
      type: TYPES.LOW_WIDTH,
      detail: `Below minimum width (${dims.width}×${dims.height}px, needs ≥ ${info.minWidth}px)`,
    });
  }
  return info;
}

// ─────────────────────────────────────────────
// Reference scan (src/)
// ─────────────────────────────────────────────

// Static string literals only: '/images/a.jpg', "/images/a.jpg", `/images/a.jpg`.
// Template literals containing ${...} are skipped (cannot be resolved statically).
const REF_LITERAL_RE = /(["'`])(\/[^"'`\s\\${}]+?\.(?:jpe?g|png|webp|avif))\1/gi;
// CSS: url(/images/a.jpg), with or without quotes.
const REF_CSS_URL_RE = /url\(\s*(["']?)(\/[^"'`\s\\${}()]+?\.(?:jpe?g|png|webp|avif))\1\s*\)/gi;

/** @returns {Promise<{refs: Map<string, Set<string>>, filesScanned: number}>} */
async function collectReferences() {
  const refs = new Map();
  let filesScanned = 0;

  let files = [];
  try {
    files = await walk(SRC_DIR);
  } catch {
    return { refs, filesScanned };
  }

  for (const file of files) {
    if (!SRC_EXTS.has(path.extname(file).toLowerCase())) continue;
    filesScanned++;
    const text = await fs.readFile(file, 'utf8');
    const relFile = toPosix(path.relative(ROOT, file));

    for (const re of [REF_LITERAL_RE, REF_CSS_URL_RE]) {
      re.lastIndex = 0;
      for (const match of text.matchAll(re)) {
        const url = match[2];
        if (url.startsWith('//')) continue; // protocol-relative URL, not a local file
        if (!refs.has(url)) refs.set(url, new Set());
        refs.get(url).add(relFile);
      }
    }
  }
  return { refs, filesScanned };
}

// ─────────────────────────────────────────────
// Reporting
// ─────────────────────────────────────────────

const COLUMNS = [
  ['files', 'Files'],
  [TYPES.ZERO, 'Zero-byte'],
  [TYPES.MISMATCH, 'Mismatch'],
  [TYPES.MISSING, 'Missing'],
  [TYPES.UNREADABLE, 'No-dims'],
  [TYPES.LOW_WIDTH, 'Low-width'],
  [TYPES.UNREFERENCED, 'Unref.'],
];

function emptyCounts() {
  return Object.fromEntries(COLUMNS.map(([key]) => [key, 0]));
}

function printSummary({ scanDir, folderStats, totals, meta, findings, verbose }) {
  const relScan = toPosix(path.relative(ROOT, scanDir)) || '.';
  console.log(paint('1', `Image integrity check — ${relScan}`));
  console.log(
    `Scanned ${meta.imageCount} image file(s)` +
      (meta.skipped ? `, ignored ${meta.skipped} non-image file(s)` : '') +
      `; searched ${meta.srcFiles} src file(s) and found ` +
      (meta.refCheck
        ? `${meta.scopedRefCount} unique reference(s) into this directory (${meta.refCount} image reference(s) in total).`
        : `${meta.refCount} unique image reference(s).`),
  );
  if (!meta.refCheck) {
    console.log(paint('33', 'Note: scanned dir is outside public/, so reference checks were skipped.'));
  }
  console.log('');

  const folders = [...folderStats.keys()].sort((a, b) => a.localeCompare(b));
  const nameWidth = Math.max(6, ...folders.map((f) => f.length), 'TOTAL'.length);
  const widths = COLUMNS.map(([, label]) => label.length);

  const header =
    'Folder'.padEnd(nameWidth) + '  ' + COLUMNS.map(([, l], i) => l.padStart(widths[i])).join('  ');
  console.log(header);
  console.log('-'.repeat(header.length));

  const row = (name, counts, bold = false) => {
    const cells = COLUMNS.map(([key], i) => {
      const value = String(counts[key]);
      const padded = value.padStart(widths[i]);
      if (counts[key] === 0 || key === 'files') return padded;
      const level = LEVEL[key];
      return paint(level === 'error' ? '31' : level === 'warning' ? '33' : '36', padded);
    });
    const line = name.padEnd(nameWidth) + '  ' + cells.join('  ');
    console.log(bold ? paint('1', line) : line);
  };

  for (const folder of folders) row(folder, folderStats.get(folder));
  console.log('-'.repeat(header.length));
  row('TOTAL', totals, true);
  console.log('');

  const errors = totals[TYPES.ZERO] + totals[TYPES.MISMATCH] + totals[TYPES.MISSING] + totals[TYPES.UNREADABLE];
  const warnings = totals[TYPES.LOW_WIDTH];
  const infos = totals[TYPES.UNREFERENCED];
  console.log(
    `${paint('31', `${errors} error(s)`)}, ${paint('33', `${warnings} warning(s)`)}, ${paint('36', `${infos} info`)}`,
  );

  if (verbose) {
    console.log('');
    for (const folder of folders) {
      const items = findings.filter((f) => f.folder === folder);
      if (items.length === 0) continue;
      console.log(paint('1', folder));
      for (const item of items) {
        const tag =
          item.level === 'error' ? paint('31', 'ERROR  ')
          : item.level === 'warning' ? paint('33', 'WARN   ')
          : paint('36', 'INFO   ');
        console.log(`  ${tag} ${item.display}  — ${item.detail}`);
      }
    }
  } else if (errors + warnings + infos > 0) {
    console.log('Tip: add --verbose to list every file, or --markdown to write the replacement checklist.');
  }
}

function buildChecklistMarkdown({ rows, totals, scanDirRel }) {
  const errors = totals[TYPES.ZERO] + totals[TYPES.MISMATCH] + totals[TYPES.MISSING] + totals[TYPES.UNREADABLE];
  const lines = [
    '# Image Replacement Checklist',
    '',
    `Generated by \`npm run check:images -- --markdown\` (scanned \`${scanDirRel}\`). Re-run it after replacing images to refresh this list.`,
    '',
    '## Summary',
    '',
    '| Check | Count |',
    '|-------|------:|',
    `| Zero-byte files | ${totals[TYPES.ZERO]} |`,
    `| Format mismatches (extension ≠ content) | ${totals[TYPES.MISMATCH]} |`,
    `| Missing referenced files | ${totals[TYPES.MISSING]} |`,
    `| Unreadable dimensions | ${totals[TYPES.UNREADABLE]} |`,
    `| Below minimum width (warning) | ${totals[TYPES.LOW_WIDTH]} |`,
    `| Unreferenced files (info, not listed below) | ${totals[TYPES.UNREFERENCED]} |`,
    `| **Images needing attention** | **${rows.length}** |`,
    `| **Total errors** | **${errors}** |`,
    '',
    '**Minimum widths:** hero images (any `/hero/` folder) ≥ 1920 px; all other images ≥ 1200 px.',
    '',
    '## Images to replace',
    '',
    '| Image Path | Issue Type | Used In File | Min Width Required |',
    '|------------|------------|--------------|-------------------:|',
  ];

  for (const r of rows) {
    const used = r.usedIn.length ? r.usedIn.map((f) => `\`${f}\``).join('<br>') : '— (unreferenced)';
    lines.push(`| \`${r.path}\` | ${r.issues.join('<br>')} | ${used} | ${r.minWidth} px |`);
  }
  lines.push('');
  return lines.join('\n');
}

// ─────────────────────────────────────────────
// Main
// ─────────────────────────────────────────────

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help) {
    printHelp();
    return;
  }

  const scanDir = opts.dir ? path.resolve(process.cwd(), opts.dir) : DEFAULT_DIR;
  try {
    const stat = await fs.stat(scanDir);
    if (!stat.isDirectory()) usageError(`not a directory: ${scanDir}`);
  } catch {
    usageError(`directory not found: ${scanDir}`);
  }

  // Map the scanned dir onto URL space (public/images → "/images/").
  const relToPublic = path.relative(PUBLIC_DIR, scanDir);
  const insidePublic = !relToPublic.startsWith('..') && !path.isAbsolute(relToPublic);
  const urlPrefix = insidePublic ? '/' + (toPosix(relToPublic) ? toPosix(relToPublic) + '/' : '') : null;

  // 1. Scan files on disk.
  const allFiles = await walk(scanDir);
  const imageFiles = allFiles.filter((f) => EXT_TO_FORMAT.has(path.extname(f).toLowerCase()));
  const skipped = allFiles.length - imageFiles.length;
  const analysed = [];
  for (const file of imageFiles) analysed.push(await analyseImage(file, scanDir));

  // 2. Scan src/ for string-literal references.
  const { refs, filesScanned } = await collectReferences();
  const refCheck = urlPrefix !== null;

  const fileUrl = (info) => (urlPrefix ? urlPrefix + info.rel : null);
  const onDiskUrls = new Set(analysed.map(fileUrl).filter(Boolean)); // exact, case-sensitive

  const scopedRefs = refCheck ? [...refs.keys()].filter((u) => u.startsWith(urlPrefix)) : [];
  const usedInFor = (url) => (url && refs.has(url) ? [...refs.get(url)].sort() : []);

  // 3. Build findings + per-folder stats.
  const folderStats = new Map();
  const bucket = (folder) => {
    if (!folderStats.has(folder)) folderStats.set(folder, emptyCounts());
    return folderStats.get(folder);
  };
  const findings = []; // flat list for --verbose
  const checklist = new Map(); // path → { path, issues[], usedIn[], minWidth }
  const totals = emptyCounts();

  const record = ({ folder, type, display, detail }) => {
    bucket(folder)[type]++;
    totals[type]++;
    findings.push({ folder, level: LEVEL[type], type, display, detail });
  };
  const addChecklist = (key, path_, issue, usedIn, minWidth) => {
    if (!checklist.has(key)) checklist.set(key, { path: path_, issues: [], usedIn, minWidth });
    checklist.get(key).issues.push(issue);
  };

  for (const info of analysed) {
    const folder = path.posix.dirname(info.rel) === '.' ? '(root)' : path.posix.dirname(info.rel);
    bucket(folder).files++;
    totals.files++;

    const url = fileUrl(info);
    const usedIn = usedInFor(url);
    const repoPath = toPosix(path.relative(ROOT, info.abs));

    for (const issue of info.issues) {
      record({ folder, type: issue.type, display: info.rel, detail: issue.detail });
      addChecklist(info.rel, repoPath, issue.detail, usedIn, info.minWidth);
    }

    if (refCheck && !refs.has(url)) {
      record({ folder, type: TYPES.UNREFERENCED, display: info.rel, detail: 'Not referenced as a string literal in src/' });
    }
  }

  for (const url of scopedRefs.sort()) {
    if (onDiskUrls.has(url)) continue;
    const rel = url.slice(urlPrefix.length);
    const dir = path.posix.dirname(rel);
    const folder = dir === '.' ? '(root)' : dir;
    const detail = `Referenced in ${usedInFor(url).join(', ')} but missing on disk`;
    record({ folder, type: TYPES.MISSING, display: rel, detail });
    addChecklist(
      `missing:${url}`,
      toPosix(path.relative(ROOT, path.join(PUBLIC_DIR, ...url.split('/').filter(Boolean)))),
      'Referenced in src but missing on disk',
      usedInFor(url),
      minWidthFor(rel),
    );
  }

  // 4. Output.
  printSummary({
    scanDir,
    folderStats,
    totals,
    meta: {
      imageCount: analysed.length,
      skipped,
      srcFiles: filesScanned,
      refCount: refs.size,
      scopedRefCount: scopedRefs.length,
      refCheck,
    },
    findings,
    verbose: opts.verbose,
  });

  if (opts.markdown) {
    const rows = [...checklist.values()].sort((a, b) => a.path.localeCompare(b.path));
    const scanDirRel = toPosix(path.relative(ROOT, scanDir)) || '.';
    await fs.mkdir(path.dirname(CHECKLIST_PATH), { recursive: true });
    await fs.writeFile(CHECKLIST_PATH, buildChecklistMarkdown({ rows, totals, scanDirRel }), 'utf8');
    console.log(`\nWrote ${toPosix(path.relative(ROOT, CHECKLIST_PATH))} (${rows.length} image(s) listed).`);
  }

  const errorCount =
    totals[TYPES.ZERO] + totals[TYPES.MISMATCH] + totals[TYPES.MISSING] + totals[TYPES.UNREADABLE];
  if (opts.strict && errorCount > 0) {
    console.log(paint('31', `\n--strict: ${errorCount} error(s) found, exiting with code 1.`));
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error('check-images: unexpected failure');
  console.error(err);
  process.exit(2);
});
