// Falcon PM — Shared components.
const { useState, useEffect, useRef, useLayoutEffect } = React;

/* ---------- Icon helper (Lucide) ---------- */
function Icon({ name, size = 20, stroke = 1.5, style }) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.setAttribute('data-lucide', name);
      window.lucide.createIcons({ icons: window.lucide.icons });
    }
  }, [name]);
  return (
    <i ref={ref} data-lucide={name}
       style={{ width: size, height: size, strokeWidth: stroke, display: 'inline-flex', ...style }} />
  );
}

/* ---------- Sigil intro overlay ---------- */
function SigilIntro({ onDone }) {
  useEffect(() => {
    const t = setTimeout(() => onDone(), 2100);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="sigil-intro" aria-hidden>
      <img src="../../assets/falcon-sigil-silver.png" alt="" />
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav({ route, setRoute, navState }) {
  const SERVICE_LINKS = [
    { id: 'service-grant',        num: '01', label: 'Grant Consulting' },
    { id: 'service-pm',           num: '02', label: 'General PM' },
    { id: 'service-tech',         num: '03', label: 'Tech Projects' },
    { id: 'service-construction', num: '04', label: 'Construction PM' },
  ];
  const items = [
    { id: 'services', label: 'Services', dropdown: SERVICE_LINKS },
    { id: 'about', label: 'About' },
    { id: 'resources', label: 'Client Resources' },
    { id: 'contact', label: 'Contact' },
  ];
  const onDark = navState === 'transparent' || navState === 'glass';
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on Esc
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setMobileOpen(false); };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [mobileOpen]);

  const goMobile = (r) => { setRoute(r); setMobileOpen(false); };

  return (
    <>
      <nav className={"nav nav-" + navState} aria-label="Primary">
        <div className="nav-inner">
          <button className="nav-brand" onClick={() => setRoute('home')} aria-label="Falcon Project Management — Home">
            <img src={onDark ? '../../assets/falcon-sigil-white.png' : '../../assets/falcon-sigil.png'} alt="" />
            <span className="wm">FALCON</span>
          </button>
          <ul className="nav-links">
            {items.map(it => (
              <li key={it.id}>
                <button
                  className={route === it.id || (it.id === 'services' && route.startsWith('service-')) ? 'active' : ''}
                  onClick={() => setRoute(it.id)}
                  aria-haspopup={it.dropdown ? 'true' : undefined}
                  aria-current={(route === it.id || (it.id === 'services' && route.startsWith('service-'))) ? 'page' : undefined}>
                  {it.label}
                </button>
                {it.dropdown && (
                  <div className="nav-dropdown" role="menu">
                    {it.dropdown.map(s => (
                      <button key={s.id} role="menuitem" onClick={() => setRoute(s.id)}>
                        <span className="sub-num">{s.num}</span>{s.label}
                      </button>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <button className="btn btn-primary" style={{ height: 40, padding: '0 16px' }} onClick={() => setRoute('contact')}>
            Start the engagement <Icon name="arrow-right" size={16} />
          </button>
          <button
            className="nav-mobile-toggle"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu">
            <Icon name="menu" size={24} />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={'mobile-menu' + (mobileOpen ? ' open' : '')}
        aria-hidden={!mobileOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation">
        <div className="mobile-menu-head">
          <div className="nav-brand" style={{ pointerEvents: 'none' }}>
            <img src="../../assets/falcon-sigil-white.png" alt="" />
            <span className="wm" style={{ color: 'var(--bone)' }}>FALCON</span>
          </div>
          <button className="mobile-menu-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <Icon name="x" size={28} />
          </button>
        </div>
        <nav aria-label="Mobile">
          {items.map(it => (
            it.dropdown ? (
              <div className="mm-group" key={it.id}>
                <button
                  className={(route === it.id || route.startsWith('service-')) ? 'active' : ''}
                  onClick={() => goMobile('services')}>
                  {it.label}
                </button>
                <div className="mm-sub">
                  {it.dropdown.map(s => (
                    <button key={s.id} onClick={() => goMobile(s.id)}>{s.num} · {s.label}</button>
                  ))}
                </div>
              </div>
            ) : (
              <button
                key={it.id}
                className={route === it.id ? 'active' : ''}
                onClick={() => goMobile(it.id)}>
                {it.label}
              </button>
            )
          ))}
          <div className="mm-cta">
            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => goMobile('contact')}>
              Start the engagement <Icon name="arrow-right" size={16} />
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

/* ---------- Footer ---------- */
function Footer({ setRoute }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-inner">
          <div>
            <div className="footer-brand">
              <img src="../../assets/falcon-sigil-white.png" alt="" />
              <span className="wm">FALCON</span>
            </div>
            <p className="footer-tag">Watchers of the schedule. Keepers of the budget. Falcon Project Management partners with mission‑driven and public‑sector clients to deliver complex work on time and in scope.</p>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              <li><a onClick={() => setRoute('service-grant')}>Grant Consulting</a></li>
              <li><a onClick={() => setRoute('services')}>General PM</a></li>
              <li><a onClick={() => setRoute('services')}>Tech Projects</a></li>
              <li><a onClick={() => setRoute('services')}>Construction PM</a></li>
            </ul>
          </div>
          <div>
            <h5>Firm</h5>
            <ul>
              <li><a onClick={() => setRoute('about')}>About</a></li>
              <li><a onClick={() => setRoute('resources')}>Client Resources</a></li>
              <li><a onClick={() => setRoute('contact')}>Contact</a></li>
              <li><a onClick={() => setRoute('privacy')}>Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h5>Watch</h5>
            <ul>
              <li><a>hello@falconpm.co</a></li>
              <li><a>(415) 555‑0142</a></li>
              <li><a>Oakland, CA</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Falcon Project Management, LLC. All rights reserved.</span>
          <span>Site developed by Ignite Consulting.</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Stats ---------- */
function Stat({ value, label, blood }) {
  // Note: we do NOT use the metallic text effect on numerals — it's unreadable.
  // Emphasis variants are: default ink, or blood for the single hero stat.
  return (
    <div className="stat-block">
      <div className="n" style={blood ? { color: 'var(--blood)' } : null}>{value}</div>
      <div className="l">{label}</div>
    </div>
  );
}

/* ---------- Service card ---------- */
function ServiceCard({ num, icon, title, desc, onOpen }) {
  return (
    <div className="service-card" onClick={onOpen}>
      <div className="metal-top"></div>
      <div className="num">{num} <span style={{ color: 'var(--silver-400)' }}>·</span> Service</div>
      <div style={{ position: 'absolute', top: 32, right: 32, zIndex: 1 }} className="icon">
        <Icon name={icon} size={28} />
      </div>
      <h3>{title}</h3>
      <div className="desc">{desc}</div>
      <span className="arrow">Read the brief <Icon name="arrow-right" size={14} /></span>
    </div>
  );
}

/* ---------- Testimonial ---------- */
function Testimonial({ quote, name, role, initials, photoUrl }) {
  const hasAvatar = !!(initials || photoUrl);
  return (
    <blockquote className="quote">
      <div className="q">"{quote}"</div>
      <div className="attribution">
        {hasAvatar && (
          <div className="avatar" style={photoUrl ? { backgroundImage: `url(${photoUrl})` } : null}>
            {!photoUrl && initials}
          </div>
        )}
        <cite>
          <span className="name">{name}</span><br />{role}
        </cite>
      </div>
    </blockquote>
  );
}

/* ---------- CTA Banner ---------- */
function CtaBanner({ setRoute }) {
  return (
    <section className="cta-banner">
      <div className="wrap cta-banner-inner">
        <hr className="divider-metal" />
        <span className="eyebrow" style={{ color: 'var(--silver-400)' }}>Begin</span>
        <h2 className="mt-4">The watch is yours.<br/>The project is ours.</h2>
        <p className="lead">Tell us what you need delivered. We'll respond within one business day.</p>
        <div className="actions">
          <button className="btn btn-primary" onClick={() => setRoute('contact')}>
            Start the engagement <Icon name="arrow-right" size={16} />
          </button>
          <button className="btn btn-on-dark" onClick={() => setRoute('services')}>View services</button>
        </div>
      </div>
    </section>
  );
}

/* ---------- Section head ---------- */
function SectionHead({ eyebrow, title, lead }) {
  return (
    <div className="section-head">
      <div>
        <div className="eyebrow eyebrow-blood" style={{ color: 'var(--blood)' }}>{eyebrow}</div>
        <h2 className="mt-4">{title}</h2>
      </div>
      <div>
        <p className="lead">{lead}</p>
      </div>
    </div>
  );
}

Object.assign(window, {
  Icon, SigilIntro, Nav, Footer, Stat, ServiceCard, Testimonial, CtaBanner, SectionHead
});
