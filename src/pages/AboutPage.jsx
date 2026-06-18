import Icon from '../components/Icon.jsx';
import Stat from '../components/Stat.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Testimonial from '../components/Testimonial.jsx';
import CtaBanner from '../components/CtaBanner.jsx';
import Footer from '../components/Footer.jsx';

export default function AboutPage({ setRoute }) {
  return (
    <div className="page page-fade-enter">
      <section className="deep-hero">
        <div className="wrap deep-hero-inner">
          <div className="crumbs">About Falcon</div>
          <div className="deep-hero-row">
            <div>
              <h1>One firm.<br />A long memory.</h1>
              <p className="lead">Falcon was founded by Marian Wei, a former federal program officer who watched too many good projects die in submission. The firm exists to keep that from happening to yours.</p>
            </div>
            <img src="/falcon-sigil-silver.png" className="sigil" alt="" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap about-grid">
          <div>
            <div className="eyebrow eyebrow-blood" style={{ color: 'var(--blood)' }}>The story</div>
            <h2 className="mt-4">Why we keep the watch.</h2>
            <p className="mt-5">Most projects do not fail because the work is hard. They fail because no one is holding the schedule, the budget, and the scope at the same time. We are that party.</p>
            <p>Marian spent eleven years inside federal programs at HUD and EPA. She read 600+ grants from the reviewer's chair before she ever wrote one. That perspective — what a funder actually wants — is the difference between a polished application and a funded one.</p>
            <p>Falcon now operates as a partnership of five senior PMs. We do not subcontract delivery. The person on the kickoff call is the person on the close-out call.</p>
          </div>
          <div>
            <div className="eyebrow">Credentials</div>
            <ul className="cred-list mt-4">
              {[
                ['shield-check', 'PMP — Project Management Institute', '2014'],
                ['shield-check', 'Certified Grant Writer (GPC)', '2016'],
                ['shield-check', 'OSHA 30 — Construction', '2019'],
                ['shield-check', 'Federal Acquisition Certification (FAC-P/PM)', '2020'],
                ['shield-check', 'PROSCI Change Management', '2022'],
              ].map(([i, t, y]) => (
                <li key={t}>
                  <Icon name={i} size={20} />
                  <span>{t}</span>
                  <span style={{ color: 'var(--silver-600)', fontSize: 13 }}>{y}</span>
                </li>
              ))}
            </ul>
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

      <section className="section">
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
