import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useDataValidation = () => {
  const [validData, setValidData] = useState([]);
  const userData = useSelector((state) => state.userReducer.data);

  const ValidateData = (Id) => {
    const item = userData.filter((item) => item._id === Id)[0];
    if (!item.available) alert("please select an available item");
     else if (
      validData.some((id) => {
        const existingItem = userData.find((item) => item._id === id);
        return existingItem.domain === item.domain;
      })
    )  alert("there is data with the same domain");
     else  setValidData((Ids) => [...Ids, Id]);
    
  };
  const clearValidateData = ()=>setValidData([])
  return [validData, ValidateData,clearValidateData];
};

export default useDataValidation;
