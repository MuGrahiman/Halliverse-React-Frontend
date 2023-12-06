import styled from "styled-components";
import { Wrapper } from "./globalStyles";

export const CardWrapper = styled(Wrapper)`
  width: 100%;
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 50vh;
  align-items: center;
  gap: 5px;
  flex-direction: column;
  padding: 1.5rem;
  /* scrollbar-width: none; */

  &::-webkit-scrollbar {
    width: 3px;
    height: 3px; /* For Chrome and Safari */
  }
  &::-webkit-scrollbar-thumb {
    /* display: none; */
    background: red;
    width: 10px;
    height: 3px;
  }
  &::-webkit-scrollbar-track {
    /* display: none; */
    box-shadow: inset 0 0 5px grey;
    width: 10px;
    height: 3px;
  }
  /* &::-webkit-scrollbar {
    display: none;
  } */
`;

export const CardContainer = styled.div`
  width: 300px;
  display: ${({ flex }) => flex};
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  box-shadow: 3px 3px 8px -3px #000;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.9);
  transition: background-color 0.3s, transform 0.3s;
  color: black;

  &:hover {
    background-color: #fff;
    transform: scale(1.01);
    box-shadow: 0 0 100px 0 #000;
  }
`;
export const CardBody = styled.div``;
export const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 200px;
  border-radius: 5px;
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  margin: 10px 0;
  color: black;
`;
export const CardCategory = styled.p`
  font-size: 1rem;
  margin-top: 10px;
  color: #555;
`;
export const CardPrice = styled.p`
  font-size: 1.2rem;
  color:${({color})=>color||'#de4242'} ;
`;
