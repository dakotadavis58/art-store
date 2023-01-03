import React from "react";

function Button({
  outline,
  onClick,
  text,
  primary,
  sm,
  roundedFull,
  style,
  secondary,
  children,
  className,
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 hover:shadow-xl text-white font-medium transition-all btn-rounded ${
        primary && "btn-primary"
      } ${secondary && "btn-secondary"} ${sm && "btn-sm"} ${
        roundedFull && "rounded-full"
      } ${outline && "bg-neutral-900 border-2 border-neutral"} ${
        style && style
      } ${className && className}`}
    >
      {text} {children}
    </button>
  );
}

export default Button;
