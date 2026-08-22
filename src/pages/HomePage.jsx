import { useEffect } from 'react';
import Icon from '../components/Icon.jsx';
import Stat from '../components/Stat.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import CtaBanner from '../components/CtaBanner.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Footer from '../components/Footer.jsx';
import { FalconScene } from '../components/FalconScene';
import { SERVICES } from '../data/services.js';
import { TESTIMONIALS } from '../data/testimonials.js';

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
      <section className="hero" id="main" aria-label="Introduction" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', z: '2' }}>
         <div style={{
            position: 'absolute', inset: 0, zIndex: 0,
            background: 'radial-gradient( #351d1d, #120e0e, #2d0000)',
            backgroundSize: '300% 200%',
            animation: 'gradientShift 15s ease infinite',
            opacity: 0.6,
          }} />
        <FalconScene />
        <div className="wrap-wide hero-content">
          <h1>We manage the projects others cannot afford to lose.</h1>
          <p className="lead">Grant consulting and general project management for nonprofits, public agencies, and mission-driven organizations — including technical and construction project delivery.</p>
          <div className="actions">
            <button className="btn btn-primary" onClick={() => setRoute('contact')}>
              Start the engagement <Icon name="arrow-right" size={16} />
            </button>
            <button className="btn btn-on-dark" onClick={() => setRoute('services')}>View services</button>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <hr className="divider-metal" style={{ margin: '0 0 64px' }} />
          <div className="stats-row stats-row-3">
            <Stat value="$7M+" label="Grant capital secured" />
            <Stat value="40+" label="Nonprofits served" />
            <Stat value="100%" label="Grant Success to Date*" blood />
          </div>
          <p className="small mt-6" style={{ maxWidth: '80ch', color: 'var(--silver-500)' }}>
            *To date, Falcon's completed grant-consulting engagements have resulted in successful grant awards for clients who completed the recommended application and reapplication process. This figure reflects completed application cycles and excludes active applications, pending submissions, and clients currently preparing for or awaiting a future reapplication cycle. Historical performance does not guarantee future grant awards.
          </p>
        </div>
      </section>

      <section className="section section-bone">
        <div className="wrap">
          <SectionHead
            eyebrow="Services"
            title={<>Five disciplines.<br />One standard.</>}
            lead="We work across grant, general, technical, construction, and mosque security project management. The work changes; the rigor doesn't." />
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
            eyebrow="From those we serve"
            title={<>The watch, in their words.</>}
            lead="Two clients on what changed when Falcon took the engagement." />
          <div className="testimonials">
            {TESTIMONIALS.filter((t) => t.quote).map((t) => (
              <Testimonial key={t.name} quote={t.quote} name={t.name} role={t.role} initials={t.initials} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner setRoute={setRoute} />
      <Footer setRoute={setRoute} />
    </div>
  );
}
