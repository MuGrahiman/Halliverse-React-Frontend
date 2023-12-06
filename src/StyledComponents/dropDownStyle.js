import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  margin: 1px;
  padding: 1px;
  list-style: none;
  box-shadow: 3px 3px 8px -3px #000;
  background: rgba(255, 255, 255, 0.9);
  color: #000;
  font-size: large;
  border: 3px solid #fff;
  border-radius: 5px;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transform: scaleY(${({ isOpen }) => (isOpen ? "1" : "0")});
  transform-origin: top;
  transition: opacity 0.3s, transform 0.3s;
  z-index: 1;
`;

export const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #de4242;
    color: #fff;
  }
`;
