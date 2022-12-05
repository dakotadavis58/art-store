import React from "react";

function Button({ onClick, text, primary, sm, rounded, style }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 hover:shadow-xl text-white transition-all ${
        primary ? "btn-primary" : "btn-secondary"
      } ${sm ? "btn-sm" : ""} ${rounded ? "btn-rounded" : ""} ${style}`}
    >
      {text}
    </button>
  );
}

export default Button;
