/* @ds-bundle: {"format":3,"namespace":"FalconPMDesignSystem_019e28","components":[],"sourceHashes":{"ui_kits/website/app.jsx":"3e428e34c123","ui_kits/website/components.jsx":"19989764ba4c","ui_kits/website/pages.jsx":"357559eabd2b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FalconPMDesignSystem_019e28 = window.FalconPMDesignSystem_019e28 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/website/app.jsx
try { (() => {
// Falcon PM — Router

function App() {
  const [route, setRoute] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    setScrollY(0);
    setTimeout(() => window.lucide && window.lucide.createIcons(), 50);
  }, [route]);
  const go = r => setRoute(r);
  const page = (() => {
    switch (route) {
      case 'home':
        return /*#__PURE__*/React.createElement(HomePage, {
          setRoute: go
        });
      case 'services':
        return /*#__PURE__*/React.createElement(ServicesPage, {
          setRoute: go
        });
      case 'service-grant':
        return /*#__PURE__*/React.createElement(GrantConsultingPage, {
          setRoute: go
        });
      case 'service-pm':
      case 'service-tech':
      case 'service-construction':
        return /*#__PURE__*/React.createElement(ServicesPage, {
          setRoute: go
        });
      case 'about':
        return /*#__PURE__*/React.createElement(AboutPage, {
          setRoute: go
        });
      case 'resources':
        return /*#__PURE__*/React.createElement(ClientResourcesPage, {
          setRoute: go
        });
      case 'contact':
        return /*#__PURE__*/React.createElement(ContactPage, {
          setRoute: go
        });
      case 'privacy':
        return /*#__PURE__*/React.createElement(PrivacyPage, {
          setRoute: go
        });
      default:
        return /*#__PURE__*/React.createElement(HomePage, {
          setRoute: go
        });
    }
  })();

  // Nav state:
  //   home  + top of hero        → transparent (no bg, light text)
  //   home  + scrolled over hero → glass (faint frosted panel, light text)
  //   home  + past hero          → light
  //   deep-hero routes + top     → transparent (over their dark deep-hero)
  //   deep-hero routes + scrolled past deep-hero → light
  //   privacy + top              → transparent (over its dark deep-hero)
  const hasDarkTop = route !== 'privacy' ? true : true; // all routes start with a dark hero/deep-hero
  let navState;
  if (route === 'home') {
    if (scrollY < 24) navState = 'transparent';else if (scrollY < window.innerHeight * 0.78) navState = 'glass';else navState = 'light';
  } else {
    // deep-hero is ~380px tall on these pages; switch around 320
    if (scrollY < 24) navState = 'transparent';else if (scrollY < 320) navState = 'glass';else navState = 'light';
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
    route: route,
    setRoute: go,
    navState: navState
  }), page);
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/components.jsx
try { (() => {
// Falcon PM — Shared components.
const {
  useState,
  useEffect,
  useRef,
  useLayoutEffect
} = React;

/* ---------- Icon helper (Lucide) ---------- */
function Icon({
  name,
  size = 20,
  stroke = 1.5,
  style
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.setAttribute('data-lucide', name);
      window.lucide.createIcons({
        icons: window.lucide.icons
      });
    }
  }, [name]);
  return /*#__PURE__*/React.createElement("i", {
    ref: ref,
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      strokeWidth: stroke,
      display: 'inline-flex',
      ...style
    }
  });
}

/* ---------- Sigil intro overlay ---------- */
function SigilIntro({
  onDone
}) {
  useEffect(() => {
    const t = setTimeout(() => onDone(), 2100);
    return () => clearTimeout(t);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "sigil-intro",
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/falcon-sigil-silver.png",
    alt: ""
  }));
}

