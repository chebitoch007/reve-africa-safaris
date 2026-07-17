'use client';

/**
 * EnquiryForm
 *
 * Luxury safari enquiry form. Client Component — form state, validation,
 * and interaction. Surface: bg-primary (chalk-50) on left panel,
 * bg-dune (dune-100) on right panel.
 *
 * ── Architecture ──────────────────────────────────────────────────────
 * Frontend only. The submit handler is a stub that prevents default and
 * transitions to a success state. Future integration: replace handleSubmit
 * with a POST to your API route / email service (Resend, SendGrid, etc.).
 *
 * ── Accessibility ─────────────────────────────────────────────────────
 * - Every input has an explicit <label> associated via htmlFor/id
 * - Required fields marked with aria-required and a visible * indicator
 * - Validation errors use aria-describedby + aria-invalid + role="alert"
 * - Success state uses role="status" + aria-live="polite"
 * - Focus ring pattern consistent with design system
 * - No autocomplete suppressed — browser autofill is helpful here
 * - <fieldset>/<legend> used for grouped select fields
 *
 * ── Validation ────────────────────────────────────────────────────────
 * Client-side only. Fields validated on submit; individual field errors
 * cleared on change. Email format validated with a simple regex.
 * No server-side validation (no backend in scope).
 * ──────────────────────────────────────────────────────────────────────
 */

import { useState, useId } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/design-system';
import { DURATION, EASE, VIEWPORT_ONCE } from '@/lib/design-system';
import { ENQUIRY_FORM } from '@/lib/constants/contact';

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

interface FormValues {
  firstName:    string;
  lastName:     string;
  email:        string;
  phone:        string;
  destinations: string;
  travelMonth:  string;
  groupSize:    string;
  budget:       string;
  message:      string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const EMPTY: FormValues = {
  firstName:    '',
  lastName:     '',
  email:        '',
  phone:        '',
  destinations: '',
  travelMonth:  '',
  groupSize:    '',
  budget:       '',
  message:      '',
};

// ─────────────────────────────────────────────
// Validation
// ─────────────────────────────────────────────

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.firstName.trim())       errors.firstName = 'Please enter your first name.';
  if (!values.lastName.trim())        errors.lastName  = 'Please enter your last name.';
  if (!values.email.trim())           errors.email     = 'Please enter your email address.';
  else if (!EMAIL_RE.test(values.email.trim()))
                                      errors.email     = 'Please enter a valid email address.';
  if (!values.message.trim())         errors.message   = 'Please tell us about your journey.';
  return errors;
}

// ─────────────────────────────────────────────
// Shared input class factory
// ─────────────────────────────────────────────

function inputClasses(hasError: boolean) {
  return cn(
    'w-full px-4 py-3.5',
    'bg-[var(--color-bg-primary)]',
    'border',
    hasError
      ? 'border-red-400 focus:border-red-500'
      : 'border-[var(--color-border-default)] focus:border-[var(--color-accent-primary)]',
    'font-[var(--font-inter)] font-light text-sm',
    'text-[var(--color-text-primary)]',
    'placeholder:text-[var(--color-text-muted)]',
    'focus:outline-none',
    'transition-colors duration-[200ms]',
  );
}

function selectClasses(hasError: boolean) {
  return cn(
    inputClasses(hasError),
    'appearance-none cursor-pointer',
    'bg-[image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'8\' viewBox=\'0 0 12 8\'%3E%3Cpath d=\'M1 1l5 5 5-5\' stroke=\'%238F887A\' stroke-width=\'1.5\' fill=\'none\' stroke-linecap=\'round\'/%3E%3C/svg%3E")]',
    'bg-no-repeat bg-[position:right_1rem_center]',
    'pr-10',
  );
}

// ─────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 font-[var(--font-inter)] text-xs text-red-600">
      {message}
    </p>
  );
}

function Label({ htmlFor, text, required }: { htmlFor: string; text: string; required?: boolean }) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        'block font-[var(--font-inter)] font-medium',
        'text-[11px] uppercase tracking-[0.18em]',
        'text-[var(--color-text-secondary)] mb-2',
      )}
    >
      {text}
      {required && (
        <span className="ml-1 text-[var(--color-accent-primary)]" aria-hidden="true">*</span>
      )}
    </label>
  );
}

// ─────────────────────────────────────────────
// Animation
// ─────────────────────────────────────────────

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: DURATION.cinematic, ease: EASE.cinematic, delay },
  }),
};

// ─────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────

