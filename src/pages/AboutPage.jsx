import Icon from '../components/Icon.jsx';
import Stat from '../components/Stat.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Hero from '../components/Hero.jsx';
import PartnerLink from '../components/PartnerLink.jsx';
import CtaBanner from '../components/CtaBanner.jsx';
import Footer from '../components/Footer.jsx';
import { PARTNERS } from '../data/partners.js';

export default function AboutPage({ setRoute }) {
  return (
    <div className="page page-fade-enter">
      <Hero
        crumbs="About Falcon"
        title={<>Founder-led.<br />Built to deliver.</>}
        lead="Falcon Project Management is a founder-led project management and grant consulting firm, built on nonprofit, construction-grant, technical, and client-facing delivery experience."
      />

      <section className="section section-dark">
        <div className="wrap about-grid">
          <div className="founder-portrait">
            <div className="founder-portrait-frame">
              <Icon name="user" size={48} />
              <span>Founder portrait pending final approved image</span>
            </div>
          </div>
          <div>
            <div className="eyebrow eyebrow-blood" style={{ color: 'var(--blood)' }}>The story</div>
            <h2 className="mt-4">Why we keep the watch.</h2>
            <p className="mt-5" style={{ color: 'var(--silver-400)' }}>Shaheen Nassar is the Founder, Executive Director, and Lead Project Manager of Falcon Project Management. He brings more than eight years of nonprofit project management experience and five years of construction grant experience, with a track record of managing high-stakes, large-budget projects involving numerous stakeholders, contractors, organizational partners, and community institutions.</p>
            <p style={{ color: 'var(--silver-400)' }}>Shaheen holds a Bachelor of Arts in Sociology and is a certified Project Management Professional (PMP) through the Project Management Institute. His professional training also includes certifications as a Certified ScrumMaster (CSM), Certified Scrum Product Owner (CSPO), and Certified Agile Facilitator (CAF). He is experienced in Agile, Waterfall, and hybrid project management methodologies and has extensive experience in technical project management, stakeholder engagement, contractor coordination, and client-facing project delivery.</p>
            <p style={{ color: 'var(--silver-400)' }}>Through Falcon, Shaheen has developed specialized expertise in nonprofit security grant consulting and management and administration, helping vulnerable institutions identify funding opportunities, develop competitive grant applications, and navigate the complex process from initial assessment and application through grant administration and project implementation. His work is driven by a commitment to connecting community institutions with critical resources needed to strengthen their facilities, protect the people they serve, and build safer, more resilient communities.</p>

            <div className="eyebrow mt-7">Credentials</div>
            <ul className="cred-list mt-4">
              {[
                ['graduation-cap', 'Bachelor of Arts in Sociology'],
                ['shield-check', 'PMP — Project Management Institute'],
                ['shield-check', 'Certified ScrumMaster (CSM)'],
                ['shield-check', 'Certified Scrum Product Owner (CSPO)'],
                ['shield-check', 'Certified Agile Facilitator (CAF)'],
              ].map(([i, t]) => (
                <li key={t}>
                  <Icon name={i} size={20} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="eyebrow mt-7">Capabilities</div>
            <p className="mt-4" style={{ color: 'var(--silver-400)' }}>Agile, Waterfall, and hybrid delivery. Technical PM, stakeholder engagement, contractor coordination, and client-facing delivery.</p>

            <div className="eyebrow mt-7">Grant specialty</div>
            <p className="mt-4" style={{ color: 'var(--silver-400)' }}>Nonprofit security grant consulting — management and administration, application support, compliance, and implementation.</p>
          </div>
        </div>
      </section>

      <section className="section section-bone" style={{ background: 'var(--bone-2)' }}>
        <div className="wrap">
          <SectionHead
            eyebrow="Our Partners"
            title="Who stands with Falcon."
            lead="Falcon works alongside a small set of trusted organizations on initiatives that call for it." />
          <div className="partners-grid">
            {PARTNERS.map(p => (
              <div key={p.id} className="card partner-card">
                <PartnerLink href={p.href} name={p.name} logoSrc={p.logoSrc} />
                <h4 className="mt-4">{p.name}</h4>
                {p.bio && <p className="mt-3" style={{ color: 'var(--silver-700)', fontSize: 14 }}>{p.bio}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <div className="stats-row">
            <Stat value="9 yr" label="In practice" />
            <Stat value="$7M+" label="Capital secured" />
            <Stat value="40+" label="Nonprofits served" />
            <Stat value="5" label="Senior partners" blood />
          </div>
        </div>
      </section>

      <section className="section section-bone" style={{ background: 'var(--bone-2)' }}>
        <div className="wrap">
          <SectionHead
            eyebrow="Sectors served"
            title="Where we have done the work."
            lead="We turn down work outside these sectors. Specialization is the point." />
          <div className="sector-grid">
            {[
              ['Nonprofit', 'heart-handshake'],
              ['Government', 'landmark'],
              ['Tech', 'cpu'],
              ['Construction', 'hard-hat'],
              ['Housing', 'home'],
              ['Energy', 'zap'],
              ['Education', 'graduation-cap'],
              ['Health systems', 'stethoscope'],
            ].map(([t, i]) => (
              <div key={t} className="sector-tile">
                <Icon name={i} size={24} />
                <div className="lab">{t}</div>
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
