import React from "react";
import Button from "../Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function FilterSortBar() {
  return (
    <div className="w-full">
      <div className="w-full h-10 flex justify-between items-center">
        <Button
          text={"Filter"}
          roundedFull
          outline
          className={`hover:border-primary-main active:bg-black focus:bg-black`}
        >
          <ArrowDropDownIcon />
        </Button>

        <Button
          text={"Sort"}
          roundedFull
          outline
          className={`hover:border-primary-main active:bg-black focus:bg-black`}
        >
          <ArrowDropDownIcon />
        </Button>
      </div>
    </div>
  );
}

export default FilterSortBar;
