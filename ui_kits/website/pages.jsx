// Falcon PM — Page components

const SERVICES = [
  { id: 'service-grant', num: '01', icon: 'file-text', title: 'Grant Consulting',
    desc: 'From eligibility to award. We draft, win, and steward federal and foundation grants for organizations that cannot afford a "maybe."' },
  { id: 'service-pm', num: '02', icon: 'clipboard-list', title: 'General PM',
    desc: 'Coordination, schedule, and budget control across multi‑stakeholder engagements. We hold the line on scope.' },
  { id: 'service-tech', num: '03', icon: 'cpu', title: 'Tech Projects',
    desc: 'Software delivery, security infrastructure, and systems modernization. PMO discipline for engineering teams.' },
  { id: 'service-construction', num: '04', icon: 'hard-hat', title: 'Construction PM',
    desc: 'Subcontractor coordination, compliance, and grant‑funded build oversight. From groundbreaking to closeout.' },
];

function HomePage({ setRoute }) {
  // shine + rotation animation driven by scroll
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const t = Math.min(y / 600, 1);
      // Rotation: -14deg → +14deg over the first 600px of scroll (then clamps)
      const rot = -14 + t * 28;
      document.documentElement.style.setProperty('--hero-ry', rot + 'deg');
      // Shine sweep opposite to rotation
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
          <img className="hero-sigil-img" src="../../assets/falcon-sigil-outline.png" alt="" />
          <img className="hero-sigil-shine" src="../../assets/falcon-sigil-outline.png" alt="" />
        </div>
        <div className="wrap-wide hero-content">
          <div className="eyebrow hero-eyebrow">Falcon Project Management · Est. 2017</div>
          <h1>We manage the projects others cannot afford to lose.</h1>
          <p className="lead">Grant consulting, general PM, technology delivery, and construction oversight — for nonprofits, public agencies, and mission‑driven private clients.</p>
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
            <Stat value="$84M" label="Grant capital secured" metal />
            <Stat value="47" label="Funded engagements" />
            <Stat value="12" label="Active clients" />
            <Stat value="100%" label="On‑schedule delivery" blood />
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <SectionHead
            eyebrow="Services"
            title={<>Four disciplines.<br/>One standard.</>}
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
            lead="Three clients on what changed when Falcon took the engagement." />
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

function ServicesPage({ setRoute }) {
  return (
    <div className="page page-fade-enter">
      <section className="deep-hero">
        <div className="wrap deep-hero-inner">
          <div className="crumbs">Falcon · Services</div>
          <div className="deep-hero-row">
            <div>
              <h1>Four ways we hold the line on a project.</h1>
              <p className="lead">Each discipline is a standalone engagement. Many clients hire us for two — grant and the build it funds, or PM and the tech program it depends on.</p>
            </div>
            <img src="../../assets/falcon-sigil-silver.png" className="sigil" alt="" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
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
            eyebrow="Ideal client"
            title="Who we are best for."
            lead="Falcon is built for clients with high stakes and complex stakeholders. If your project absolutely has to land, we are the right call." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              ['Mission-driven nonprofits', 'Federal and foundation funding cycles. Multi-site programs.'],
              ['Public agencies', 'Compliance-heavy work, prevailing wage, federal reporting.'],
              ['Mission-aligned private sector', 'Infrastructure, energy transition, civic technology.'],
            ].map(([t, d]) => (
              <div key={t} className="card">
                <h4>{t}</h4>
                <p className="mt-3" style={{ color: 'var(--silver-700)', fontSize: 14 }}>{d}</p>
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

function GrantConsultingPage({ setRoute }) {
  return (
    <div className="page page-fade-enter">
      <section className="deep-hero">
        <div className="wrap deep-hero-inner">
          <div className="crumbs">Services · 01 Grant Consulting</div>
          <div className="deep-hero-row">
            <div>
              <h1>Grants, drafted to be won.</h1>
              <p className="lead">Eligibility, narrative, budget, submission, and post‑award stewardship. We have secured $84M for clients since 2017.</p>
              <div className="actions" style={{ marginTop: 32, display: 'flex', gap: 12 }}>
                <button className="btn btn-primary" onClick={() => setRoute('contact')}>
                  Discuss a grant <Icon name="arrow-right" size={16} />
                </button>
                <button className="btn btn-on-dark" onClick={() => setRoute('services')}>Back to services</button>
              </div>
            </div>
            <img src="../../assets/falcon-sigil-silver.png" className="sigil" alt="" />
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
                <div className="num">{String(i+1).padStart(2,'0')}</div>
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
            <Stat value="$84M" label="Capital secured to date" metal />
            <Stat value="47" label="Funded applications" />
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

function AboutPage({ setRoute }) {
  return (
    <div className="page page-fade-enter">
      <section className="deep-hero">
        <div className="wrap deep-hero-inner">
          <div className="crumbs">About Falcon</div>
          <div className="deep-hero-row">
            <div>
              <h1>One firm.<br/>A long memory.</h1>
              <p className="lead">Falcon was founded in 2017 by Marian Wei, a former federal program officer who watched too many good projects die in submission. The firm exists to keep that from happening to yours.</p>
            </div>
            <img src="../../assets/falcon-sigil-silver.png" className="sigil" alt="" />
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
            <Stat value="$84M" label="Capital secured" metal />
            <Stat value="47" label="Funded projects" />
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

function ClientResourcesPage({ setRoute }) {
  const [open, setOpen] = useState(0);
  const FAQ = [
    { q: 'How long does a typical engagement run?', a: 'Six weeks for a single grant application. Three to twelve months for ongoing PM. Construction oversight typically tracks the build duration plus 90 days closeout.' },
    { q: 'Do you take a percentage of grants you win?', a: 'No. All Falcon engagements are fixed‑fee. We believe contingency arrangements create the wrong incentives — and most federal funders restrict them.' },
    { q: 'What does a typical first month look like?', a: 'Week 1 is intake and brief. Week 2 is draft. Week 3 is the reviewer-style read and revise. Week 4 is submission prep. You will hear from us at least three times a week.' },
    { q: 'Will I work with the same person throughout?', a: 'Yes. Falcon does not rotate staff or subcontract delivery. The senior PM on your kickoff is on your closeout.' },
    { q: 'Do you sign NDAs?', a: 'Yes — mutual NDA is standard and we sign yours or ours.' },
  ];

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
            <img src="../../assets/falcon-sigil-silver.png" className="sigil" alt="" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="stats-row">
            <Stat value="$4.2M" label="Recent HUD CDBG award" metal />
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
              who="D. Reyes, Executive Director, North Bay Housing Coalition" />
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

function ContactPage({ setRoute }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', projectType: 'Grant Consulting', message: '' });
  const upd = (k) => (e) => setForm(s => ({ ...s, [k]: e.target.value }));

  return (
    <div className="page page-fade-enter">
      <section className="deep-hero">
        <div className="wrap deep-hero-inner">
          <div className="crumbs">Contact</div>
          <div className="deep-hero-row">
            <div>
              <h1>Send the signal.</h1>
              <p className="lead">Tell us what you need delivered. We will respond within one business day — most weeks, the same afternoon.</p>
            </div>
            <img src="../../assets/falcon-sigil-silver.png" className="sigil" alt="" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap contact-grid">
          <div>
            {!submitted ? (
              <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div className="row-2">
                  <div>
                    <label>Name</label>
                    <input className="input" required value={form.name} onChange={upd('name')} placeholder="Your name" />
                  </div>
                  <div>
                    <label>Email</label>
                    <input className="input" type="email" required value={form.email} onChange={upd('email')} placeholder="you@org.com" />
                  </div>
                </div>
                <div className="row-2">
                  <div>
                    <label>Phone</label>
                    <input className="input" value={form.phone} onChange={upd('phone')} placeholder="(415) 555-0142" />
                  </div>
                  <div>
                    <label>Project type</label>
                    <select className="input" value={form.projectType} onChange={upd('projectType')} style={{ appearance: 'none', cursor: 'pointer' }}>
                      <option>Grant Consulting</option>
                      <option>General PM</option>
                      <option>Tech Projects</option>
                      <option>Construction PM</option>
                      <option>Other / not sure</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label>Message</label>
                  <textarea className="input" required rows="6" value={form.message} onChange={upd('message')} placeholder="Tell us about the engagement — timeline, stakes, what good looks like." />
                </div>
                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                  Send the signal <Icon name="arrow-right" size={16} />
                </button>
                <small>By submitting, you agree to our Privacy Policy. We do not share inquiries with anyone.</small>
              </form>
            ) : (
              <div className="card card-elevated" style={{ padding: 48 }}>
                <Icon name="check-circle-2" size={36} style={{ color: 'var(--blood)' }} />
                <h3 className="mt-4">The signal is received.</h3>
                <p className="mt-3">We'll be in touch within one business day. If your matter is urgent, call (415) 555‑0142.</p>
                <button className="btn btn-secondary mt-4" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', projectType: 'Grant Consulting', message: '' }); }}>Send another</button>
              </div>
            )}
          </div>
          <div className="contact-info">
            <div className="ci-item">
              <Icon name="mail" size={24} />
              <div>
                <div className="ci-label">Email</div>
                <div className="ci-value">hello@falconpm.co</div>
              </div>
            </div>
            <div className="ci-item">
              <Icon name="phone" size={24} />
              <div>
                <div className="ci-label">Direct line</div>
                <div className="ci-value">(415) 555‑0142</div>
              </div>
            </div>
            <div className="ci-item">
              <Icon name="map-pin" size={24} />
              <div>
                <div className="ci-label">Office</div>
                <div className="ci-value">Oakland, California</div>
              </div>
            </div>
            <div className="ci-item" style={{ background: 'var(--ink)', color: 'var(--bone)', border: 0 }}>
              <Icon name="clock" size={24} style={{ color: 'var(--silver-300)' }} />
              <div>
                <div className="ci-label" style={{ color: 'var(--silver-400)' }}>Response time</div>
                <div className="ci-value">One business day · usually same afternoon</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer setRoute={setRoute} />
    </div>
  );
}

function PrivacyPage({ setRoute }) {
  return (
    <div className="page page-fade-enter">
      <section className="deep-hero">
        <div className="wrap deep-hero-inner">
          <div className="crumbs">Legal</div>
          <h1>Privacy Policy</h1>
          <p className="lead">Last updated May 2026. Plain language; we are a small firm and we do not sell or share data.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <h3>Data we collect</h3>
          <p className="mt-3">Inquiry form submissions: name, email, phone, project type, message. Usage analytics: page views and referring source via a privacy‑first provider. No third‑party advertising trackers.</p>
          <h3 className="mt-7">How we use it</h3>
          <p className="mt-3">Solely to respond to your inquiry and improve the site. Inquiries are retained for three years and then deleted unless you become a client.</p>
          <h3 className="mt-7">Cookies</h3>
          <p className="mt-3">A single first-party cookie holds your form draft if you navigate away. No third-party cookies are set.</p>
        </div>
      </section>
      <Footer setRoute={setRoute} />
    </div>
  );
}

Object.assign(window, {
  HomePage, ServicesPage, GrantConsultingPage, AboutPage, ClientResourcesPage, ContactPage, PrivacyPage
});
