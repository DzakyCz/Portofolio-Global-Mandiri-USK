const ROTATION = {
  right: 0,
  'up-right': -45,
  left: 180,
  down: 90,
};

const ICON_URL = '/Images/arrow-icon.png';

export default function ArrowIcon({ direction = 'right', className }) {
  return (
    <span
      className={className}
      aria-hidden="true"
      style={{
        width: '1em',
        height: '1em',
        display: 'inline-block',
        verticalAlign: 'middle',
        backgroundColor: 'currentColor',
        WebkitMaskImage: `url(${ICON_URL})`,
        maskImage: `url(${ICON_URL})`,
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        transform: `rotate(${ROTATION[direction] ?? 0}deg)`,
      }}
    />
  );
}
