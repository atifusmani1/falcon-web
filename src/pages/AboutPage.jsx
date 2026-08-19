import Icon from '../components/Icon.jsx';
import Stat from '../components/Stat.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Hero from '../components/Hero.jsx';
import Testimonial from '../components/Testimonial.jsx';
import CtaBanner from '../components/CtaBanner.jsx';
import Footer from '../components/Footer.jsx';

export default function AboutPage({ setRoute }) {
  return (
    <div className="page page-fade-enter">
      <Hero
        crumbs="About Falcon"
        title={<>One firm.<br />A long memory.</>}
        lead="Falcon was founded by Shaheen Nassar — Founder, Executive Director, and Lead Project Manager — who brings 8+ years of nonprofit project management experience and 5 years of construction grant experience to high-stakes, large-budget, multi-stakeholder projects."
      />

      <section className="section section-dark">
        <div className="wrap about-grid">
          <div>
            <div className="eyebrow eyebrow-blood" style={{ color: 'var(--blood)' }}>The story</div>
            <h2 className="mt-4">Why we keep the watch.</h2>
            <p className="mt-5" style={{ color: 'var(--silver-400)'}}>Most projects do not fail because the work is hard. They fail because no one is holding the schedule, the budget, and the scope at the same time. We are that party.</p>
            <p style={{ color: 'var(--silver-400)'}}>Shaheen brings 8+ years of nonprofit project management experience and 5 years of construction grant experience — high-stakes, large-budget, multi-stakeholder work where the margin for error is thin. That is the standard every Falcon engagement is held to.</p>
            <p style={{ color: 'var(--silver-400)'}}>Falcon now operates as a partnership of five senior PMs. We do not subcontract delivery. The person on the kickoff call is the person on the close-out call.</p>
          </div>
          <div>
            <div className="eyebrow">Credentials</div>
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

      <section className="section section-dark">
        <div className="wrap">
          <div className="stats-row">
            <Stat value="9 yr" label="In practice" />
            <Stat value="$8M+" label="Capital secured" />
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

      <section className="section section-dark">
        <div className="wrap">
          <SectionHead
            eyebrow="Witnesses"
            title="On the record."
            lead="Two of our clients on the day they decided to keep working with us." />
          <div className="testimonials">
            <Testimonial
              quote="The first grant we did with Falcon was a long shot. We won. The second one we did with them was not a long shot — because they made sure of that."
              name="L. Ferreira" role="Board Chair, Open Bay Foundation" initials="LF" />
            <Testimonial
              quote="A senior PM, not a sales engineer. That is what you get on day one. Refreshing."
              name="M. Hassan" role="COO, Civic Signal" initials="MH" />
          </div>
        </div>
      </section>

      <CtaBanner setRoute={setRoute} />
      <Footer setRoute={setRoute} />
    </div>
  );
}
