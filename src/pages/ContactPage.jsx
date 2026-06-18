import { useState } from 'react';
import Icon from '../components/Icon.jsx';
import Footer from '../components/Footer.jsx';
import { submitContactInquiry } from '../services/contact.js';

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  projectType: 'Grant Consulting',
  message: '',
};

export default function ContactPage({ setRoute }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState(INITIAL_FORM);

  const upd = (k) => (e) => setForm(s => ({ ...s, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await submitContactInquiry(form);
      setSubmitted(true);
    } catch (err) {
      setError('Submission failed. Please try again or call us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setSubmitted(false);
    setError(null);
    setForm(INITIAL_FORM);
  };

  return (
    <div className="page page-fade-enter">
      <section className="deep-hero">
        <div className="wrap deep-hero-inner">
          <div className="crumbs">Contact</div>
          <div className="deep-hero-row">
            <div>
              <h1>Send the signal.</h1>
              <p className="lead">Tell us what you need delivered. We will respond within one business day — most weeks, the same afternoon.</p>
            </div>
            <img src="/falcon-sigil-silver.png" className="sigil" alt="" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap contact-grid">
          <div>
            {!submitted ? (
              <form className="contact-form" onSubmit={onSubmit}>
                <div className="row-2">
                  <div>
                    <label>Name</label>
                    <input className="input" required value={form.name} onChange={upd('name')} placeholder="Your name" />
                  </div>
                  <div>
                    <label>Email</label>
                    <input className="input" type="email" required value={form.email} onChange={upd('email')} placeholder="you@org.com" />
                  </div>
                </div>
                <div className="row-2">
                  <div>
                    <label>Phone</label>
                    <input className="input" value={form.phone} onChange={upd('phone')} placeholder="(415) 555-0142" />
                  </div>
                  <div>
                    <label>Project type</label>
                    <select className="input" value={form.projectType} onChange={upd('projectType')} style={{ appearance: 'none', cursor: 'pointer' }}>
                      <option>Grant Consulting</option>
                      <option>General PM</option>
                      <option>Tech Projects</option>
                      <option>Construction PM</option>
                      <option>Other / not sure</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label>Message</label>
                  <textarea className="input" required rows="6" value={form.message} onChange={upd('message')} placeholder="Tell us about the engagement — timeline, stakes, what good looks like." />
                </div>
                {error && (
                  <div role="alert" style={{ color: 'var(--blood)', fontSize: 14 }}>
                    {error}
                  </div>
                )}
                <button type="submit" className="btn btn-primary" disabled={submitting} style={{ alignSelf: 'flex-start' }}>
                  {submitting ? 'Sending…' : <>Send the signal <Icon name="arrow-right" size={16} /></>}
                </button>
                <small>By submitting, you agree to our Privacy Policy. We do not share inquiries with anyone.</small>
              </form>
            ) : (
              <div className="card card-elevated" style={{ padding: 48 }}>
                <Icon name="check-circle-2" size={36} style={{ color: 'var(--blood)' }} />
                <h3 className="mt-4">The signal is received.</h3>
                <p className="mt-3">We'll be in touch within one business day. If your matter is urgent, call (415) 555-0142.</p>
                <button className="btn btn-secondary mt-4" onClick={reset}>Send another</button>
              </div>
            )}
          </div>
          <div className="contact-info">
            <div className="ci-item">
              <Icon name="mail" size={24} />
              <div>
                <div className="ci-label">Email</div>
                <div className="ci-value">hello@falconpm.co</div>
              </div>
            </div>
            <div className="ci-item">
              <Icon name="phone" size={24} />
              <div>
                <div className="ci-label">Direct line</div>
                <div className="ci-value">(415) 555-0142</div>
              </div>
            </div>
            <div className="ci-item">
              <Icon name="map-pin" size={24} />
              <div>
                <div className="ci-label">Office</div>
                <div className="ci-value">Oakland, California</div>
              </div>
            </div>
            <div className="ci-item" style={{ background: 'var(--ink)', color: 'var(--bone)', border: 0 }}>
              <Icon name="clock" size={24} style={{ color: 'var(--silver-300)' }} />
              <div>
                <div className="ci-label" style={{ color: 'var(--silver-400)' }}>Response time</div>
                <div className="ci-value">One business day · usually same afternoon</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer setRoute={setRoute} />
    </div>
  );
}
