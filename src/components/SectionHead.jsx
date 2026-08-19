export default function SectionHead({ eyebrow, title, lead }) {
  return (
    <div className="section-head">
      <div className="eyebrow eyebrow-blood" style={{ color: 'var(--blood)' }}>{eyebrow}</div>
      <div className="section-head-row">
        <h2>{title}</h2>
        <p className="lead">{lead}</p>
      </div>
    </div>
  );
}
