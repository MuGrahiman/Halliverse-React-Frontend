import React from 'react';
import styled from 'styled-components';
import { Button } from '../StyledComponents/globalStyles';

// Styled components for the modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: linear-gradient(
    90deg,
    rgb(23, 156, 79) 0%, 
    rgb(39, 174, 96) 94%  
);
  border-radius: 8px;
  padding: 20px;
  overflow: auto;
  max-width: 80vw;
  max-height: 80vh;
  width: 100%;
`;



// Modal component
const Modal = ({ isOpen, onClose, children }) => {
  console.log(isOpen+'  '+'in the modal');

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        {/* <Button onClick={onClose}>Close</Button> */}
        {children}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;