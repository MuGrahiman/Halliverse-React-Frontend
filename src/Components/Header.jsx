import React, { useEffect, useRef, useState } from "react";
import {
  StyledHeader,
  stickyheader,
  NavLogo,
  NavWrapper,
  NavCNTWrapper,
  NavH1,
} from "../StyledComponents/headerStyle";
import { Button, Container } from "../StyledComponents/globalStyles";
import disneyCastle from "../Assets/images/Disneyfav.png";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
const HeaderComponent = ({ onSearch }) => {
  const headerRef = useRef(null);
  const [search, setSearch] = useState("");
  
  const [Header, setHeader] = useState(StyledHeader);
  const stickyHeaderFunct = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      )
        setHeader(stickyheader);
      else setHeader(StyledHeader);
    });
  };

  useEffect(() => {
    stickyHeaderFunct();
    return () => window.removeEventListener("scroll", stickyHeaderFunct);
  });

  return (
    <>
      <Header ref={headerRef}>
        <Container>
          <NavWrapper>
            <NavCNTWrapper>
              <NavLogo src={disneyCastle} alt="disneyLogo" />
              <NavH1>Hello-World</NavH1>
            </NavCNTWrapper>
            <NavCNTWrapper>
              {/* <SearchBar
                setValue={(value) => {
                  onSearch(value);
                  setSearch(value);
                }}
                Value={search}
              /> */}
               <Link to='/'>
              <Button
                onClick={() => onSearch(search)}
                bg="#de4242"
                h_bg="#fff"
                c="#fff"
                h_c="#de4242"
              >
                Home
              </Button></Link>
              <Link to='team'>
              <Button
                onClick={() => onSearch(search)}
                bg="#de4242"
                h_bg="#fff"
                c="#fff"
                h_c="#de4242"
              >
                Teams
              </Button></Link>
            </NavCNTWrapper>
          </NavWrapper>
        </Container>
      </Header>
    </>
  );
};

export default HeaderComponent;
