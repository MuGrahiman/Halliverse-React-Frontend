import React, { useEffect, useState } from "react";
import { Wrapper } from "../StyledComponents/globalStyles";
import Card from "./Card";
import Manipulator from "./Manipulator";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import {
  fetchAllUSersData,
  fetchUserByFilter,
  fetchUserBySearchQuery,
} from "../Store/Actions";
import Pagination from "./Pagination";

const UsersList = ({ isOpen, handleCheckbox, checkedBox }) => {
  const [SortedProduct, setSortedProduct] = useState([]);
  const [search, setSearch] = useState("");
const navigate =useNavigate()
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);
  const searchData = useSelector((state) => state.searchReducer);
  const filterData = useSelector((state) => state.filterReducer);
  useEffect(() => {
    dispatch(fetchAllUSersData());
  }, []);
  useEffect(() => {
    setSortedProduct(userData?.data);
  }, [userData?.data]);
  useEffect(() => {
    setSortedProduct(searchData.data);
  }, [searchData.data]);
  useEffect(() => {
    if (filterData && filterData.data) {
      setSortedProduct(filterData.data);
    }
  }, [filterData]);

  const searchFilter = (searchTerm) => {
    if (searchTerm) dispatch(fetchUserBySearchQuery(searchTerm));
    else setSortedProduct(userData.data);
  };

  const handleFilter = (data) => {
    const { type, sortOption, filterOptions, availableOption } = data;

    if (filterOptions && filterOptions[0] && sortOption && availableOption)
      dispatch(
        fetchUserByFilter({ filterOptions, sortOption, availableOption })
      );
    if (filterOptions && filterOptions[0] && sortOption)
      dispatch(fetchUserByFilter({ filterOptions, sortOption }));
    if (
      type === "filter" &&
      filterOptions &&
      filterOptions[0] &&
      availableOption
    )
      dispatch(fetchUserByFilter({ filterOptions, availableOption }));
    if (type === "filter" && filterOptions && filterOptions[0])
      dispatch(fetchUserByFilter({ filterOptions }));
    else if (type === "sort" && sortOption && availableOption)
      dispatch(fetchUserByFilter({ sortOption, availableOption }));
    else if (type === "sort" && sortOption)
      dispatch(fetchUserByFilter({ sortOption }));
      else if (availableOption)
      dispatch(fetchUserByFilter({ availableOption }));
    else setSortedProduct(userData?.data);


  };
  return (
    <div>
      <SearchBar
        setValue={(value) => {
          searchFilter(value);
          setSearch(value);
        }}
        Value={search}
      />
      <Manipulator
        onSelectSort={handleFilter}
        onSelectFilter={handleFilter}
        categories={[
          "Business Development",
          "Finance",
          "IT",
          "Management",
          "Marketing",
          "Sales",
          "UI Designing",
        ]}
      />
      <Wrapper>
        {SortedProduct?.length > 0
          ? SortedProduct?.map((data) => (
              <>
          
                  <Card
                  onClick={()=>!isOpen && navigate(`user/${data._id}`)}
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
                {isOpen && (
                  <input
                    type="checkbox"
                    onChange={() => handleCheckbox(data?._id)}
                    checked={checkedBox(data?._id)}
                  />
                )}
              </>
            ))
          : "No Items"}
      </Wrapper>
      <Pagination currentPage={1} />
    </div>
  );
};

export default UsersList;
