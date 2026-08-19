import Hero from '../components/Hero.jsx';
import Footer from '../components/Footer.jsx';

export default function MosqueSecurityInitiativePage({ setRoute }) {
  return (
    <div className="page page-fade-enter">
      <Hero
        crumbs="Services · 05 Mosque Security Initiative"
        title="Protecting the places you gather to pray."
        lead="Physical security assessments, hardening grants, and emergency preparedness planning built for the specific threat landscape facing Islamic centers."
        primaryLabel="Discuss a security assessment"
        onPrimary={() => setRoute('contact')}
        onSecondary={() => setRoute('services')}
      />

      <section className="section">
        <div className="wrap">
          <p>hello!</p>
        </div>
      </section>

      <Footer setRoute={setRoute} />
    </div>
  );
}
