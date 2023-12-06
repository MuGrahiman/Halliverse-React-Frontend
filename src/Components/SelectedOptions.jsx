import React from "react";
import {
  SelectedOptionsContainer,
  Pill,
  DeleteButton,
} from "../StyledComponents/selectedOptionStyle.js";

const SelectedOptions = ({ selectedOptions, onOptionDelete }) => {
  return (
    <SelectedOptionsContainer>
      {selectedOptions.map((option, index) => (
        <Pill key={index}>
          {option}
          <DeleteButton onClick={() => onOptionDelete(option)}>
            <i className="fas fa-times"></i>{" "}
          </DeleteButton>
        </Pill>
      ))}
    </SelectedOptionsContainer>
  );
};

export default SelectedOptions;
