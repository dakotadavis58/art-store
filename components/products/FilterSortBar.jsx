import React, { useEffect } from "react";
import Button from "../Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TuneIcon from "@mui/icons-material/Tune";
import FilterListIcon from "@mui/icons-material/FilterList";

function FilterSortBar() {
  const [showFilter, setShowFilter] = React.useState(false);
  const [showSort, setShowSort] = React.useState(false);

  useEffect(() => {
    window.onclick = function (event) {
      if (!event.target.matches(".dropbtn")) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
          let openDropdown = dropdowns[i];
          if (!openDropdown.classList.contains("hidden")) {
            setShowFilter(false);
            setShowSort(false);
          }
        }
      }
    };
  });

  return (
    <div className="w-full">
      <div className="w-full h-10 flex justify-between items-center">
        <div className="dropdown inline-block relative">
          <Button
            roundedFull
            outline
            className={`dropbtn hover:border-primary-main active:bg-black focus:bg-black`}
            onClick={() => {
              setShowFilter(!showFilter);
              if (showSort) {
                setShowSort(false);
              }
            }}
          >
            <TuneIcon className="pointer-events-none" />
            <div className="hidden md:inline-block pl-2 pr-1 pointer-events-none">
              Filter
            </div>

            <ArrowDropDownIcon className="pointer-events-none" />
          </Button>
          <div
            className={`dropdown-content flex flex-col w-40 bg-black z-[10000] origin-top-left ${
              showFilter ? "absolute" : "hidden"
            }`}
          >
            <button href="#">Price: Low to High</button>
            <button href="#">Price: High to Low</button>
            <button href="#">Newest</button>
            <button href="#">Oldest</button>
          </div>
        </div>
        <div className="dropdown relative inline-block">
          <Button
            roundedFull
            outline
            onClick={() => {
              setShowSort(!showSort);
              if (showFilter) {
                setShowFilter(false);
              }
            }}
            className={`dropbtn hover:border-primary-main active:bg-black focus:bg-black`}
          >
            <FilterListIcon className="pointer-events-none" />
            <div className="hidden md:inline-block px-1 pointer-events-none">
              Sort
            </div>
            <ArrowDropDownIcon className="pointer-events-none" />
          </Button>

          <div
            className={`dropdown-content flex flex-col bg-black w-40 right-0 z-[10000] ${
              showSort ? "absolute" : "hidden"
            }`}
          >
            <button href="#">Price: Low to High</button>
            <button href="#">Price: High to Low</button>
            <button href="#">Newest</button>
            <button href="#">Oldest</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterSortBar;
