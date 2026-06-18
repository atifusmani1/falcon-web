export default function Testimonial({ quote, name, role, initials, photoUrl }) {
  const hasAvatar = !!(initials || photoUrl);
  return (
    <blockquote className="quote">
      <div className="q">"{quote}"</div>
      <div className="attribution">
        {hasAvatar && (
          <div className="avatar" style={photoUrl ? { backgroundImage: `url(${photoUrl})` } : null}>
            {!photoUrl && initials}
          </div>
        )}
        <cite>
          <span className="name">{name}</span><br />{role}
        </cite>
      </div>
    </blockquote>
  );
}
