import { useState, type ChangeEvent, type SubmitEvent } from 'react';
import emailjs from '@emailjs/browser';
import { services } from '../../data/services';
import styles from './Contact.module.css';

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  company: string; // honeypot
}

const SERVICE_OPTIONS = [...services.map((s) => ({ id: s.id, title: s.title })), { id: 'other', title: 'Something else' }];

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  phone: '',
  service: SERVICE_OPTIONS[0].id,
  message: '',
  company: '',
};

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const NOTIFY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_NOTIFY_TEMPLATE_ID as string | undefined;
const AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID as
  | string
  | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
const COMPANY_EMAIL = (import.meta.env.VITE_COMPANY_EMAIL as string | undefined) || 'rvTech1991@gmail.com';
const COMPANY_NAME = (import.meta.env.VITE_COMPANY_NAME as string | undefined) || 'Abhiriti Advisory';

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const update = (field: keyof FormState) => (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
  };

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    // Honeypot: bots fill hidden fields, humans don't.
    if (form.company) return;

    if (!form.name.trim() || !isValidEmail(form.email)) {
      setError('Please enter your name and a valid email address.');
      return;
    }

    if (!SERVICE_ID || !NOTIFY_TEMPLATE_ID || !AUTOREPLY_TEMPLATE_ID || !PUBLIC_KEY) {
      setError('The contact form is not configured yet. Please email us directly.');
      return;
    }

    setSubmitting(true);
    const serviceLabel =
      SERVICE_OPTIONS.find((s) => s.id === form.service)?.title ?? form.service;
    const payload = {
      from_name: form.name,
      from_email: form.email,
      phone: form.phone || 'Not provided',
      service: serviceLabel,
      message: form.message || 'No message provided',
      to_email: COMPANY_EMAIL,
      company_name: COMPANY_NAME,
      submitted_at: new Date().toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
    };

    try {
      const [notifyResult, autoReplyResult] = await Promise.allSettled([
        emailjs.send(SERVICE_ID, NOTIFY_TEMPLATE_ID, payload, PUBLIC_KEY),
        emailjs.send(SERVICE_ID, AUTOREPLY_TEMPLATE_ID, payload, PUBLIC_KEY),
      ]);

      if (autoReplyResult.status === 'rejected') {
        console.error('Auto-reply email failed to send:', autoReplyResult.reason);
      }

      if (notifyResult.status === 'fulfilled') {
        setSubmitted(true);
      } else {
        throw notifyResult.reason;
      }
    } catch (err) {
      console.error('Contact form submission failed:', err);
      setError('Something went wrong sending your message. Please try again or email us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm(INITIAL_FORM);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.grid}>
        <div>
          <span className={styles.eyebrow}>Get in touch</span>
          <h2 className={styles.heading}>Let&apos;s talk about your business.</h2>
          <p className={styles.intro}>
            Reach out for a free first consultation. We typically respond within one business
            day.
          </p>
          <div className={styles.rows}>
            <div>
              <div className={styles.rowLabel}>Email</div>
              <div className={styles.rowValue}>hello@abhiritiadvisory.com</div>
            </div>
            <div>
              <div className={styles.rowLabel}>Phone</div>
              <div className={styles.rowValue}>+91 98XXX XXXXX</div>
            </div>
            <div>
              <div className={styles.rowLabel}>Office</div>
              <div className={styles.rowValue}>Belapur, Navi Mumbai, Maharashtra</div>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          {submitted ? (
            <div className={styles.successWrap}>
              <div className={styles.checkBadge}>✓</div>
              <h3>Thank you, {form.name}.</h3>
              <p>
                Your message has been received. A confirmation has been sent to {form.email}, and
                our team will reach out shortly.
              </p>
              <button type="button" className={styles.resetLink} onClick={resetForm}>
                Send another message →
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.twoCol}>
                <div className={styles.field}>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your name"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="+91"
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  placeholder="you@company.com"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="service">Service of interest</label>
                <select id="service" value={form.service} onChange={update('service')}>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Tell us briefly what you need help with"
                />
              </div>

              {/* Honeypot field — hidden from sighted users, bots tend to fill every input */}
              <div className={styles.honeypot} aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company}
                  onChange={update('company')}
                />
              </div>

              <div role="alert" aria-live="polite">
                {error && <p className={styles.errorMsg}>{error}</p>}
              </div>

              <button type="submit" className={styles.submit} disabled={submitting}>
                {submitting ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
