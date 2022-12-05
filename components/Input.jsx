import React from "react";

function Input({ type, placeHolder, className }) {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      className={`bg-gray-800 rounded-md mr-1 px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary w-full ${
        className ? className : ""
      }`}
    />
  );
}

export default Input;