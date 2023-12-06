import React, { useEffect, useState } from "react";
import { Aligner } from "../StyledComponents/manipulatorStyles";
import DropDown from "./DropDown";
import SelectedOptions from "./SelectedOptions";

const Manipulator = ({ categories, onSelectSort, onSelectFilter }) => {
  const [filterOptions, setFilterOptions] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [availableOption, setavailableOption] = useState(false);
  const [manipulatorOptions, setManipulatorOptions] = useState([]);
  useEffect(() => {
    if (filterOptions && filterOptions.length > 0 && sortOption) {
      setManipulatorOptions([...filterOptions, sortOption]);
    } else if (filterOptions && filterOptions.length > 0) {
      setManipulatorOptions([...filterOptions]);
    } else if (sortOption) {
      setManipulatorOptions([sortOption]);
    }
  }, [filterOptions, setSortOption, sortOption]);

  const handleFilter = (option) => {
    if (!filterOptions.includes(option))
      setFilterOptions((data) => [...data, option]);

    if (sortOption) {
      onSelectFilter({
        filterOptions: [...filterOptions, option],
        sortOption,
        availableOption,
      });
    } else {
      onSelectFilter({
        type: "filter",
        filterOptions: [...filterOptions, option],
        availableOption,
      });
    }
  };

  const handleSort = (option) => {
    if (option !== "_") {
      if (sortOption !== option) {
        setManipulatorOptions(
          manipulatorOptions?.filter((data) => data !== option)
        );
        setSortOption(option);
        if (filterOptions.length > 0) {
          onSelectFilter({
            filterOptions: [...filterOptions, option],
            sortOption,
            availableOption,
          });
        } else {
          console.log(sortOption);
          onSelectSort({ type: "sort", sortOption: option, availableOption });
        }
      }
    }
    // else onSelectSort("");
  };

  const handleRemove = (option) => {
    if (option === sortOption) {
      setSortOption("");
      console.log("option");
      console.log(option);
      if (filterOptions.length > 0)
        onSelectSort({ type: "filter", filterOptions, availableOption });
      // else onSelectSort({ type: "sort", sortOption: "" });
    }
    if (filterOptions.includes(option)) {
      const updatedFilter = filterOptions.filter((data) => data !== option);
      setFilterOptions(updatedFilter);

      if (updatedFilter && sortOption)
        onSelectSort({ updatedFilter, sortOption, availableOption });
      else if (sortOption)
        onSelectSort({ type: "sort", sortOption, availableOption });
      else if (updatedFilter)
        onSelectFilter({
          type: "filter",
          filterOptions: updatedFilter,
          availableOption,
        });
      // else return;
    }
    const updatedFilter = manipulatorOptions.filter((data) => data !== option);
    setManipulatorOptions(updatedFilter);
  };
  return (
    <div>
      <Aligner>
        <div>
          <DropDown
            onSelect={(option) => handleFilter(option)}
            options={categories}
            BtnName={"Filter"}
          />
        </div>
        <label>
          Availability:{" "}
          <input
            type="checkbox"
            onClick={() => {
              setavailableOption(!availableOption);
              onSelectFilter({availableOption:!availableOption})
            }}
            name="availability"
            id=""
          />
        </label>
        <div>
          <DropDown
            onSelect={(option) => handleSort(option)}
            options={["_", "Male", "Female"]}
            BtnName={"Gender"}
          />
        </div>
      </Aligner>
      {manipulatorOptions[0] && (
        <SelectedOptions
          onOptionDelete={handleRemove}
          selectedOptions={manipulatorOptions}
        />
      )}
    </div>
  );
};

export default Manipulator;
