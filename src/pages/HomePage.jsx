import { useEffect } from 'react';
import Icon from '../components/Icon.jsx';
import Stat from '../components/Stat.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import Testimonial from '../components/Testimonial.jsx';
import CtaBanner from '../components/CtaBanner.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Footer from '../components/Footer.jsx';
import { SERVICES } from '../data/services.js';

export default function HomePage({ setRoute }) {
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const t = Math.min(y / 600, 1);
      const rot = -14 + t * 28;
      document.documentElement.style.setProperty('--hero-ry', rot + 'deg');
      const shineX = 0.5 - (rot / 14) * 0.4;
      document.documentElement.style.setProperty('--shine-x', shineX);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="page page-fade-enter">
      <a href="#main" className="skip-link">Skip to main content</a>
      <section className="hero" id="main" aria-label="Introduction">
        <div className="hero-sigil-wrap" aria-hidden="true">
          <img className="hero-sigil-img" src="/falcon-sigil-outline.png" alt="" />
          <img className="hero-sigil-shine" src="/falcon-sigil-outline.png" alt="" />
        </div>
        <div className="wrap-wide hero-content">
          <h1>We manage the projects others cannot afford to lose.</h1>
          <p className="lead">Grant consulting, general PM, technology delivery, and construction oversight — for nonprofits, public agencies, and mission-driven private clients.</p>
          <div className="actions">
            <button className="btn btn-primary" onClick={() => setRoute('contact')}>
              Start the engagement <Icon name="arrow-right" size={16} />
            </button>
            <button className="btn btn-on-dark" onClick={() => setRoute('services')}>View services</button>
          </div>
        </div>
      </section>

      <section className="section section-bone">
        <div className="wrap">
          <hr className="divider-metal" style={{ margin: '0 0 64px' }} />
          <div className="stats-row">
            <Stat value="$8M+" label="Grant capital secured" />
            <Stat value="40+" label="Nonprofits served" />
            <Stat value="12" label="Active engagements" />
            <Stat value="100%" label="On-schedule delivery" blood />
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <SectionHead
            eyebrow="Services"
            title={<>Four disciplines.<br />One standard.</>}
            lead="We work across grant, general, technical, and construction project management. The work changes; the rigor doesn't." />
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
            eyebrow="From those we serve"
            title={<>The watch, in their words.</>}
            lead="Two clients on what changed when Falcon took the engagement." />
          <div className="testimonials">
            <Testimonial
              quote="They held the schedule when ours fell apart. We funded the build because of it."
              name="D. Reyes" role="Executive Director, North Bay Housing Coalition" initials="DR" />
            <Testimonial
              quote="Falcon writes a grant the way a senior engineer writes a tech spec. Clarity, scope, no fluff."
              name="A. Okonkwo" role="Deputy Director, Trinity County Public Works" initials="AO" />
          </div>
        </div>
      </section>

      <CtaBanner setRoute={setRoute} />
      <Footer setRoute={setRoute} />
    </div>
  );
}
