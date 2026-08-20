import Hero from '../components/Hero.jsx';
import Footer from '../components/Footer.jsx';

export default function MosqueSecurityInitiativePage({ setRoute }) {
  return (
    <div className="page page-fade-enter">
      <Hero
        crumbs="Services · 05 Mosque Security Initiative"
        title="Protecting the places you gather to pray."
        lead="Physical security assessments, hardening grants, and emergency preparedness planning built for the specific threat landscape facing Islamic centers."
        primaryLabel="Discuss a security assessment"
        onPrimary={() => setRoute('contact')}
        onSecondary={() => setRoute('services')}
      />

      <section className="section">
        <div className="wrap contact-grid">
          <div>
            <div className="eyebrow eyebrow-blood" style={{ color: 'var(--blood)', fontSize: 'var(--text-md)' }}>Interest form</div>
            <h2 id="mosque-interest-heading" className="mt-4" style={{ color: 'var(--bone)' }}>Start a security conversation.</h2>
            <p className="lead mt-3">Share your organization’s information and the best time to connect with your team.</p>
          </div>

          <form className="contact-form" aria-labelledby="mosque-interest-heading">
            <div className="row-2">
              <div>
                <label htmlFor="mosque-first-name">First name</label>
                <input id="mosque-first-name" className="input" name="firstName" autoComplete="given-name" placeholder="First name" />
              </div>
              <div>
                <label htmlFor="mosque-last-name">Last name</label>
                <input id="mosque-last-name" className="input" name="lastName" autoComplete="family-name" placeholder="Last name" />
              </div>
            </div>

            <div className="row-2">
              <div>
                <label htmlFor="mosque-phone">Phone number</label>
                <input id="mosque-phone" className="input" type="tel" name="phone" autoComplete="tel" placeholder="(555) 555-0123" />
              </div>
              <div>
                <label htmlFor="mosque-email">Email address</label>
                <input id="mosque-email" className="input" type="email" name="email" autoComplete="email" placeholder="you@organization.org" />
              </div>
            </div>

            <div>
              <label htmlFor="mosque-organization">Organization represented</label>
              <input id="mosque-organization" className="input" name="organization" autoComplete="organization" placeholder="Organization name" />
            </div>

            <div>
              <label htmlFor="mosque-organization-address">Organization address</label>
              <textarea id="mosque-organization-address" className="input" name="organizationAddress" autoComplete="street-address" rows="3" placeholder="Street, city, state, ZIP" />
            </div>

            <div>
              <label htmlFor="mosque-preferred-time">Preferred time to meet / speak by phone</label>
              <input id="mosque-preferred-time" className="input" name="preferredTime" placeholder="Days, times, and time zone" />
            </div>

            <small id="mosque-intake-status">Online submissions are not yet enabled.</small>
            <button
              type="button"
              className="btn btn-primary"
              disabled
              aria-describedby="mosque-intake-status"
              style={{ alignSelf: 'flex-start', opacity: 0.55, cursor: 'not-allowed' }}>
              Submit interest
            </button>
          </form>
        </div>
      </section>

      <Footer setRoute={setRoute} />
    </div>
  );
}
