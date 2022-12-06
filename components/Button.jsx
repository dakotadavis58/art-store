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
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 hover:shadow-xl text-white transition-all ${
        primary && "btn-primary"
      } ${secondary && "btn-secondary"} ${sm && "btn-sm"} ${
        rounded && "btn-rounded"
      } ${roundedFull && "rounded-full"} ${
        outline && "bg-neutral-900 border-2 border-neutral"
      } ${style}`}
    >
      {text}
    </button>
  );
}

export default Button;
