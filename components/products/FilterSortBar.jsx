import React from "react";
import Button from "../Button";

function FilterSortBar() {
  return (
    <div className="w-full">
      <div className="w-full h-10 flex justify-between items-center">
        <Button text={"Filter"} roundedFull outline></Button>

        <Button text={"Sort"} roundedFull outline></Button>
      </div>
    </div>
  );
}

export default FilterSortBar;
