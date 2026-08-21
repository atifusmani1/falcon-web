import { useState } from 'react';
import Icon from '../components/Icon.jsx';
import Footer from '../components/Footer.jsx';

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
      const response = await fetch("https://formspree.io/f/xnjyykwj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Formspree rejected the submission.");
      }
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
              <p className="lead">Tell us what you need delivered. We will respond as soon as possible, and during most weeks, you can expect to hear from us the same day.</p>
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
                    <label htmlFor="contact-name">Name</label>
                    <input id="contact-name" className="input" name="name" required value={form.name} onChange={upd('name')} placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="contact-email">Email</label>
                    <input id="contact-email" className="input" type="email" name="email" required value={form.email} onChange={upd('email')} placeholder="you@org.com" />
                  </div>
                </div>
                <div className="row-2">
                  <div>
                    <label htmlFor="contact-phone">Phone</label>
                    <input id="contact-phone" className="input" name="phone" value={form.phone} onChange={upd('phone')} placeholder="(415) 555-0142" />
                  </div>
                  <div>
                    <label htmlFor="contact-project-type">Project type</label>
                    <select id="contact-project-type" className="input" name="projectType" value={form.projectType} onChange={upd('projectType')} style={{ appearance: 'none', cursor: 'pointer' }}>
                      <option>Grant Consulting</option>
                      <option>General PM</option>
                      <option>Tech Projects</option>
                      <option>Construction PM</option>
                      <option>Other / not sure</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message">Message</label>
                  <textarea id="contact-message" className="input" name="message" required rows="6" value={form.message} onChange={upd('message')} placeholder="Tell us about the engagement — timeline, stakes, what good looks like." />
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
                <p className="mt-3">We will respond as soon as possible, and during most weeks, you can expect to hear from us the same day. If your matter is urgent, call (415) 555-0142.</p>
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
                <div className="ci-value">We will respond as soon as possible, and during most weeks, you can expect to hear from us the same day.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer setRoute={setRoute} />
    </div>
  );
}