/* ---------- Nav ---------- */
function Nav({
  route,
  setRoute,
  navState
}) {
  const SERVICE_LINKS = [{
    id: 'service-grant',
    num: '01',
    label: 'Grant Consulting'
  }, {
    id: 'service-pm',
    num: '02',
    label: 'General PM'
  }, {
    id: 'service-tech',
    num: '03',
    label: 'Tech Projects'
  }, {
    id: 'service-construction',
    num: '04',
    label: 'Construction PM'
  }];
  const items = [{
    id: 'services',
    label: 'Services',
    dropdown: SERVICE_LINKS
  }, {
    id: 'about',
    label: 'About'
  }, {
    id: 'resources',
    label: 'Client Resources'
  }, {
    id: 'contact',
    label: 'Contact'
  }];
  const onDark = navState === 'transparent' || navState === 'glass';
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on Esc
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = e => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [mobileOpen]);
  const goMobile = r => {
    setRoute(r);
    setMobileOpen(false);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
    className: "nav nav-" + navState,
    "aria-label": "Primary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-inner"
  }, /*#__PURE__*/React.createElement("button", {
    className: "nav-brand",
    onClick: () => setRoute('home'),
    "aria-label": "Falcon Project Management \u2014 Home"
  }, /*#__PURE__*/React.createElement("img", {
    src: onDark ? '../../assets/falcon-sigil-white.png' : '../../assets/falcon-sigil.png',
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "wm"
  }, "FALCON")), /*#__PURE__*/React.createElement("ul", {
    className: "nav-links"
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it.id
  }, /*#__PURE__*/React.createElement("button", {
    className: route === it.id || it.id === 'services' && route.startsWith('service-') ? 'active' : '',
    onClick: () => setRoute(it.id),
    "aria-haspopup": it.dropdown ? 'true' : undefined,
    "aria-current": route === it.id || it.id === 'services' && route.startsWith('service-') ? 'page' : undefined
  }, it.label), it.dropdown && /*#__PURE__*/React.createElement("div", {
    className: "nav-dropdown",
    role: "menu"
  }, it.dropdown.map(s => /*#__PURE__*/React.createElement("button", {
    key: s.id,
    role: "menuitem",
    onClick: () => setRoute(s.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "sub-num"
  }, s.num), s.label)))))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    style: {
      height: 40,
      padding: '0 16px'
    },
    onClick: () => setRoute('contact')
  }, "Start the engagement ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  })), /*#__PURE__*/React.createElement("button", {
    className: "nav-mobile-toggle",
    onClick: () => setMobileOpen(true),
    "aria-label": "Open menu",
    "aria-expanded": mobileOpen,
    "aria-controls": "mobile-menu"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "menu",
    size: 24
  })))), /*#__PURE__*/React.createElement("div", {
    id: "mobile-menu",
    className: 'mobile-menu' + (mobileOpen ? ' open' : ''),
    "aria-hidden": !mobileOpen,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Site navigation"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mobile-menu-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-brand",
    style: {
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/falcon-sigil-white.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "wm",
    style: {
      color: 'var(--bone)'
    }
  }, "FALCON")), /*#__PURE__*/React.createElement("button", {
    className: "mobile-menu-close",
    onClick: () => setMobileOpen(false),
    "aria-label": "Close menu"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 28
  }))), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Mobile"
  }, items.map(it => it.dropdown ? /*#__PURE__*/React.createElement("div", {
    className: "mm-group",
    key: it.id
  }, /*#__PURE__*/React.createElement("button", {
    className: route === it.id || route.startsWith('service-') ? 'active' : '',
    onClick: () => goMobile('services')
  }, it.label), /*#__PURE__*/React.createElement("div", {
    className: "mm-sub"
  }, it.dropdown.map(s => /*#__PURE__*/React.createElement("button", {
    key: s.id,
    onClick: () => goMobile(s.id)
  }, s.num, " \xB7 ", s.label)))) : /*#__PURE__*/React.createElement("button", {
    key: it.id,
    className: route === it.id ? 'active' : '',
    onClick: () => goMobile(it.id)
  }, it.label)), /*#__PURE__*/React.createElement("div", {
    className: "mm-cta"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    style: {
      width: '100%',
      justifyContent: 'center'
    },
    onClick: () => goMobile('contact')
  }, "Start the engagement ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  }))))));
}

/* ---------- Footer ---------- */
function Footer({
  setRoute
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "footer-brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/falcon-sigil-white.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "wm"
  }, "FALCON")), /*#__PURE__*/React.createElement("p", {
    className: "footer-tag"
  }, "Watchers of the schedule. Keepers of the budget. Falcon Project Management partners with mission\u2011driven and public\u2011sector clients to deliver complex work on time and in scope.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Services"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => setRoute('service-grant')
  }, "Grant Consulting")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => setRoute('services')
  }, "General PM")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => setRoute('services')
  }, "Tech Projects")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => setRoute('services')
  }, "Construction PM")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Firm"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => setRoute('about')
  }, "About")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => setRoute('resources')
  }, "Client Resources")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => setRoute('contact')
  }, "Contact")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => setRoute('privacy')
  }, "Privacy Policy")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Watch"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "hello@falconpm.co")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "(415) 555\u20110142")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Oakland, CA"))))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Falcon Project Management, LLC. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "Site developed by Ignite Consulting."))));
}

