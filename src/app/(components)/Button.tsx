import React from "react";

interface ButtonProps {
  title: string;
  id: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  containerClass?: string;
  textColor: string | undefined;
}

const Button = ({
  title,
  id,
  rightIcon,
  leftIcon,
  containerClass,
  textColor,
}: ButtonProps) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-${textColor} ${containerClass}`}
    >
      {leftIcon && <span className="mr-1">{leftIcon}</span>}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon && <span className="ml-1">{rightIcon}</span>}
    </button>
  );
};

export default Button;
