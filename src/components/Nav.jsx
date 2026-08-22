import { useState, useEffect } from "react";
import Icon from "./Icon.jsx";

const SERVICE_LINKS = [
  { id: "service-grant", num: "01", label: "Grant Consulting" },
  { id: "service-pm", num: "02", label: "General PM" },
  { id: "service-tech", num: "03", label: "Tech Projects" },
  { id: "service-construction", num: "04", label: "Construction PM" },
];

const NAV_ITEMS = [
  { id: "services", label: "Services", dropdown: SERVICE_LINKS },
  { id: "about", label: "About" },
  { id: "resources", label: "Client Resources" },
  { id: "mosque-security", label: "Mosque Security Initiative", highlight: true },
  { id: "contact", label: "Contact" },
];

export default function Nav({ route, setRoute, navState }) {
  const onDark = navState === "transparent" || navState === "glass";
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const goMobile = (r) => {
    setRoute(r);
    setMobileOpen(false);
  };

  const isServicesActive = SERVICE_LINKS.some((s) => s.id === route);

  return (
    <>
      <nav className={"nav nav-" + navState} aria-label="Primary">
        <div className="nav-inner">
          <button
            className="nav-brand"
            onClick={() => setRoute("home")}
            aria-label="Falcon Project Management — Home"
          >
            <img
              src={onDark ? "/falcon-sigil-white.png" : "/falcon-sigil.png"}
              alt=""
            />
            <span className="wm">FALCON</span>
          </button>
          <ul className="nav-links">
            {NAV_ITEMS.map((it) => (
              <li key={it.id}>
                <button
                  className={
                    (route === it.id ||
                    (it.id === "services" && isServicesActive)
                      ? "active "
                      : "") + (it.highlight ? "nav-link-highlight" : "")
                  }
                  onClick={() => setRoute(it.id)}
                  aria-haspopup={it.dropdown ? "true" : undefined}
                  aria-current={
                    route === it.id ||
                    (it.id === "services" && isServicesActive)
                      ? "page"
                      : undefined
                  }
                >
                  {it.highlight && <Icon name="shield-check" size={14} />}
                  {it.label}
                </button>
                {it.dropdown && (
                  <div className="nav-dropdown" role="menu">
                    {it.dropdown.map((s) => (
                      <button
                        key={s.id}
                        role="menuitem"
                        onClick={() => setRoute(s.id)}
                      >
                        <span className="sub-num">{s.num}</span>
                        {s.label}
                      </button>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <button
            className="btn btn-primary"
            style={{ height: 40, padding: "0 16px" }}
            onClick={() => setRoute("contact")}
          >
            Start the engagement <Icon name="arrow-right" size={16} />
          </button>
          <button
            className="nav-mobile-toggle"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <Icon name="menu" size={24} />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={"mobile-menu" + (mobileOpen ? " open" : "")}
        aria-hidden={!mobileOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <div className="mobile-menu-head">
          <div className="nav-brand" style={{ pointerEvents: "none" }}>
            <img src="/falcon-sigil-white.png" alt="" />
            <span className="wm" style={{ color: "var(--bone)" }}>
              FALCON
            </span>
          </div>
          <button
            className="mobile-menu-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <Icon name="x" size={28} />
          </button>
        </div>
        <nav aria-label="Mobile">
          {NAV_ITEMS.map((it) =>
            it.dropdown ? (
              <div className="mm-group" key={it.id}>
                <button
                  className={
                    route === it.id || isServicesActive
                      ? "active"
                      : ""
                  }
                  onClick={() => goMobile("services")}
                >
                  {it.label}
                </button>
                <div className="mm-sub">
                  {it.dropdown.map((s) => (
                    <button key={s.id} onClick={() => goMobile(s.id)}>
                      {s.num} · {s.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <button
                key={it.id}
                className={
                  (route === it.id ? "active " : "") +
                  (it.highlight ? "nav-link-highlight" : "")
                }
                onClick={() => goMobile(it.id)}
              >
                {it.highlight && <Icon name="shield-check" size={18} />}
                {it.label}
              </button>
            ),
          )}
          <div className="mm-cta">
            <button
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
              onClick={() => goMobile("contact")}
            >
              Start the engagement <Icon name="arrow-right" size={16} />
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
