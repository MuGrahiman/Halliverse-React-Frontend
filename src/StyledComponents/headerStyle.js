import styled from "styled-components";

export const StyledHeader = styled.nav`
  width: 100%;
  border-bottom: 3px solid #3b3b3b;
  background-color: #303030;
  box-shadow: 3px 3px 8px -3px #000;
  margin-bottom: 5rem;

  @media screen and (max-width: ${({ theme }) => theme.Small}) {
    border-bottom: none;
    background-color: transparent;
    box-shadow: none;
  }
`;

export const stickyheader = styled.div`
  width: 100%;
  box-shadow: 0 10px 50px #000;
  background: #bb2626;


  height: 70px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;

`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: ${({ theme }) => theme.Small}) {
    flex-direction: column;
gap: 5px;
      width: 100%;
      border-bottom: 3px solid #3b3b3b;
      background-color: #303030;
      box-shadow: 3px 3px 8px -3px #000;
      padding-bottom: 1rem;
      border-radius: 5px;
  }
`;

export const NavCNTWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const NavH1 = styled.h1`
  font-family: "times", sans-serif;
  font-size: 1.5rem;
`;

export const NavLogo = styled.img`
  border: 3px solid;
  border-radius: 100%;
  background-color: rgb(255, 255, 255);
  width: 3rem;
  height: 3rem;
`;
