import React, { useEffect, useState } from "react";
import { Aligner } from "../StyledComponents/manipulatorStyles";
import DropDown from "./DropDown";
import SelectedOptions from "./SelectedOptions";

const Manipulator = ({ categories, onSelectSort, onSelectFilter }) => {
  const [filterOptions, setFilterOptions] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [availableOption, setAvailableOption] = useState(false);
  const [manipulatorOptions, setManipulatorOptions] = useState([]);

  useEffect(() => {
    const updatedOptions = [...filterOptions];
    if (sortOption && sortOption !== "_") {
      updatedOptions.push(sortOption);
    }
    setManipulatorOptions(updatedOptions);
  }, [filterOptions, sortOption]);

  const handleFilter = (option) => {
    if (!filterOptions.includes(option)) {
      setFilterOptions((prevOptions) => [...prevOptions, option]);
    }

    const selectedFilter = { filterOptions: [...filterOptions, option], sortOption, availableOption };
    if (!sortOption) {
      delete selectedFilter.sortOption;
    }
    onSelectFilter(selectedFilter);
  };

  const handleSort = (option) => {
    if (option !== "_") {
      setSortOption(option);
      if (filterOptions.length > 0 || sortOption) {
        onSelectFilter({ filterOptions: [...filterOptions], sortOption: option, availableOption });
      } else {
        onSelectSort({ type: "sort", sortOption: option, availableOption });
      }
    }
  };

  const handleAvailabilityToggle = () => {
    setAvailableOption((prevOption) => !prevOption);
    onSelectFilter({ availableOption: !availableOption });
  };

  const handleRemove = (option) => {
    let updatedOptions = manipulatorOptions.filter((data) => data !== option);

    if (option === sortOption) {
      setSortOption("");
    }

    if (filterOptions.includes(option)) {
      setFilterOptions((prevOptions) => prevOptions.filter((data) => data !== option));
    }

    setManipulatorOptions(updatedOptions);

    if (filterOptions.length > 0 || sortOption) {
      onSelectFilter({ filterOptions: [...filterOptions], sortOption, availableOption });
    } else {
      onSelectSort({ type: "sort", sortOption, availableOption });
    }
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
            onClick={handleAvailabilityToggle}
            name="availability"
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
