export default function Footer({ setRoute }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-inner">
          <div>
            <div className="footer-brand">
              <img src="/falcon-sigil-white.png" alt="" />
              <span className="wm">FALCON</span>
            </div>
            <p className="footer-tag">Watchers of the schedule. Keepers of the budget. Falcon Project Management partners with mission-driven and public-sector clients to deliver complex work on time and in scope.</p>
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
              <li><a>(415) 555-0142</a></li>
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
