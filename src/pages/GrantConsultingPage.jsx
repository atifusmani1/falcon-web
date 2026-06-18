import Icon from '../components/Icon.jsx';
import Stat from '../components/Stat.jsx';
import SectionHead from '../components/SectionHead.jsx';
import CtaBanner from '../components/CtaBanner.jsx';
import Footer from '../components/Footer.jsx';

export default function GrantConsultingPage({ setRoute }) {
  return (
    <div className="page page-fade-enter">
      <section className="deep-hero">
        <div className="wrap deep-hero-inner">
          <div className="crumbs">Services · 01 Grant Consulting</div>
          <div className="deep-hero-row">
            <div>
              <h1>Grants, drafted to be won.</h1>
              <p className="lead">Eligibility, narrative, budget, submission, and post-award stewardship. We have secured $8M+ for over 40 nonprofits since 2017.</p>
              <div className="actions" style={{ marginTop: 32, display: 'flex', gap: 12 }}>
                <button className="btn btn-primary" onClick={() => setRoute('contact')}>
                  Discuss a grant <Icon name="arrow-right" size={16} />
                </button>
                <button className="btn btn-on-dark" onClick={() => setRoute('services')}>Back to services</button>
              </div>
            </div>
            <img src="/falcon-sigil-silver.png" className="sigil" alt="" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="What's included"
            title="Everything from eligibility to award."
            lead="Each engagement is fixed-scope and fixed-fee. No padding. We document every assumption." />
          <ul className="included-grid">
            {[
              ['Eligibility assessment', 'Cross-reference your work to current Notices of Funding Opportunity.'],
              ['Narrative drafting', 'Outcome-led writing, reviewed by a senior PM with delivery experience.'],
              ['Budget construction', 'Line items, indirect cost, match documentation, sub-awards.'],
              ['Submission support', 'Grants.gov / SAM / state portals. We handle the upload and the errata.'],
              ['Reviewer prep', 'A reviewer-style read in week 3, with rewrite cycles built in.'],
              ['Post-award stewardship', 'Reporting cadence, drawdowns, audit prep, closeout.'],
            ].map(([t, d]) => (
              <li key={t}>
                <span className="check"><Icon name="check" size={20} /></span>
                <div><strong>{t}</strong><span>{d}</span></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-bone" style={{ background: 'var(--bone-2)' }}>
        <div className="wrap">
          <SectionHead
            eyebrow="Grant types"
            title="What we have written and won."
            lead="Federal, state, and large foundation grants. We do not pursue micro-grants under $50k." />
          <div className="sector-grid">
            {[
              ['Federal infrastructure', 'building-2'],
              ['HUD & housing', 'home'],
              ['NEH / NEA cultural', 'landmark'],
              ['DOE energy transition', 'zap'],
              ['Foundation (Ford, Hewlett)', 'gem'],
              ['State workforce', 'briefcase'],
              ['EPA environmental', 'leaf'],
              ['DOT transit & rail', 'train'],
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
            eyebrow="Process"
            title="Four moves, six to twelve weeks."
            lead="Engagements run six weeks for a single application, twelve for a multi-application portfolio." />
          <div className="process-list">
            {[
              ['Brief', 'One-hour intake, written brief, eligibility map.'],
              ['Draft', 'Full narrative + budget within three weeks.'],
              ['Review', 'Reviewer-style read. Revise. Repeat.'],
              ['Submit', 'Upload, verify, monitor, defend.'],
            ].map(([t, d], i) => (
              <div key={t} className="process-step">
                <div className="num">{String(i + 1).padStart(2, '0')}</div>
                <h4>{t}</h4>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <div className="stats-row">
            <Stat value="$8M+" label="Capital secured to date" />
            <Stat value="40+" label="Nonprofits served" />
            <Stat value="68%" label="Win rate on submitted" blood />
            <Stat value="6 wk" label="Median engagement" />
          </div>
        </div>
      </section>

      <CtaBanner setRoute={setRoute} />
      <Footer setRoute={setRoute} />
    </div>
  );
}
