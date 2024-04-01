import React from 'react';

interface ButtonProps {
  label: string;
  primary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  outline?: boolean;
  extraLarge?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  outline,
  disabled,
  large,
  extraLarge,
  fullWidth,
  onClick,
  primary,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
    disabled:opacity-70 
    disabled:cursor-not-allowed 
    rounded-2xl
    font-semibold
    hover:opacity-80
    transition
    ${fullWidth ? 'w-full' : 'w-fit'}
    ${primary ? 'bg-[#009379]' : 'bg-[#E5F4F2]'}
    ${primary ? 'text-white' : 'text-[#009379]'}
    ${large ? 'px-12 py-2' : 'px-8 py-2'}
    ${extraLarge ? 'py-4 px-14' : ''}
    ${outline ? 'bg-transparent' : ''}
    ${outline ? 'border-2 border-[#009379]' : ''}
    ${outline ? 'text-[#009379]' : ''}
    `}
    >
      {label}
    </button>
  );
};

export default Button;
