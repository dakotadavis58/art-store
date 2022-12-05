import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Input from "../Input";

function Search() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-neutral-800 ml-8 mr-4 hidden sm:flex rounded-md"
    >
      <Input
        type="search"
        className="rounded-md mr-1 px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary w-full"
      />
      <button className="rounded-r-md">
        <AiOutlineSearch className="text-2xl m-1 " />
      </button>
    </form>
  );
}

export default Search;
