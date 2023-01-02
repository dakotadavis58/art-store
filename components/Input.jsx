import React from "react";

const Input = React.forwardRef(
  ({ label, onChange, className, lg, ...rest }, ref) => {
    return (
      <div>
        <label htmlFor={label ? label.toLowerCase() : ""}>{label}</label>
        <input
          ref={ref}
          className={`max-w-sm bg-neutral-800 drop-shadow-xl shadow-xl rounded-md mr-1 px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary w-full ${
            className ? className : ""
          }`}
          {...rest}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
