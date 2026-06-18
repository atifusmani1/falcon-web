import Icon from './Icon.jsx';

export default function ServiceCard({ num, icon, title, desc, onOpen }) {
  return (
    <div className="service-card" onClick={onOpen}>
      <div className="metal-top"></div>
      <div className="num">{num} <span style={{ color: 'var(--silver-400)' }}>·</span> Service</div>
      <div style={{ position: 'absolute', top: 32, right: 32, zIndex: 1 }} className="icon">
        <Icon name={icon} size={28} />
      </div>
      <h3>{title}</h3>
      <div className="desc">{desc}</div>
      <span className="arrow">Read the brief <Icon name="arrow-right" size={14} /></span>
    </div>
  );
}
