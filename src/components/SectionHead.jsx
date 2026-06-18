export default function SectionHead({ eyebrow, title, lead }) {
  return (
    <div className="section-head">
      <div>
        <div className="eyebrow eyebrow-blood" style={{ color: 'var(--blood)' }}>{eyebrow}</div>
        <h2 className="mt-4">{title}</h2>
      </div>
      <div>
        <p className="lead">{lead}</p>
      </div>
    </div>
  );
}
