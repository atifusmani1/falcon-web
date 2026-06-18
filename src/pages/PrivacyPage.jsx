import Footer from '../components/Footer.jsx';

export default function PrivacyPage({ setRoute }) {
  return (
    <div className="page page-fade-enter">
      <section className="deep-hero">
        <div className="wrap deep-hero-inner">
          <div className="crumbs">Legal</div>
          <h1>Privacy Policy</h1>
          <p className="lead">Last updated May 2026. Plain language; we are a small firm and we do not sell or share data.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <h3>Data we collect</h3>
          <p className="mt-3">Inquiry form submissions: name, email, phone, project type, message. Usage analytics: page views and referring source via a privacy-first provider. No third-party advertising trackers.</p>
          <h3 className="mt-7">How we use it</h3>
          <p className="mt-3">Solely to respond to your inquiry and improve the site. Inquiries are retained for three years and then deleted unless you become a client.</p>
          <h3 className="mt-7">Cookies</h3>
          <p className="mt-3">A single first-party cookie holds your form draft if you navigate away. No third-party cookies are set.</p>
        </div>
      </section>
      <Footer setRoute={setRoute} />
    </div>
  );
}
