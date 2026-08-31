import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'amber' | 'sky' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  id?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  iconPosition = 'left',
  target,
  rel,
  type = 'button',
  disabled = false,
  id,
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-display font-bold transition-all duration-200 select-none cursor-pointer rounded-2xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5 min-h-[36px]',
    md: 'text-sm px-6 py-2.5 gap-2 min-h-[44px]',
    lg: 'text-base px-8 py-3.5 gap-2.5 min-h-[50px]',
  };

  const variantStyles = {
    primary:
      'bg-[#4CAF50] hover:bg-[#3d9140] text-white shadow-md shadow-[#4CAF50]/20 hover:shadow-lg hover:shadow-[#4CAF50]/30 border border-[#4CAF50]/30',
    secondary:
      'bg-[#D8F3DC] hover:bg-[#c0ebd0] text-[#1B4332] border border-[#b7e4c7] font-bold',
    amber:
      'bg-[#FFB703] hover:bg-[#f0ab00] text-[#1B4332] shadow-xl shadow-yellow-200/60 hover:shadow-2xl border border-[#ffb703] font-extrabold',
    sky:
      'bg-[#0284c7] hover:bg-[#0369a1] text-white shadow-md shadow-sky-600/20 hover:shadow-lg border border-sky-500',
    outline:
      'bg-white border-2 border-[#E1E8DC] text-[#1B4332] hover:bg-[#F1F8E9] hover:border-[#4CAF50]/60',
    white:
      'bg-white hover:bg-[#F9FBF7] text-[#1B4332] shadow-md hover:shadow-lg border border-[#E1E8DC]',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} id={id}>
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        id={id}
      >
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      id={id}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
