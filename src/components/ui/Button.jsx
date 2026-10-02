import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  onClick,
  href,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-heading font-bold tracking-wider uppercase transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#C6FF3D] focus:ring-offset-2 focus:ring-offset-[#0A0B10] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-[#C6FF3D] hover:bg-[#b5f324] text-black shadow-lg shadow-[#C6FF3D]/25 hover:shadow-[#C6FF3D]/40 hover:scale-105 active:scale-95',
    secondary: 'bg-[#0D111A]/90 hover:bg-[#141B29] text-white border border-white/10 hover:border-[#C6FF3D]/40 backdrop-blur-md hover:scale-105 active:scale-95',
    outline: 'bg-transparent border border-[#C6FF3D]/50 hover:border-[#C6FF3D] text-[#C6FF3D] hover:bg-[#C6FF3D]/10 hover:scale-105 active:scale-95',
    cyan: 'bg-gradient-to-r from-[#22D3EE] to-[#06B6D4] hover:from-[#38BDF8] hover:to-[#0EA5E9] text-black shadow-lg shadow-[#22D3EE]/25 hover:shadow-[#22D3EE]/40 hover:scale-105 active:scale-95',
  };

  const sizes = {
    sm: 'px-4 py-2 text-[11px] gap-1.5',
    md: 'px-6 py-3 text-xs gap-2',
    lg: 'px-8 py-4 text-sm gap-2.5',
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {content}
    </button>
  );
};

export default Button;
