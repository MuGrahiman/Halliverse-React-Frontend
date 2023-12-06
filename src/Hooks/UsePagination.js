import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UsePagination = (action, reducer) => {
  const dispatch = useDispatch();
  const [Data, setData] = useState(null);
  const selector = useSelector((state) => state[reducer]);
  console.log(selector);
  useEffect(() => {
    dispatch(action()); 
  }, []);

  const handlePagination = ({page=1,data} ) => dispatch(action({page,data}));
  useEffect(() => {
    console.log(selector);
    setData(selector);
  }, [selector]);
  return [Data, handlePagination];
};

export default UsePagination;
