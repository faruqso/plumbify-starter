import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

export type IconButtonVariant = 'primary' | 'neutral';
export type IconButtonSize = 'sm' | 'md' | 'lg';

type IconButtonProps = {
  iconSrc: string;
  label: string;
  href?: string;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  class?: string;
  className?: string;
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'disabled' | 'onClick'>
  & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel'>;

export default function IconButton({
  iconSrc,
  label,
  href,
  variant = 'primary',
  size = 'md',
  class: astroClass,
  className,
  type = 'button',
  disabled = false,
  onClick,
  target,
  rel
}: IconButtonProps) {
  const classes = ['icon-button', `icon-button--${variant}`, `icon-button--${size}`, astroClass, className]
    .filter(Boolean)
    .join(' ');

  const icon = <img alt="" src={iconSrc} />;

  if (href) {
    return (
      <a className={classes} href={disabled ? undefined : href} aria-label={label} aria-disabled={disabled || undefined} target={target} rel={rel}>
        {icon}
      </a>
    );
  }

  return (
    <button className={classes} type={type} aria-label={label} disabled={disabled} onClick={onClick}>
      {icon}
    </button>
  );
}
