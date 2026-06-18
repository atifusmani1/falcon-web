import ServiceCard from '../components/ServiceCard.jsx';
import SectionHead from '../components/SectionHead.jsx';
import CtaBanner from '../components/CtaBanner.jsx';
import Footer from '../components/Footer.jsx';
import { SERVICES } from '../data/services.js';

export default function ServicesPage({ setRoute }) {
  return (
    <div className="page page-fade-enter">
      <section className="deep-hero">
        <div className="wrap deep-hero-inner">
          <div className="crumbs">Falcon · Services</div>
          <div className="deep-hero-row">
            <div>
              <h1>Four ways we hold the line on a project.</h1>
              <p className="lead">Each discipline is a standalone engagement. Many clients hire us for two — grant and the build it funds, or PM and the tech program it depends on.</p>
            </div>
            <img src="/falcon-sigil-silver.png" className="sigil" alt="" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="service-grid">
            {SERVICES.map(s => (
              <ServiceCard key={s.id} num={s.num} icon={s.icon} title={s.title} desc={s.desc}
                onOpen={() => setRoute(s.id === 'service-grant' ? 'service-grant' : 'services')} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-bone" style={{ background: 'var(--bone-2)' }}>
        <div className="wrap">
          <SectionHead
            eyebrow="Ideal client"
            title="Who we are best for."
            lead="Falcon is built for clients with high stakes and complex stakeholders. If your project absolutely has to land, we are the right call." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              ['Mission-driven nonprofits', 'Federal and foundation funding cycles. Multi-site programs.'],
              ['Public agencies', 'Compliance-heavy work, prevailing wage, federal reporting.'],
              ['Mission-aligned private sector', 'Infrastructure, energy transition, civic technology.'],
            ].map(([t, d]) => (
              <div key={t} className="card">
                <h4>{t}</h4>
                <p className="mt-3" style={{ color: 'var(--silver-700)', fontSize: 14 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner setRoute={setRoute} />
      <Footer setRoute={setRoute} />
    </div>
  );
}
