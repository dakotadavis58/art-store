import React, { useEffect } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TuneIcon from "@mui/icons-material/Tune";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useSiteData } from "../../hooks/SiteContext";
import CloseIcon from "@mui/icons-material/Close";
import { Chip } from "@mui/material";
import Button from "../utils/Button";

function FilterSortBar({
  filters,
  sorts,
  activeFilters,
  handleDeleteFilter,
  handleAddFilter,
  handleChangeSort,
}) {
  const [showFilter, setShowFilter] = React.useState(false);
  const [showSort, setShowSort] = React.useState(false);

  const data = useSiteData();

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
        {/* Filter Dropdown */}
        <div className="dropdown inline-block relative">
          {/* The overall button container */}
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
            {filters.map((filter) => (
              <div key={filter.name}>
                {filter.options.map((option) => (
                  <button
                    key={option.name + "1"}
                    value={option.value}
                    className={`w-full`}
                    href="#"
                    onClick={(e) => handleAddFilter(e)}
                  >
                    {option.name}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Sort Dropdown */}
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
            {sorts.map((sort) => (
              <div key={sort.name}>
                {sort.options.map((option) => (
                  <button
                    value={option.value}
                    onClick={(e) => handleChangeSort(e)}
                    key={option.name}
                    className={`w-full`}
                    href="#"
                  >
                    {option.name}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Active Filters and Sorts */}
      <div className="w-full min-h-10 py-1 flex flex-wrap justify-between">
        <div className="flex py-2">
          {activeFilters.filters.map((filter) => (
            <div key={filter}>
              <Chip
                className="bg-primary-main text-white hover:bg-primary-dark"
                label={filter}
                variant="outlined"
                onDelete={() => handleDeleteFilter(filter)}
                onClick={() => handleDeleteFilter(filter)}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-end py-1">
          <Chip
            className="bg-primary-main text-white"
            label={activeFilters.sorts}
            variant="outlined"
          />
        </div>
      </div>
    </div>
  );
}

export default FilterSortBar;
