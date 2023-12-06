import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;align-items:center;
  margin-top: 20px;
`;

export const PageButton = styled.button`
  background-color: ${(props) => (props.active ? "#3498db" : "#ecf0f1")};
  color: ${(props) => (props.active ? "#ffffff" : "#333")};
  border: 1px solid #bdc3c7;
  padding: 8px 12px;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    background-color: #3498db;
    color: #ffffff;
  }
  @media screen and (max-width: ${({ theme }) => theme.Small}) {
    padding: 4px 6px;
  margin: 0 3px;
  }
`;


const Pagination = ({  handlePageClick }) => {
  const totalPages = useSelector((state) => state.paginationReducer);
  const [visiblePages, setVisiblePages] = useState(10); 
  const [currentPage, setCurrentPage] = useState(1); 
  const totalPagesArray = [...Array(visiblePages).keys()];
  
  const handleNextBtnClick = () => {

    if (visiblePages < totalPages.page) {
      setVisiblePages((prev) => prev + 10);
    }
  };

  const handlePrevBtnClick = () => {
    if (visiblePages > 10) {
      setVisiblePages((prev) => prev - 10);
    }
  };

  // const handleNextBtnClick = () => {
  //   if (visiblePages + 10 < totalPages.page) {
  //     setVisiblePages((prev) => prev + 10);
  //   } else {
  //     setVisiblePages(totalPages.page);
  //   }
  // };
  
  // const handlePrevBtnClick = () => {
  //   if (visiblePages > 10) {
  //     setVisiblePages((prev) => prev - 10);
  //   } else {
  //     setVisiblePages(10);
  //   }
  // };
  
  return (
    <PaginationContainer>
      {visiblePages > 10 && (
        <PageButton onClick={handlePrevBtnClick}>Prev</PageButton>
      )}
      {totalPagesArray.slice(visiblePages - 10, visiblePages)
        .map((page) => (
          <PageButton
            key={page}
            active={currentPage === page + 1}
            onClick={() => setCurrentPage(page + 1)}
          >
            {page + 1}
          </PageButton>
        ))}
      {visiblePages < totalPages.page && (
        <PageButton onClick={handleNextBtnClick}>Next</PageButton>
      )}
    </PaginationContainer>
  );
};

export default Pagination;
// {[...Array(totalPages.page).keys()].map((page) => (
//   <PageButton
//     key={page}
//     active={currentPage === page + 1}
//     onClick={() => handlePageClick(page + 1)}
//   >
//     {page + 1}
//   </PageButton>
// ))}
