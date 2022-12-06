import React from "react";

function Button({
  outline,
  onClick,
  text,
  primary,
  sm,
  rounded,
  roundedFull,
  style,
  secondary,
  children,
  className,
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 hover:shadow-xl text-white font-medium transition-all ${
        primary && "btn-primary"
      } ${secondary && "btn-secondary"} ${sm && "btn-sm"} ${
        rounded && "btn-rounded"
      } ${roundedFull && "rounded-full"} ${
        outline && "bg-neutral-900 border-2 border-neutral"
      } ${style && style} ${className && className}}`}
    >
      {text} {children}
    </button>
  );
}

export default Button;
