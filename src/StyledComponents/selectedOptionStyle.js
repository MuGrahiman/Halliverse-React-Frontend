import styled from "styled-components";

export const SelectedOptionsContainer = styled.div`
  border: 3px solid #fff;
  border-radius: 5px;
  display: flex;
  margin: 1rem auto;
  padding: 10px;
  overflow-x: auto;
  max-width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Pill = styled.div`
  background: #fff;
  color: #de4242;
  border: 2px solid #de4242;
  border-radius: 20px;
  padding: 5px 15px;
  margin: 5px;
  display: flex;
  align-items: center;

  &:hover {
    background: #de4242;
    color: #fff;
  }
`;

export const DeleteButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-left: 1rem;
`;
