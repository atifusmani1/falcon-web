import { useEffect, useRef, useState } from 'react';
import Hero from '../components/Hero.jsx';
import Footer from '../components/Footer.jsx';
import PartnerLink from '../components/PartnerLink.jsx';
import { PARTNERS } from '../data/partners.js';

const SUBMISSION_ENDPOINT = '/.netlify/functions/mosque-security-intake';

const INITIAL_FORM = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  organization: '',
  organizationAddress: '',
  preferredTime: '',
};

const REQUIRED_FIELDS = [
  'firstName',
  'lastName',
  'phone',
  'email',
  'organization',
  'organizationAddress',
  'preferredTime',
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SUBMISSION_ERROR = 'We could not submit your interest right now. Please try again.';

export default function MosqueSecurityInitiativePage({ setRoute }) {
  const [form, setForm] = useState(() => ({ ...INITIAL_FORM }));
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const requestInFlight = useRef(false);
  const firstNameInput = useRef(null);
  const successHeading = useRef(null);

  useEffect(() => {
    if (submitted) successHeading.current?.focus();
  }, [submitted]);

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
    if (error) setError(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (requestInFlight.current) return;

    const normalizedForm = Object.fromEntries(
      Object.entries(form).map(([field, value]) => [field, value.trim()]),
    );

    if (REQUIRED_FIELDS.some((field) => !normalizedForm[field])) {
      setError('Please complete every required field.');
      return;
    }

    if (!EMAIL_PATTERN.test(normalizedForm.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setForm(normalizedForm);
    setError(null);
    setSubmitting(true);
    requestInFlight.current = true;

    let errorMessage = SUBMISSION_ERROR;

    try {
      const response = await fetch(SUBMISSION_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(normalizedForm),
      });

      let result = null;
      try {
        result = await response.json();
      } catch {
        // An invalid response is handled as a failed submission below.
      }

      if (!response.ok || result?.success !== true) {
        if (typeof result?.error === 'string' && result.error) {
          errorMessage = result.error;
        }
        throw new Error('Submission was not confirmed.');
      }

      setSubmitted(true);
    } catch {
      setError(errorMessage);
    } finally {
      requestInFlight.current = false;
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setForm({ ...INITIAL_FORM });
    setError(null);
    setSubmitted(false);
    requestAnimationFrame(() => firstNameInput.current?.focus());
  };

  return (
    <div className="page page-fade-enter">
      {/* Subtitle copy below is an interim placeholder — the approved
          initiative subtitle/description paragraph is still pending
          per the revision checklist's open-items list. Replace once
          supplied and approved. */}
      <Hero
        crumbs="Falcon · Shura Council Partnership"
        title="Falcon–Shura Council Partnership: Mosque Security Initiative"
        lead="Physical security assessments, hardening grants, and emergency preparedness planning built for the specific threat landscape facing Islamic centers."
        primaryLabel="Discuss a security assessment"
        onPrimary={() => setRoute('contact')}
        onSecondary={() => setRoute('services')}
      />

      <section className="mosque-partner-band">
        <div className="wrap partners-row">
          {PARTNERS.map(p => (
            <PartnerLink key={p.id} href={p.href} name={p.name} logoSrc={p.logoSrc} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap contact-grid">
          <div>
            <div className="eyebrow eyebrow-blood" style={{ color: 'var(--blood)', fontSize: 'var(--text-md)' }}>Interest form</div>
            <h2 id="mosque-interest-heading" className="mt-4" style={{ color: 'var(--bone)' }}>Start a security conversation.</h2>
            <p className="lead mt-3">Share your organization’s information and the best time to connect with your team.</p>
          </div>

          {!submitted ? (
            <form
              className="contact-form"
              aria-labelledby="mosque-interest-heading"
              aria-describedby={error ? 'mosque-intake-error' : undefined}
              aria-busy={submitting}
              onSubmit={handleSubmit}>
              <div className="row-2">
                <div>
                  <label htmlFor="mosque-first-name">First name</label>
                  <input
                    ref={firstNameInput}
                    id="mosque-first-name"
                    className="input"
                    name="firstName"
                    autoComplete="given-name"
                    placeholder="First name"
                    required
                    maxLength={100}
                    value={form.firstName}
                    onChange={updateField('firstName')}
                  />
                </div>
                <div>
                  <label htmlFor="mosque-last-name">Last name</label>
                  <input
                    id="mosque-last-name"
                    className="input"
                    name="lastName"
                    autoComplete="family-name"
                    placeholder="Last name"
                    required
                    maxLength={100}
                    value={form.lastName}
                    onChange={updateField('lastName')}
                  />
                </div>
              </div>

              <div className="row-2">
                <div>
                  <label htmlFor="mosque-phone">Phone number</label>
                  <input
                    id="mosque-phone"
                    className="input"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="(555) 555-0123"
                    required
                    maxLength={50}
                    value={form.phone}
                    onChange={updateField('phone')}
                  />
                </div>
                <div>
                  <label htmlFor="mosque-email">Email address</label>
                  <input
                    id="mosque-email"
                    className="input"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@organization.org"
                    required
                    maxLength={254}
                    value={form.email}
                    onChange={updateField('email')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="mosque-organization">Organization represented</label>
                <input
                  id="mosque-organization"
                  className="input"
                  name="organization"
                  autoComplete="organization"
                  placeholder="Organization name"
                  required
                  maxLength={200}
                  value={form.organization}
                  onChange={updateField('organization')}
                />
              </div>

              <div>
                <label htmlFor="mosque-organization-address">Organization address</label>
                <textarea
                  id="mosque-organization-address"
                  className="input"
                  name="organizationAddress"
                  autoComplete="street-address"
                  rows="3"
                  placeholder="Street, city, state, ZIP"
                  required
                  maxLength={500}
                  value={form.organizationAddress}
                  onChange={updateField('organizationAddress')}
                />
              </div>

              <div>
                <label htmlFor="mosque-preferred-time">Preferred time to meet / speak by phone</label>
                <input
                  id="mosque-preferred-time"
                  className="input"
                  name="preferredTime"
                  placeholder="Days, times, and time zone"
                  required
                  maxLength={500}
                  value={form.preferredTime}
                  onChange={updateField('preferredTime')}
                />
              </div>

              {error && (
                <div
                  id="mosque-intake-error"
                  role="alert"
                  style={{ color: 'var(--bone)', borderLeft: '2px solid var(--blood)', paddingLeft: 12, fontSize: 14 }}>
                  {error}
                </div>
              )}
              <button
                type="submit"
                className="btn btn-primary"
                disabled={submitting}
                aria-live="polite"
                style={{ alignSelf: 'flex-start' }}>
                {submitting ? 'Submitting…' : 'Submit interest'}
              </button>
              <small>By submitting, you agree to our Privacy Policy. Your and your organization's contact details are used only to follow up on this inquiry and are not shared with anyone outside Falcon.</small>
            </form>
          ) : (
            <div className="card card-elevated" role="status" aria-live="polite" style={{ padding: 48 }}>
              <div className="eyebrow eyebrow-blood">Interest submitted</div>
              <h3 ref={successHeading} tabIndex="-1" className="mt-4">Thank you for your interest.</h3>
              <p className="mt-3">Your information was received. The Falcon team will follow up with you directly.</p>
              <button type="button" className="btn btn-secondary mt-4" onClick={resetForm}>
                Submit another response
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer setRoute={setRoute} />
    </div>
  );
}
