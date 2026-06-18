export default function Stat({ value, label, blood }) {
  return (
    <div className="stat-block">
      <div className="n" style={blood ? { color: 'var(--blood)' } : null}>{value}</div>
      <div className="l">{label}</div>
    </div>
  );
}