/* ---------- Stats ---------- */
function Stat({
  value,
  label,
  blood
}) {
  // Note: we do NOT use the metallic text effect on numerals — it's unreadable.
  // Emphasis variants are: default ink, or blood for the single hero stat.
  return /*#__PURE__*/React.createElement("div", {
    className: "stat-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n",
    style: blood ? {
      color: 'var(--blood)'
    } : null
  }, value), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, label));
}

/* ---------- Service card ---------- */
function ServiceCard({
  num,
  icon,
  title,
  desc,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "service-card",
    onClick: onOpen
  }, /*#__PURE__*/React.createElement("div", {
    className: "metal-top"
  }), /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, num, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--silver-400)'
    }
  }, "\xB7"), " Service"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 32,
      right: 32,
      zIndex: 1
    },
    className: "icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 28
  })), /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("div", {
    className: "desc"
  }, desc), /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "Read the brief ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14
  })));
}

/* ---------- Testimonial ---------- */
function Testimonial({
  quote,
  name,
  role,
  initials,
  photoUrl
}) {
  const hasAvatar = !!(initials || photoUrl);
  return /*#__PURE__*/React.createElement("blockquote", {
    className: "quote"
  }, /*#__PURE__*/React.createElement("div", {
    className: "q"
  }, "\"", quote, "\""), /*#__PURE__*/React.createElement("div", {
    className: "attribution"
  }, hasAvatar && /*#__PURE__*/React.createElement("div", {
    className: "avatar",
    style: photoUrl ? {
      backgroundImage: `url(${photoUrl})`
    } : null
  }, !photoUrl && initials), /*#__PURE__*/React.createElement("cite", null, /*#__PURE__*/React.createElement("span", {
    className: "name"
  }, name), /*#__PURE__*/React.createElement("br", null), role)));
}

/* ---------- CTA Banner ---------- */
function CtaBanner({
  setRoute
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "cta-banner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap cta-banner-inner"
  }, /*#__PURE__*/React.createElement("hr", {
    className: "divider-metal"
  }), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: 'var(--silver-400)'
    }
  }, "Begin"), /*#__PURE__*/React.createElement("h2", {
    className: "mt-4"
  }, "The watch is yours.", /*#__PURE__*/React.createElement("br", null), "The project is ours."), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Tell us what you need delivered. We'll respond within one business day."), /*#__PURE__*/React.createElement("div", {
    className: "actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => setRoute('contact')
  }, "Start the engagement ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-on-dark",
    onClick: () => setRoute('services')
  }, "View services"))));
}

