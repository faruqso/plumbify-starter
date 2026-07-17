import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'emergency' | 'service' | 'menu';
export type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = {
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  label?: ReactNode;
  hoverLabel?: ReactNode;
  children?: ReactNode;
  class?: string;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  tabIndex?: number;
  form?: string;
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'name' | 'value' | 'aria-label'>;

export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  label,
  hoverLabel,
  children,
  class: astroClass,
  className,
  type = 'button',
  disabled = false,
  loading = false,
  tabIndex,
  form,
  name,
  value,
  'aria-label': ariaLabel
}: ButtonProps) {
  const visibleLabel = label ?? children;
  const revealedLabel = hoverLabel ?? visibleLabel;
  const classes = ['button', `button--${variant}`, `button--${size}`, loading && 'is-loading', astroClass, className]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      <span className="button__label button__label--default">{visibleLabel}</span>
      <span className="button__label button__label--hover" aria-hidden="true">{revealedLabel}</span>
    </>
  );

  if (href) {
    return (
      <a
        className={classes}
        href={disabled ? undefined : href}
        aria-disabled={disabled || undefined}
        aria-busy={loading || undefined}
        aria-label={ariaLabel}
        tabIndex={disabled ? -1 : tabIndex}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      type={type}
      disabled={disabled}
      aria-busy={loading || undefined}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
      form={form}
      name={name}
      value={value}
    >
      {content}
    </button>
  );
}
