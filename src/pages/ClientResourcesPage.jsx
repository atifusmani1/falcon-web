import { useState } from 'react';
import Icon from '../components/Icon.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Hero from '../components/Hero.jsx';
import Testimonial from '../components/Testimonial.jsx';
import CtaBanner from '../components/CtaBanner.jsx';
import Footer from '../components/Footer.jsx';
import { TESTIMONIALS } from '../data/testimonials.js';
import { PROOF_POINTS } from '../data/proofPoints.js';
import { FAQ } from '../data/faq.js';

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
        
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {PROOF_POINTS.map(p => (
            <div key={p.title} className="card" style={{ background: 'var(--ink-2)', borderColor: 'var(--border-dark)' }}>
              <h4 style={{ color: 'var(--bone)' }}>{p.title}</h4>
              <p className="mt-3" style={{ color: 'var(--silver-400)', fontSize: 14 }}>{p.desc}</p>
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
            lead="Quotes shared with permission." />
          <div className="testimonials" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {TESTIMONIALS.map(t => (
              <Testimonial key={t.id} quote={t.quote} name={t.name} role={t.role} initials={t.initials} />

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
