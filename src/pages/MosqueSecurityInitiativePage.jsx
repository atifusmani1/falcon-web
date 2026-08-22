import Hero from '../components/Hero.jsx';
import Footer from '../components/Footer.jsx';
import { PARTNERS } from '../data/partners.js';

const shuraCouncil = PARTNERS.find((p) => p.id === 'shura-council');

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
        <div className="wrap">
          <div className="eyebrow eyebrow-blood" style={{ color: 'var(--blood)' }}>In partnership with</div>
          <div className="partners-grid mt-5" style={{ gridTemplateColumns: '1fr', maxWidth: 640 }}>
            <div className="partner-card">
              <a
                className="partner-logo"
                href={shuraCouncil.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit the ${shuraCouncil.name} website (opens in a new tab)`}
              >
                <img src={shuraCouncil.logo} alt={`${shuraCouncil.name} logo`} />
              </a>
              <div>
                <h4>{shuraCouncil.name}</h4>
                <p className="mt-2">{shuraCouncil.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer setRoute={setRoute} />
    </div>
  );
}
