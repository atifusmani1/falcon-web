import Icon from './Icon.jsx';

export default function CtaBanner({ setRoute }) {
  return (
    <section className="cta-banner">
      <div className="wrap cta-banner-inner">
        <hr className="divider-metal" />
        <span className="eyebrow" style={{ color: 'var(--silver-400)' }}>Begin</span>
        <h2 className="mt-4">The watch is yours.<br />The project is ours.</h2>
        <p className="lead">Tell us what you need delivered. We will respond as soon as possible, and during most weeks, you can expect to hear from us the same day.</p>
        <div className="actions">
          <button className="btn btn-primary" onClick={() => setRoute('contact')}>
            Start the engagement <Icon name="arrow-right" size={16} />
          </button>
          <button className="btn btn-on-dark" onClick={() => setRoute('services')}>View services</button>
        </div>
      </div>
    </section>
  );
}
