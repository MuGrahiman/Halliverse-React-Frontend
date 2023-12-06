import { IoMdSearch } from "react-icons/io";
import { SearchBarContainer, SearchInput } from "../StyledComponents/SearchBarStyle.js";
import { Button } from "../StyledComponents/globalStyles.js";
import { useState } from "react";
import UsePagination from "../Hooks/UsePagination.js";
import { fetchUserBySearchQuery } from "../Store/Actions.js";

function SearchBar({ setValue, Value }) {
  // const [Data, handlePagination] = UsePagination(fetchUserBySearchQuery, 'searchReducer');
  // const [search, setSearch] = useState("");

  return (
    <SearchBarContainer>
      <SearchInput
        onChange={(e) => setValue(e.target.value)}
        value={Value}
        type="text"
      />
       <Button
                // onClick={() => onSearch(search)}
                w='10%'
                bg="#de4242"
                h_bg="#fff"
                c="#fff"
                h_c="#de4242"
              >
      <IoMdSearch size={'1rem'}/>
              </Button>
    </SearchBarContainer>
  );
}

export default SearchBar;
