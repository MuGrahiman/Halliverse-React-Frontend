import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "./Components/Layout";

const App = () => {
 
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
