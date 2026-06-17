// Falcon PM — Router

function App() {
  const [route, setRoute] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setScrollY(0);
    setTimeout(() => window.lucide && window.lucide.createIcons(), 50);
  }, [route]);

  const go = (r) => setRoute(r);

  const page = (() => {
    switch (route) {
      case 'home': return <HomePage setRoute={go} />;
      case 'services': return <ServicesPage setRoute={go} />;
      case 'service-grant': return <GrantConsultingPage setRoute={go} />;
      case 'service-pm':
      case 'service-tech':
      case 'service-construction': return <ServicesPage setRoute={go} />;
      case 'about': return <AboutPage setRoute={go} />;
      case 'resources': return <ClientResourcesPage setRoute={go} />;
      case 'contact': return <ContactPage setRoute={go} />;
      case 'privacy': return <PrivacyPage setRoute={go} />;
      default: return <HomePage setRoute={go} />;
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
    if (scrollY < 24) navState = 'transparent';
    else if (scrollY < window.innerHeight * 0.78) navState = 'glass';
    else navState = 'light';
  } else {
    // deep-hero is ~380px tall on these pages; switch around 320
    if (scrollY < 24) navState = 'transparent';
    else if (scrollY < 320) navState = 'glass';
    else navState = 'light';
  }

  return (
    <>
      <Nav route={route} setRoute={go} navState={navState} />
      {page}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
