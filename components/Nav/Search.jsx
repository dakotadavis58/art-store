import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Input from "../Input";

function Search({ mobile, placeholder, className }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-neutral-800 ml-8 mr-4 rounded-md ${className} }`}
    >
      <Input
        type="search"
        placeHolder={placeholder}
        className="rounded-md mr-1 px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-main w-full"
      />
      <button className="rounded-r-md">
        <AiOutlineSearch className="text-2xl m-1 " />
      </button>
    </form>
  );
}

export default Search;
