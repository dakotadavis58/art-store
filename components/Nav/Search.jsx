import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Search() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" bg-gray-800 ml-8 mr-4 hidden sm:flex rounded-md"
    >
      <input
        type="search"
        className="bg-gray-800 rounded-md mr-1 px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary w-full"
      />
      <button className="bg-gray-800 rounded-r-md">
        <AiOutlineSearch className="text-2xl m-1 " />
      </button>
    </form>
  );
}

export default Search;
