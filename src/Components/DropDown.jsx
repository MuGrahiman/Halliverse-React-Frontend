import React, { useState } from "react";
import { Button } from "../StyledComponents/globalStyles";
import { DropdownContainer,DropdownList,DropdownItem, } from "../StyledComponents/dropDownStyle.js";

const DropDown = ({ options, onSelect ,BtnName}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
    
      <Button onClick={() => setIsOpen(!isOpen)} bg='#fff' h_bg='#de4242' c='#de4242' h_c='#fff'>{BtnName}</Button>

      <DropdownList isOpen={isOpen}>
        {options.map((option, index) => (
          <DropdownItem key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
};

export default DropDown;
