import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import GrantConsultingPage from './pages/GrantConsultingPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ClientResourcesPage from './pages/ClientResourcesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';
import { useRoute } from './lib/useRoute.js';

export default function App() {
  const [route, setRoute] = useRoute();
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
  }, [route]);

  let navState;
  if (route === 'home') {
    if (scrollY < 24) navState = 'transparent';
    else if (scrollY < window.innerHeight * 0.78) navState = 'glass';
    else navState = 'light';
  } else {
    if (scrollY < 24) navState = 'transparent';
    else if (scrollY < 320) navState = 'glass';
    else navState = 'light';
  }

  return (
    <>
      <Nav route={route} setRoute={setRoute} navState={navState} />
      <Routes>
        <Route path="/" element={<HomePage setRoute={setRoute} />} />
        <Route path="/services" element={<ServicesPage setRoute={setRoute} />} />
        <Route path="/services/grant-consulting" element={<GrantConsultingPage setRoute={setRoute} />} />
        <Route path="/services/general-pm" element={<ServicesPage setRoute={setRoute} />} />
        <Route path="/services/tech-projects" element={<ServicesPage setRoute={setRoute} />} />
        <Route path="/services/construction-pm" element={<ServicesPage setRoute={setRoute} />} />
        <Route path="/about" element={<AboutPage setRoute={setRoute} />} />
        <Route path="/resources" element={<ClientResourcesPage setRoute={setRoute} />} />
        <Route path="/contact" element={<ContactPage setRoute={setRoute} />} />
        <Route path="/privacy" element={<PrivacyPage setRoute={setRoute} />} />
        <Route path="*" element={<HomePage setRoute={setRoute} />} />
      </Routes>
    </>
  );
}
