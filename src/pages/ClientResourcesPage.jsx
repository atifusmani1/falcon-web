import { useState } from 'react';
import Icon from '../components/Icon.jsx';
import Stat from '../components/Stat.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Testimonial from '../components/Testimonial.jsx';
import CtaBanner from '../components/CtaBanner.jsx';
import Footer from '../components/Footer.jsx';

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
      <section className="deep-hero">
        <div className="wrap deep-hero-inner">
          <div className="crumbs">Client Resources</div>
          <div className="deep-hero-row">
            <div>
              <h1>What clients ask, before they ask.</h1>
              <p className="lead">Results from active engagements, answers to the questions we hear most, and the practical things you need to know before working with Falcon.</p>
            </div>
            <img src="/falcon-sigil-silver.png" className="sigil" alt="" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="stats-row">
            <Stat value="$4.2M" label="Recent HUD CDBG award" />
            <Stat value="14 mo" label="Build delivered ahead" />
            <Stat value="3 yr" label="Median client tenure" />
            <Stat value="97%" label="Client retention" blood />
          </div>
        </div>
      </section>

      <section className="section section-bone" style={{ background: 'var(--bone-2)' }}>
        <div className="wrap">
          <SectionHead
            eyebrow="Said directly"
            title="What our clients say."
            lead="Quotes pulled from project closeouts and reference calls — used with permission." />
          <div className="testimonials" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <Testimonial
              quote="They held the schedule when ours fell apart. We funded the build because of it."
              name="D. Reyes" role="Executive Director, North Bay Housing Coalition" initials="DR" />
            <Testimonial
              quote="Falcon writes a grant the way a senior engineer writes a tech spec. No fluff."
              name="A. Okonkwo" role="Deputy Director, Trinity County Public Works" initials="AO" />
            <Testimonial
              quote="A senior PM, not a sales engineer, on day one. That is the entire pitch."
              name="M. Hassan" role="COO, Civic Signal" initials="MH" />
            <Testimonial
              quote="The first grant was a long shot. We won. The second one wasn't — because they made sure of that."
              name="L. Ferreira" role="Board Chair, Open Bay Foundation" initials="LF" />
          </div>
        </div>
      </section>

      <section className="section">
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
                {open === i && <div className="a mt-3">{f.a}</div>}
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
