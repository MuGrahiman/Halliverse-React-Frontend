import React, { useEffect, useState } from "react";
import HeaderComponent from "./Header";
import { Container, GridContainer } from "../StyledComponents/globalStyles";
import products from "../Assets/data/products";
import UsersList from "./UsersList";
import UserList from "./UserList";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

const Layout = () => {
  const [SortedProduct, setSortedProduct] = useState([]);

  useEffect(() => {
    setSortedProduct(products);
  }, []);

  const searchFilter = (searchTerm) => {
    const lowercaseSearchTerm = searchTerm.toLowerCase();

    const filteredProducts = products.filter((product) => {
      const lowercaseProductName = product.productName.toLowerCase();
      const lowercaseCategory = product.category.toLowerCase();
      return (
        lowercaseProductName.includes(lowercaseSearchTerm) ||
        lowercaseCategory.includes(lowercaseSearchTerm)
      );
    });

    setSortedProduct(filteredProducts);
  };

  return (
    <div>
      <BrowserRouter>
        <HeaderComponent onSearch={(value) => searchFilter(value)} />
        <Container>
          <Router />
          {/* <GridContainer>
          <UsersList  SortedProduct={SortedProduct}/>
          <UserList SortedProduct={SortedProduct}/>
        </GridContainer> */}
        </Container>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
