import { useContext } from "react";
import ReactPaginate from "react-paginate";
import { driversContext } from "../storeContext/driversContext";

function Pagination() {
  const { setItemOffset } = useContext(driversContext);

  const handlePageClick = (e) => {
    setItemOffset(30 * e.selected);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next>"
      previousLabel="<Previous"
      pageCount={29}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      containerClassName="pagination"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      onPageChange={handlePageClick}
      activeClassName="active"
    />
  );
}

export default Pagination;
