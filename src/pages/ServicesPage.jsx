import ServiceCard from '../components/ServiceCard.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Hero from '../components/Hero.jsx';
import CtaBanner from '../components/CtaBanner.jsx';
import Footer from '../components/Footer.jsx';
import { SERVICES } from '../data/services.js';

export default function ServicesPage({ setRoute }) {
  return (
    <div className="page page-fade-enter">
      <Hero
        crumbs="Falcon · Services"
        title="The ways we hold the line on a project."
        lead="Each discipline is a standalone engagement. Combine two that work together, or bring in one that stands on its own."
      />

      <section className="section">
        <div className="wrap">
          <div className="service-grid">
            {SERVICES.map(s => (
              <ServiceCard key={s.id} num={s.num} icon={s.icon} title={s.title} desc={s.desc}
                onOpen={() => setRoute(s.id === 'service-grant' || s.id === 'mosque-security' ? s.id : 'services')} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-bone" style={{ background: 'var(--bone-2)' }}>
        <div className="wrap">
          <SectionHead
            eyebrow="Ideal client"
            title="Who we are best for."
            lead="Falcon is built for clients with high stakes and complex stakeholders. Grant consulting is our specialty for nonprofits and public agencies — our broader project management services extend to private-sector clients as well." />
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
