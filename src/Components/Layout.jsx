import React from "react";
import HeaderComponent from "./Header";
import { Container } from "../StyledComponents/globalStyles";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

const Layout = () => {

 
  
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <Container>
          <Router />
     
        </Container>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
