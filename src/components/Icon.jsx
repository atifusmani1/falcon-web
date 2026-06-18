const PHOSPHOR_NAMES = {
  'arrow-right': 'arrow-right',
  'file-text': 'file-text',
  'clipboard-list': 'clipboard-text',
  'cpu': 'cpu',
  'hard-hat': 'hard-hat',
  'check': 'check',
  'check-circle-2': 'check-circle',
  'mail': 'envelope',
  'phone': 'phone',
  'map-pin': 'map-pin',
  'clock': 'clock',
  'shield-check': 'shield-check',
  'heart-handshake': 'handshake',
  'landmark': 'bank',
  'home': 'house',
  'zap': 'lightning',
  'gem': 'gem',
  'briefcase': 'briefcase',
  'leaf': 'leaf',
  'train': 'train',
  'graduation-cap': 'graduation-cap',
  'stethoscope': 'stethoscope',
  'building-2': 'buildings',
  'plus': 'plus',
  'minus': 'minus',
  'menu': 'list',
  'x': 'x',
};

export default function Icon({ name, size = 20, style }) {
  const phName = PHOSPHOR_NAMES[name] || name;
  return (
    <i
      className={`ph-thin ph-${phName}`}
      style={{ fontSize: size, lineHeight: 1, display: 'inline-flex', ...style }}
      aria-hidden="true"
    />
  );
}
