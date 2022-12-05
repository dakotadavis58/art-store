import React from "react";

function Input({ type, placeHolder, className }) {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      className={`bg-neutral-800 drop-shadow-xl shadow-xl rounded-md mr-1 px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary w-full ${
        className ? className : ""
      }`}
    />
  );
}

export default Input;
