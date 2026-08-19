import Icon from './Icon.jsx';

export default function Hero({ crumbs, title, lead, showSigil = true, primaryLabel, onPrimary, secondaryLabel = 'Back to services', onSecondary }) {
  const hasActions = Boolean(onPrimary || onSecondary);

  const actions = hasActions && (
    <div className="actions" style={{ marginTop: 32, display: 'flex', gap: 12 }}>
      {onPrimary && (
        <button className="btn btn-primary" onClick={onPrimary}>
          {primaryLabel} <Icon name="arrow-right" size={16} />
        </button>
      )}
      {onSecondary && (
        <button className="btn btn-on-dark" onClick={onSecondary}>{secondaryLabel}</button>
      )}
    </div>
  );

  return (
    <section className="deep-hero">
      <div className="wrap deep-hero-inner">
        <div className="crumbs">{crumbs}</div>
        {showSigil ? (
          <div className="deep-hero-row">
            <div className="deep-hero-copy">
              <h1>{title}</h1>
              <p className="lead">{lead}</p>
              {actions}
            </div>
            <div className="sigil" aria-hidden="true"></div>
          </div>
        ) : (
          <>
            <h1>{title}</h1>
            <p className="lead">{lead}</p>
            {actions}
          </>
        )}
      </div>
    </section>
  );
}
