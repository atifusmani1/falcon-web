import Icon from './Icon.jsx';

// Renders a real logo when logoSrc is supplied, otherwise a graceful
// name-only placeholder so the layout is ready the moment a logo file
// is provided — never fabricate or AI-generate a placeholder logo.
export default function PartnerLink({ href, name, logoSrc }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="partner-logo-link"
      aria-label={`${name} — opens in a new tab`}>
      {logoSrc ? (
        <img src={logoSrc} alt={`${name} logo`} />
      ) : (
        <span className="partner-logo-placeholder">
          <Icon name="buildings" size={22} />
          <span>{name}</span>
        </span>
      )}
    </a>
  );
}
