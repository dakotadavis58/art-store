import React from "react";

function Button({ onClick, text, primary, sm, rounded, style }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${primary ? "btn-primary" : "btn-secondary"} ${
        sm ? "btn-sm" : ""
      } ${rounded ? "btn-rounded" : ""} ${style}`}
    >
      {text}
    </button>
  );
}

export default Button;
