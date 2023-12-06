import React, { useEffect, useState } from "react";
import { Container, Wrapper } from "../StyledComponents/globalStyles";
import { Header } from "../StyledComponents/containerStyle";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../Store/Actions";
import Card from "./Card";
const UserList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.userReducer);
  const [SortedProduct, setSortedProduct] = useState([]);

  console.log(SortedProduct);
  useEffect(() => {
    dispatch(fetchUserById(id));
    if (data?.user) setSortedProduct(data);
  }, []);
  useEffect(() => {
    if (data?.user) setSortedProduct([data?.user]);
  }, [data]);

  return (
    <div>
      <Container bg={"#bdbdbd"}>
        <Header>
          <Link to="/">
            <IoIosArrowBack />
          </Link>
        </Header>
        <Wrapper>
          {SortedProduct?.length > 0
            ? SortedProduct?.map((data) => (
            
                  <Card
                    firstName={data?.first_name}
                    lastName={data?.last_name}
                    key={data?._id}
                    title={data?.productName}
                    image={data?.avatar}
                    Domain={data?.domain}
                    Email={data?.email}
                    Gender={data?.gender}
                    Avialable={data?.available}
                  />
              ))
            : "No Items"}
        </Wrapper>
      </Container>
    </div>
  );
};

export default UserList;