/* ---------- Section head ---------- */
function SectionHead({
  eyebrow,
  title,
  lead
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow eyebrow-blood",
    style: {
      color: 'var(--blood)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "mt-4"
  }, title)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, lead)));
}
Object.assign(window, {
  Icon,
  SigilIntro,
  Nav,
  Footer,
  Stat,
  ServiceCard,
  Testimonial,
  CtaBanner,
  SectionHead
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/pages.jsx
try { (() => {
// Falcon PM — Page components

const SERVICES = [{
  id: 'service-grant',
  num: '01',
  icon: 'file-text',
  title: 'Grant Consulting',
  desc: 'From eligibility to award. We draft, win, and steward federal and foundation grants for organizations that cannot afford a "maybe."'
}, {
  id: 'service-pm',
  num: '02',
  icon: 'clipboard-list',
  title: 'General PM',
  desc: 'Coordination, schedule, and budget control across multi‑stakeholder engagements. We hold the line on scope.'
}, {
  id: 'service-tech',
  num: '03',
  icon: 'cpu',
  title: 'Tech Projects',
  desc: 'Software delivery, security infrastructure, and systems modernization. PMO discipline for engineering teams.'
}, {
  id: 'service-construction',
  num: '04',
  icon: 'hard-hat',
  title: 'Construction PM',
  desc: 'Subcontractor coordination, compliance, and grant‑funded build oversight. From groundbreaking to closeout.'
}];
function HomePage({
  setRoute
}) {
  // shine + rotation animation driven by scroll
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const t = Math.min(y / 600, 1);
      // Rotation: -14deg → +14deg over the first 600px of scroll (then clamps)
      const rot = -14 + t * 28;
      document.documentElement.style.setProperty('--hero-ry', rot + 'deg');
      // Shine sweep opposite to rotation
      const shineX = 0.5 - rot / 14 * 0.4;
      document.documentElement.style.setProperty('--shine-x', shineX);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "page page-fade-enter"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#main",
    className: "skip-link"
  }, "Skip to main content"), /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "main",
    "aria-label": "Introduction"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-sigil-wrap",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("img", {
    className: "hero-sigil-img",
    src: "../../assets/falcon-sigil-outline.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    className: "hero-sigil-shine",
    src: "../../assets/falcon-sigil-outline.png",
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "wrap-wide hero-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow hero-eyebrow"
  }, "Falcon Project Management \xB7 Est. 2017"), /*#__PURE__*/React.createElement("h1", null, "We manage the projects others cannot afford to lose."), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Grant consulting, general PM, technology delivery, and construction oversight \u2014 for nonprofits, public agencies, and mission\u2011driven private clients."), /*#__PURE__*/React.createElement("div", {
    className: "actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => setRoute('contact')
  }, "Start the engagement ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-on-dark",
    onClick: () => setRoute('services')
  }, "View services")))), /*#__PURE__*/React.createElement("section", {
    className: "section section-bone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("hr", {
    className: "divider-metal",
    style: {
      margin: '0 0 64px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "stats-row"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "$84M",
    label: "Grant capital secured",
    metal: true
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "47",
    label: "Funded engagements"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "12",
    label: "Active clients"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "100%",
    label: "On\u2011schedule delivery",
    blood: true
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Services",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Four disciplines.", /*#__PURE__*/React.createElement("br", null), "One standard."),
    lead: "We work across grant, general, technical, and construction project management. The work changes; the rigor doesn't."
  }), /*#__PURE__*/React.createElement("div", {
    className: "service-grid"
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
    key: s.id,
    num: s.num,
    icon: s.icon,
    title: s.title,
    desc: s.desc,
    onOpen: () => setRoute(s.id === 'service-grant' ? 'service-grant' : 'services')
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "section section-bone",
    style: {
      background: 'var(--bone-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "From those we serve",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "The watch, in their words."),
    lead: "Three clients on what changed when Falcon took the engagement."
  }), /*#__PURE__*/React.createElement("div", {
    className: "testimonials"
  }, /*#__PURE__*/React.createElement(Testimonial, {
    quote: "They held the schedule when ours fell apart. We funded the build because of it.",
    name: "D. Reyes",
    role: "Executive Director, North Bay Housing Coalition",
    initials: "DR"
  }), /*#__PURE__*/React.createElement(Testimonial, {
    quote: "Falcon writes a grant the way a senior engineer writes a tech spec. Clarity, scope, no fluff.",
    name: "A. Okonkwo",
    role: "Deputy Director, Trinity County Public Works",
    initials: "AO"
  })))), /*#__PURE__*/React.createElement(CtaBanner, {
    setRoute: setRoute
  }), /*#__PURE__*/React.createElement(Footer, {
    setRoute: setRoute
  }));
}
function ServicesPage({
  setRoute
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "page page-fade-enter"
  }, /*#__PURE__*/React.createElement("section", {
    className: "deep-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap deep-hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "crumbs"
  }, "Falcon \xB7 Services"), /*#__PURE__*/React.createElement("div", {
    className: "deep-hero-row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Four ways we hold the line on a project."), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Each discipline is a standalone engagement. Many clients hire us for two \u2014 grant and the build it funds, or PM and the tech program it depends on.")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/falcon-sigil-silver.png",
    className: "sigil",
    alt: ""
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "service-grid"
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
    key: s.id,
    num: s.num,
    icon: s.icon,
    title: s.title,
    desc: s.desc,
    onOpen: () => setRoute(s.id === 'service-grant' ? 'service-grant' : 'services')
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "section section-bone",
    style: {
      background: 'var(--bone-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Ideal client",
    title: "Who we are best for.",
    lead: "Falcon is built for clients with high stakes and complex stakeholders. If your project absolutely has to land, we are the right call."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, [['Mission-driven nonprofits', 'Federal and foundation funding cycles. Multi-site programs.'], ['Public agencies', 'Compliance-heavy work, prevailing wage, federal reporting.'], ['Mission-aligned private sector', 'Infrastructure, energy transition, civic technology.']].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "card"
  }, /*#__PURE__*/React.createElement("h4", null, t), /*#__PURE__*/React.createElement("p", {
    className: "mt-3",
    style: {
      color: 'var(--silver-700)',
      fontSize: 14
    }
  }, d)))))), /*#__PURE__*/React.createElement(CtaBanner, {
    setRoute: setRoute
  }), /*#__PURE__*/React.createElement(Footer, {
    setRoute: setRoute
  }));
}
function GrantConsultingPage({
  setRoute
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "page page-fade-enter"
  }, /*#__PURE__*/React.createElement("section", {
    className: "deep-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap deep-hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "crumbs"
  }, "Services \xB7 01 Grant Consulting"), /*#__PURE__*/React.createElement("div", {
    className: "deep-hero-row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Grants, drafted to be won."), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Eligibility, narrative, budget, submission, and post\u2011award stewardship. We have secured $84M for clients since 2017."), /*#__PURE__*/React.createElement("div", {
    className: "actions",
    style: {
      marginTop: 32,
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: () => setRoute('contact')
  }, "Discuss a grant ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-on-dark",
    onClick: () => setRoute('services')
  }, "Back to services"))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/falcon-sigil-silver.png",
    className: "sigil",
    alt: ""
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "What's included",
    title: "Everything from eligibility to award.",
    lead: "Each engagement is fixed-scope and fixed-fee. No padding. We document every assumption."
  }), /*#__PURE__*/React.createElement("ul", {
    className: "included-grid"
  }, [['Eligibility assessment', 'Cross-reference your work to current Notices of Funding Opportunity.'], ['Narrative drafting', 'Outcome-led writing, reviewed by a senior PM with delivery experience.'], ['Budget construction', 'Line items, indirect cost, match documentation, sub-awards.'], ['Submission support', 'Grants.gov / SAM / state portals. We handle the upload and the errata.'], ['Reviewer prep', 'A reviewer-style read in week 3, with rewrite cycles built in.'], ['Post-award stewardship', 'Reporting cadence, drawdowns, audit prep, closeout.']].map(([t, d]) => /*#__PURE__*/React.createElement("li", {
    key: t
  }, /*#__PURE__*/React.createElement("span", {
    className: "check"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, t), /*#__PURE__*/React.createElement("span", null, d))))))), /*#__PURE__*/React.createElement("section", {
    className: "section section-bone",
    style: {
      background: 'var(--bone-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Grant types",
    title: "What we have written and won.",
    lead: "Federal, state, and large foundation grants. We do not pursue micro-grants under $50k."
  }), /*#__PURE__*/React.createElement("div", {
    className: "sector-grid"
  }, [['Federal infrastructure', 'building-2'], ['HUD & housing', 'home'], ['NEH / NEA cultural', 'landmark'], ['DOE energy transition', 'zap'], ['Foundation (Ford, Hewlett)', 'gem'], ['State workforce', 'briefcase'], ['EPA environmental', 'leaf'], ['DOT transit & rail', 'train']].map(([t, i]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "sector-tile"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 24
  }), /*#__PURE__*/React.createElement("div", {
    className: "lab"
  }, t)))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Process",
    title: "Four moves, six to twelve weeks.",
    lead: "Engagements run six weeks for a single application, twelve for a multi-application portfolio."
  }), /*#__PURE__*/React.createElement("div", {
    className: "process-list"
  }, [['Brief', 'One-hour intake, written brief, eligibility map.'], ['Draft', 'Full narrative + budget within three weeks.'], ['Review', 'Reviewer-style read. Revise. Repeat.'], ['Submit', 'Upload, verify, monitor, defend.']].map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "process-step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "num"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("h4", null, t), /*#__PURE__*/React.createElement("p", null, d)))))), /*#__PURE__*/React.createElement("section", {
    className: "section section-dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stats-row"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "$84M",
    label: "Capital secured to date",
    metal: true
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "47",
    label: "Funded applications"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "68%",
    label: "Win rate on submitted",
    blood: true
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "6 wk",
    label: "Median engagement"
  })))), /*#__PURE__*/React.createElement(CtaBanner, {
    setRoute: setRoute
  }), /*#__PURE__*/React.createElement(Footer, {
    setRoute: setRoute
  }));
}
function AboutPage({
  setRoute
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "page page-fade-enter"
  }, /*#__PURE__*/React.createElement("section", {
    className: "deep-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap deep-hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "crumbs"
  }, "About Falcon"), /*#__PURE__*/React.createElement("div", {
    className: "deep-hero-row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "One firm.", /*#__PURE__*/React.createElement("br", null), "A long memory."), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Falcon was founded in 2017 by Marian Wei, a former federal program officer who watched too many good projects die in submission. The firm exists to keep that from happening to yours.")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/falcon-sigil-silver.png",
    className: "sigil",
    alt: ""
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap about-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow eyebrow-blood",
    style: {
      color: 'var(--blood)'
    }
  }, "The story"), /*#__PURE__*/React.createElement("h2", {
    className: "mt-4"
  }, "Why we keep the watch."), /*#__PURE__*/React.createElement("p", {
    className: "mt-5"
  }, "Most projects do not fail because the work is hard. They fail because no one is holding the schedule, the budget, and the scope at the same time. We are that party."), /*#__PURE__*/React.createElement("p", null, "Marian spent eleven years inside federal programs at HUD and EPA. She read 600+ grants from the reviewer's chair before she ever wrote one. That perspective \u2014 what a funder actually wants \u2014 is the difference between a polished application and a funded one."), /*#__PURE__*/React.createElement("p", null, "Falcon now operates as a partnership of five senior PMs. We do not subcontract delivery. The person on the kickoff call is the person on the close-out call.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Credentials"), /*#__PURE__*/React.createElement("ul", {
    className: "cred-list mt-4"
  }, [['shield-check', 'PMP — Project Management Institute', '2014'], ['shield-check', 'Certified Grant Writer (GPC)', '2016'], ['shield-check', 'OSHA 30 — Construction', '2019'], ['shield-check', 'Federal Acquisition Certification (FAC-P/PM)', '2020'], ['shield-check', 'PROSCI Change Management', '2022']].map(([i, t, y]) => /*#__PURE__*/React.createElement("li", {
    key: t
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 20
  }), /*#__PURE__*/React.createElement("span", null, t), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--silver-600)',
      fontSize: 13
    }
  }, y))))))), /*#__PURE__*/React.createElement("section", {
    className: "section section-dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stats-row"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "9 yr",
    label: "In practice"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "$84M",
    label: "Capital secured",
    metal: true
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "47",
    label: "Funded projects"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "5",
    label: "Senior partners",
    blood: true
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section section-bone",
    style: {
      background: 'var(--bone-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Sectors served",
    title: "Where we have done the work.",
    lead: "We turn down work outside these sectors. Specialization is the point."
  }), /*#__PURE__*/React.createElement("div", {
    className: "sector-grid"
  }, [['Nonprofit', 'heart-handshake'], ['Government', 'landmark'], ['Tech', 'cpu'], ['Construction', 'hard-hat'], ['Housing', 'home'], ['Energy', 'zap'], ['Education', 'graduation-cap'], ['Health systems', 'stethoscope']].map(([t, i]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "sector-tile"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 24
  }), /*#__PURE__*/React.createElement("div", {
    className: "lab"
  }, t)))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Witnesses",
    title: "On the record.",
    lead: "Two of our clients on the day they decided to keep working with us."
  }), /*#__PURE__*/React.createElement("div", {
    className: "testimonials"
  }, /*#__PURE__*/React.createElement(Testimonial, {
    quote: "The first grant we did with Falcon was a long shot. We won. The second one we did with them was not a long shot \u2014 because they made sure of that.",
    name: "L. Ferreira",
    role: "Board Chair, Open Bay Foundation",
    initials: "LF"
  }), /*#__PURE__*/React.createElement(Testimonial, {
    quote: "A senior PM, not a sales engineer. That is what you get on day one. Refreshing.",
    name: "M. Hassan",
    role: "COO, Civic Signal",
    initials: "MH"
  })))), /*#__PURE__*/React.createElement(CtaBanner, {
    setRoute: setRoute
  }), /*#__PURE__*/React.createElement(Footer, {
    setRoute: setRoute
  }));
}
function ClientResourcesPage({
  setRoute
}) {
  const [open, setOpen] = useState(0);
  const FAQ = [{
    q: 'How long does a typical engagement run?',
    a: 'Six weeks for a single grant application. Three to twelve months for ongoing PM. Construction oversight typically tracks the build duration plus 90 days closeout.'
  }, {
    q: 'Do you take a percentage of grants you win?',
    a: 'No. All Falcon engagements are fixed‑fee. We believe contingency arrangements create the wrong incentives — and most federal funders restrict them.'
  }, {
    q: 'What does a typical first month look like?',
    a: 'Week 1 is intake and brief. Week 2 is draft. Week 3 is the reviewer-style read and revise. Week 4 is submission prep. You will hear from us at least three times a week.'
  }, {
    q: 'Will I work with the same person throughout?',
    a: 'Yes. Falcon does not rotate staff or subcontract delivery. The senior PM on your kickoff is on your closeout.'
  }, {
    q: 'Do you sign NDAs?',
    a: 'Yes — mutual NDA is standard and we sign yours or ours.'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "page page-fade-enter"
  }, /*#__PURE__*/React.createElement("section", {
    className: "deep-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap deep-hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "crumbs"
  }, "Client Resources"), /*#__PURE__*/React.createElement("div", {
    className: "deep-hero-row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "What clients ask, before they ask."), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Results from active engagements, answers to the questions we hear most, and the practical things you need to know before working with Falcon.")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/falcon-sigil-silver.png",
    className: "sigil",
    alt: ""
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stats-row"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "$4.2M",
    label: "Recent HUD CDBG award",
    metal: true
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "14 mo",
    label: "Build delivered ahead"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "3 yr",
    label: "Median client tenure"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "97%",
    label: "Client retention",
    blood: true
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section section-bone",
    style: {
      background: 'var(--bone-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Said directly",
    title: "What our clients say.",
    lead: "Quotes pulled from project closeouts and reference calls \u2014 used with permission."
  }), /*#__PURE__*/React.createElement("div", {
    className: "testimonials",
    style: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    }
  }, /*#__PURE__*/React.createElement(Testimonial, {
    quote: "They held the schedule when ours fell apart. We funded the build because of it.",
    who: "D. Reyes, Executive Director, North Bay Housing Coalition"
  }), /*#__PURE__*/React.createElement(Testimonial, {
    quote: "Falcon writes a grant the way a senior engineer writes a tech spec. No fluff.",
    name: "A. Okonkwo",
    role: "Deputy Director, Trinity County Public Works",
    initials: "AO"
  }), /*#__PURE__*/React.createElement(Testimonial, {
    quote: "A senior PM, not a sales engineer, on day one. That is the entire pitch.",
    name: "M. Hassan",
    role: "COO, Civic Signal",
    initials: "MH"
  }), /*#__PURE__*/React.createElement(Testimonial, {
    quote: "The first grant was a long shot. We won. The second one wasn't \u2014 because they made sure of that.",
    name: "L. Ferreira",
    role: "Board Chair, Open Bay Foundation",
    initials: "LF"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      maxWidth: 880
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Questions",
    title: "Questions we answer often.",
    lead: "Click a question to expand its answer. If yours isn't here, send it to us directly."
  }), /*#__PURE__*/React.createElement("div", null, FAQ.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "faq-item",
    onClick: () => setOpen(open === i ? -1 : i)
  }, /*#__PURE__*/React.createElement("div", {
    className: "q"
  }, /*#__PURE__*/React.createElement("span", null, f.q), /*#__PURE__*/React.createElement(Icon, {
    name: open === i ? 'minus' : 'plus',
    size: 20
  })), open === i && /*#__PURE__*/React.createElement("div", {
    className: "a mt-3"
  }, f.a)))))), /*#__PURE__*/React.createElement(CtaBanner, {
    setRoute: setRoute
  }), /*#__PURE__*/React.createElement(Footer, {
    setRoute: setRoute
  }));
}
function ContactPage({
  setRoute
}) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Grant Consulting',
    message: ''
  });
  const upd = k => e => setForm(s => ({
    ...s,
    [k]: e.target.value
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "page page-fade-enter"
  }, /*#__PURE__*/React.createElement("section", {
    className: "deep-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap deep-hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "crumbs"
  }, "Contact"), /*#__PURE__*/React.createElement("div", {
    className: "deep-hero-row"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Send the signal."), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Tell us what you need delivered. We will respond within one business day \u2014 most weeks, the same afternoon.")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/falcon-sigil-silver.png",
    className: "sigil",
    alt: ""
  })))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap contact-grid"
  }, /*#__PURE__*/React.createElement("div", null, !submitted ? /*#__PURE__*/React.createElement("form", {
    className: "contact-form",
    onSubmit: e => {
      e.preventDefault();
      setSubmitted(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Name"), /*#__PURE__*/React.createElement("input", {
    className: "input",
    required: true,
    value: form.name,
    onChange: upd('name'),
    placeholder: "Your name"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Email"), /*#__PURE__*/React.createElement("input", {
    className: "input",
    type: "email",
    required: true,
    value: form.email,
    onChange: upd('email'),
    placeholder: "you@org.com"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "row-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Phone"), /*#__PURE__*/React.createElement("input", {
    className: "input",
    value: form.phone,
    onChange: upd('phone'),
    placeholder: "(415) 555-0142"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Project type"), /*#__PURE__*/React.createElement("select", {
    className: "input",
    value: form.projectType,
    onChange: upd('projectType'),
    style: {
      appearance: 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("option", null, "Grant Consulting"), /*#__PURE__*/React.createElement("option", null, "General PM"), /*#__PURE__*/React.createElement("option", null, "Tech Projects"), /*#__PURE__*/React.createElement("option", null, "Construction PM"), /*#__PURE__*/React.createElement("option", null, "Other / not sure")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Message"), /*#__PURE__*/React.createElement("textarea", {
    className: "input",
    required: true,
    rows: "6",
    value: form.message,
    onChange: upd('message'),
    placeholder: "Tell us about the engagement \u2014 timeline, stakes, what good looks like."
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    style: {
      alignSelf: 'flex-start'
    }
  }, "Send the signal ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  })), /*#__PURE__*/React.createElement("small", null, "By submitting, you agree to our Privacy Policy. We do not share inquiries with anyone.")) : /*#__PURE__*/React.createElement("div", {
    className: "card card-elevated",
    style: {
      padding: 48
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle-2",
    size: 36,
    style: {
      color: 'var(--blood)'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    className: "mt-4"
  }, "The signal is received."), /*#__PURE__*/React.createElement("p", {
    className: "mt-3"
  }, "We'll be in touch within one business day. If your matter is urgent, call (415) 555\u20110142."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary mt-4",
    onClick: () => {
      setSubmitted(false);
      setForm({
        name: '',
        email: '',
        phone: '',
        projectType: 'Grant Consulting',
        message: ''
      });
    }
  }, "Send another"))), /*#__PURE__*/React.createElement("div", {
    className: "contact-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ci-item"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 24
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ci-label"
  }, "Email"), /*#__PURE__*/React.createElement("div", {
    className: "ci-value"
  }, "hello@falconpm.co"))), /*#__PURE__*/React.createElement("div", {
    className: "ci-item"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 24
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ci-label"
  }, "Direct line"), /*#__PURE__*/React.createElement("div", {
    className: "ci-value"
  }, "(415) 555\u20110142"))), /*#__PURE__*/React.createElement("div", {
    className: "ci-item"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 24
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ci-label"
  }, "Office"), /*#__PURE__*/React.createElement("div", {
    className: "ci-value"
  }, "Oakland, California"))), /*#__PURE__*/React.createElement("div", {
    className: "ci-item",
    style: {
      background: 'var(--ink)',
      color: 'var(--bone)',
      border: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 24,
    style: {
      color: 'var(--silver-300)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ci-label",
    style: {
      color: 'var(--silver-400)'
    }
  }, "Response time"), /*#__PURE__*/React.createElement("div", {
    className: "ci-value"
  }, "One business day \xB7 usually same afternoon")))))), /*#__PURE__*/React.createElement(Footer, {
    setRoute: setRoute
  }));
}
function PrivacyPage({
  setRoute
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "page page-fade-enter"
  }, /*#__PURE__*/React.createElement("section", {
    className: "deep-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap deep-hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "crumbs"
  }, "Legal"), /*#__PURE__*/React.createElement("h1", null, "Privacy Policy"), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Last updated May 2026. Plain language; we are a small firm and we do not sell or share data."))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("h3", null, "Data we collect"), /*#__PURE__*/React.createElement("p", {
    className: "mt-3"
  }, "Inquiry form submissions: name, email, phone, project type, message. Usage analytics: page views and referring source via a privacy\u2011first provider. No third\u2011party advertising trackers."), /*#__PURE__*/React.createElement("h3", {
    className: "mt-7"
  }, "How we use it"), /*#__PURE__*/React.createElement("p", {
    className: "mt-3"
  }, "Solely to respond to your inquiry and improve the site. Inquiries are retained for three years and then deleted unless you become a client."), /*#__PURE__*/React.createElement("h3", {
    className: "mt-7"
  }, "Cookies"), /*#__PURE__*/React.createElement("p", {
    className: "mt-3"
  }, "A single first-party cookie holds your form draft if you navigate away. No third-party cookies are set."))), /*#__PURE__*/React.createElement(Footer, {
    setRoute: setRoute
  }));
}
Object.assign(window, {
  HomePage,
  ServicesPage,
  GrantConsultingPage,
  AboutPage,
  ClientResourcesPage,
  ContactPage,
  PrivacyPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/pages.jsx", error: String((e && e.message) || e) }); }

})();
