import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "./Components/Layout";
import { useDispatch } from "react-redux";
import { fetchAllUSersData } from "./Store/Actions";

const App = () => {
  const dispatch = useDispatch()
 
  const Theme = {
    Medium: "1000px",
    Small: "800px",
  };
  return( 
  <ThemeProvider theme={Theme}>
    <Layout />;
  </ThemeProvider>)
};

export default App;
