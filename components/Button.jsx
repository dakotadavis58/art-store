import React from "react";

function Button({ onClick, text, primary }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${primary ? "btn-primary" : "btn-secondary"}`}
    >
      {text}
    </button>
  );
}

export default Button;
