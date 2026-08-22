import { useState } from 'react';
import Icon from '../components/Icon.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Hero from '../components/Hero.jsx';
import Testimonial from '../components/Testimonial.jsx';
import CtaBanner from '../components/CtaBanner.jsx';
import Footer from '../components/Footer.jsx';
import { TESTIMONIALS } from '../data/testimonials.js';

const FAQ = [
  { q: 'How long does a typical engagement run?', a: 'Six weeks for a single grant application. Three to twelve months for ongoing PM. Construction oversight typically tracks the build duration plus 90 days closeout.' },
  { q: 'Do you take a percentage of grants you win?', a: 'No. All Falcon engagements are fixed-fee. We believe contingency arrangements create the wrong incentives — and most federal funders restrict them.' },
  { q: 'What does a typical first month look like?', a: 'Week 1 is intake and brief. Week 2 is draft. Week 3 is the reviewer-style read and revise. Week 4 is submission prep. You will hear from us at least three times a week.' },
  { q: 'Will I work with the same person throughout?', a: 'Yes. Falcon does not rotate staff or subcontract delivery. The senior PM on your kickoff is on your closeout.' },
  { q: 'Do you sign NDAs?', a: 'Yes — mutual NDA is standard and we sign yours or ours.' },
];

export default function ClientResourcesPage({ setRoute }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="page page-fade-enter">
      <Hero
        crumbs="Client Resources"
        title="What clients ask, before they ask."
        lead="Results from active engagements, answers to the questions we hear most, and the practical things you need to know before working with Falcon."
      />

      <section className="section section-dark">
        <div className="wrap">
          <SectionHead
            eyebrow="Track record"
            title="What clients can count on."
            lead="The proof points that matter most, while we assemble the hard numbers behind them." />
          <div className="proof-grid">
            {[
              {
                title: 'Strong Track Record',
                desc: 'Demonstrated success helping nonprofit organizations navigate competitive grant applications and secure critical funding.',
              },
              {
                title: 'Persistent Grant Support',
                desc: 'Continued support for qualifying clients through application and reapplication cycles, helping organizations strengthen submissions and pursue funding opportunities.',
              },
              {
                title: 'Compliance-Focused Project Management',
                desc: 'Grant-funded projects managed with a strong emphasis on applicable grant requirements, approved scopes of work, budgets, and administrative requirements.',
              },
              {
                title: 'Extensive Contractor Network',
                desc: 'Access to a broad network of licensed contractors and service providers to support competitive procurement and successful project execution.',
              },
            ].map((p) => (
              <div key={p.title} className="proof-card">
                <h4>{p.title}</h4>
                <p className="mt-2">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-bone" style={{ background: 'var(--bone-2)' }}>
        <div className="wrap">
          <SectionHead
            eyebrow="Said directly"
            title="What our clients say."
            lead="Quotes pulled from project closeouts and reference calls — used with permission." />
          <div className="testimonials">
            {TESTIMONIALS.filter((t) => t.quote).map((t) => (
              <Testimonial key={t.name} quote={t.quote} name={t.name} role={t.role} initials={t.initials} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap" style={{ maxWidth: 880 }}>
          <SectionHead
            eyebrow="Questions"
            title="Questions we answer often."
            lead="Click a question to expand its answer. If yours isn't here, send it to us directly." />
          <div>
            {FAQ.map((f, i) => (
              <div key={i} className="faq-item" onClick={() => setOpen(open === i ? -1 : i)}>
                <div className="q">
                  <span>{f.q}</span>
                  <Icon name={open === i ? 'minus' : 'plus'} size={20} />
                </div>
                <div className={`a-wrap ${open === i ? 'is-open' : ''}`}>
                  <div className="a-inner">{f.a}</div>
                </div>
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