export function EnquiryForm() {
  const reduced   = useReducedMotion();
  const uid       = useId();

  const [values,    setValues]    = useState<FormValues>(EMPTY);
  const [errors,    setErrors]    = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  // Field id helpers
  const id = (field: keyof FormValues) => `${uid}-${field}`;
  const errId = (field: keyof FormValues) => `${uid}-${field}-error`;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  /**
   * Stub submit handler.
   * TODO: Replace with POST to your API route / email service.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validate(values);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Move focus to first error field
      const firstErrorField = Object.keys(newErrors)[0] as keyof FormValues;
      document.getElementById(id(firstErrorField))?.focus();
      return;
    }
    // Stub success — replace with actual API call
    setSubmitted(true);
  };

  return (
    <section
      id="contact-form"
      aria-labelledby="enquiry-form-heading"
      className="py-24 md:py-36 bg-[var(--color-bg-primary)]"
    >
      <div className="w-full mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">

          {/* Left — section heading */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <motion.div
              custom={0}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="flex items-center gap-4 mb-5"
            >
              <span className="block h-px w-10 bg-[var(--color-accent-primary)]" aria-hidden="true" />
              <span className={cn(
                'font-[var(--font-inter)] font-medium uppercase',
                'text-[10px] tracking-[0.28em] leading-none',
                'text-[var(--color-text-muted)]',
              )}>
                {ENQUIRY_FORM.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              id="enquiry-form-heading"
              custom={0.08}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className={cn(
                'font-[var(--font-cormorant)] font-light italic',
                'text-[clamp(2rem,3vw+0.5rem,2.75rem)]',
                'leading-[1.1] tracking-[-0.02em]',
                'text-[var(--color-text-primary)] mb-6 whitespace-pre-line',
              )}
            >
              {ENQUIRY_FORM.headline}
            </motion.h2>

            <motion.p
              custom={0.14}
              variants={reduced ? {} : fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="font-[var(--font-inter)] font-light text-sm leading-relaxed text-[var(--color-text-secondary)]"
            >
              {ENQUIRY_FORM.intro}
            </motion.p>
          </div>

          {/* Right — form or success */}
          <motion.div
            custom={0.12}
            variants={reduced ? {} : fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            <AnimatePresence mode="wait" initial={false}>
              {submitted ? (
                /* ── Success state ──────────────────────────────── */
                <motion.div
                  key="success"
                  initial={reduced ? {} : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
                  exit={{ opacity: 0 }}
                  role="status"
                  aria-live="polite"
                  aria-label="Enquiry submitted successfully"
                  className={cn(
                    'flex flex-col items-start gap-6',
                    'border border-[var(--color-accent-primary)]',
                    'bg-[var(--color-bg-primary)]',
                    'p-10 lg:p-12',
                  )}
                >
                  <CheckCircle
                    size={36}
                    strokeWidth={1.25}
                    className="text-[var(--color-accent-primary)]"
                    aria-hidden="true"
                  />
                  <h3 className={cn(
                    'font-[var(--font-cormorant)] font-light italic',
                    'text-[clamp(1.5rem,2.5vw+0.3rem,2rem)]',
                    'leading-[1.2] text-[var(--color-text-primary)]',
                  )}>
                    {ENQUIRY_FORM.successHeadline}
                  </h3>
                  <p className="font-[var(--font-inter)] font-light text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {ENQUIRY_FORM.successBody}
                  </p>
                </motion.div>
              ) : (
                /* ── Form ───────────────────────────────────────── */
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Safari enquiry form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label
                        htmlFor={id('firstName')}
                        text={ENQUIRY_FORM.fields.firstName.label}
                        required={ENQUIRY_FORM.fields.firstName.required}
                      />
                      <input
                        id={id('firstName')}
                        type="text"
                        name="firstName"
                        autoComplete="given-name"
                        required
                        aria-required="true"
                        aria-describedby={errors.firstName ? errId('firstName') : undefined}
                        aria-invalid={!!errors.firstName}
                        placeholder={ENQUIRY_FORM.fields.firstName.placeholder}
                        value={values.firstName}
                        onChange={handleChange}
                        className={inputClasses(!!errors.firstName)}
                      />
                      <FieldError id={errId('firstName')} message={errors.firstName} />
                    </div>

                    <div>
                      <Label
                        htmlFor={id('lastName')}
                        text={ENQUIRY_FORM.fields.lastName.label}
                        required={ENQUIRY_FORM.fields.lastName.required}
                      />
                      <input
                        id={id('lastName')}
                        type="text"
                        name="lastName"
                        autoComplete="family-name"
                        required
                        aria-required="true"
                        aria-describedby={errors.lastName ? errId('lastName') : undefined}
                        aria-invalid={!!errors.lastName}
                        placeholder={ENQUIRY_FORM.fields.lastName.placeholder}
                        value={values.lastName}
                        onChange={handleChange}
                        className={inputClasses(!!errors.lastName)}
                      />
                      <FieldError id={errId('lastName')} message={errors.lastName} />
                    </div>
                  </div>

                  {/* Email + Phone row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label
                        htmlFor={id('email')}
                        text={ENQUIRY_FORM.fields.email.label}
                        required={ENQUIRY_FORM.fields.email.required}
                      />
                      <input
                        id={id('email')}
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                        aria-required="true"
                        aria-describedby={errors.email ? errId('email') : undefined}
                        aria-invalid={!!errors.email}
                        placeholder={ENQUIRY_FORM.fields.email.placeholder}
                        value={values.email}
                        onChange={handleChange}
                        className={inputClasses(!!errors.email)}
                      />
                      <FieldError id={errId('email')} message={errors.email} />
                    </div>

                    <div>
                      <Label
                        htmlFor={id('phone')}
                        text={ENQUIRY_FORM.fields.phone.label}
                        required={ENQUIRY_FORM.fields.phone.required}
                      />
                      <input
                        id={id('phone')}
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        placeholder={ENQUIRY_FORM.fields.phone.placeholder}
                        value={values.phone}
                        onChange={handleChange}
                        className={inputClasses(false)}
                      />
                    </div>
                  </div>

                  {/* Destinations */}
                  <div>
                    <Label
                      htmlFor={id('destinations')}
                      text={ENQUIRY_FORM.fields.destinations.label}
                      required={ENQUIRY_FORM.fields.destinations.required}
                    />
                    <input
                      id={id('destinations')}
                      type="text"
                      name="destinations"
                      placeholder={ENQUIRY_FORM.fields.destinations.placeholder}
                      value={values.destinations}
                      onChange={handleChange}
                      className={inputClasses(false)}
                    />
                  </div>

                  {/* Travel preferences row */}
                  <fieldset className="grid grid-cols-1 sm:grid-cols-3 gap-5 border-0 p-0 m-0">
                    <legend className="sr-only">Travel preferences</legend>

                    {/* Travel month */}
                    <div>
                      <Label
                        htmlFor={id('travelMonth')}
                        text={ENQUIRY_FORM.fields.travelMonth.label}
                        required={ENQUIRY_FORM.fields.travelMonth.required}
                      />
                      <select
                        id={id('travelMonth')}
                        name="travelMonth"
                        value={values.travelMonth}
                        onChange={handleChange}
                        className={selectClasses(false)}
                      >
                        <option value="">Select month</option>
                        {ENQUIRY_FORM.travelMonths.map((m) => (
                          <option key={m} value={m}>{m}</option>
                        ))}
                      </select>
                    </div>

                    {/* Group size */}
                    <div>
                      <Label
                        htmlFor={id('groupSize')}
                        text={ENQUIRY_FORM.fields.groupSize.label}
                        required={ENQUIRY_FORM.fields.groupSize.required}
                      />
                      <select
                        id={id('groupSize')}
                        name="groupSize"
                        value={values.groupSize}
                        onChange={handleChange}
                        className={selectClasses(false)}
                      >
                        <option value="">Select size</option>
                        {ENQUIRY_FORM.groupSizes.map((s) => (
                          <option key={s} value={s}>{s} {s === '1–2' ? 'people' : 'people'}</option>
                        ))}
                      </select>
                    </div>

                    {/* Budget */}
                    <div>
                      <Label
                        htmlFor={id('budget')}
                        text={ENQUIRY_FORM.fields.budget.label}
                        required={ENQUIRY_FORM.fields.budget.required}
                      />
                      <select
                        id={id('budget')}
                        name="budget"
                        value={values.budget}
                        onChange={handleChange}
                        className={selectClasses(false)}
                      >
                        <option value="">Select range</option>
                        {ENQUIRY_FORM.budgetRanges.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </fieldset>

                  {/* Message */}
                  <div>
                    <Label
                      htmlFor={id('message')}
                      text={ENQUIRY_FORM.fields.message.label}
                      required={ENQUIRY_FORM.fields.message.required}
                    />
                    <textarea
                      id={id('message')}
                      name="message"
                      rows={6}
                      required
                      aria-required="true"
                      aria-describedby={errors.message ? errId('message') : undefined}
                      aria-invalid={!!errors.message}
                      placeholder={ENQUIRY_FORM.fields.message.placeholder}
                      value={values.message}
                      onChange={handleChange}
                      className={cn(inputClasses(!!errors.message), 'resize-y min-h-[140px]')}
                    />
                    <FieldError id={errId('message')} message={errors.message} />
                  </div>

                  {/* Submit row */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-5 pt-2">
                    <button
                      type="submit"
                      className={cn(
                        'inline-flex items-center justify-center gap-2',
                        'px-10 py-4',
                        'bg-[var(--color-bg-inverse)] text-[var(--color-text-inverse)]',
                        'font-[var(--font-inter)] font-medium uppercase tracking-[0.18em] text-[11px]',
                        'transition-all duration-[300ms]',
                        'hover:bg-[var(--color-basalt-800)] hover:gap-3',
                        'focus-visible:outline-none focus-visible:ring-2',
                        'focus-visible:ring-[var(--color-accent-primary)]',
                        'focus-visible:ring-offset-2',
                      )}
                    >
                      {ENQUIRY_FORM.submitLabel}
                      <ArrowRight size={13} strokeWidth={1.5} aria-hidden="true" />
                    </button>

                    <p className="font-[var(--font-inter)] font-light text-xs italic text-[var(--color-text-muted)]">
                      {ENQUIRY_FORM.privacyNote}
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
