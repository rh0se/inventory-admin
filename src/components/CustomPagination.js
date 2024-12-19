import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import next from '../images/next.png';


const Pagination = ({ rowCount, rowsPerPageOptions = [1, 13, 26,], onChangePage, onChangeRowsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

    const totalPages = Math.ceil(rowCount / rowsPerPage);

    // Handle page change
    const handlePageChange = ({ selected }) => {
        const newPage = selected + 1; // Convert from 0-based to 1-based
        if (newPage < 1 || newPage > totalPages) return;
        setCurrentPage(newPage);
        if (onChangePage) onChangePage(newPage);
    };


    // Handle rows per page change
    const handleRowsPerPageChange = (event) => {
        const newRowsPerPage = Number(event.target.value);
        setRowsPerPage(newRowsPerPage);
        setCurrentPage(1); // Reset to the first page
        if (onChangeRowsPerPage) onChangeRowsPerPage(newRowsPerPage);
    };

    return (
        <div className="flex justify-between text-[#576378] items-center gap-4 mt-4">
            {/* Rows Per Page */}
            <div className="flex items-center gap-2">
                <label htmlFor="rowsPerPage" className="text-sm">
                    Show
                </label>
                <select
                    id="rowsPerPage"
                    value={rowsPerPage}
                    onChange={handleRowsPerPageChange}
                    className="border border-[#E5EBF0] px-2 py-1  text-xs rounded"
                >
                    {rowsPerPageOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <span className="text-sm">entries per page</span>
            </div>

            {/* Page Navigation */}
            <div className="flex">
                <button onClick={() => handlePageChange(0)}
                    disabled={currentPage === 1} // Disable on the first page
                    className={`text-xs bg-white border border-[#E5EBF0] px-2 text-[#576378] rounded ${currentPage === 1 ? "" : ""
                        }`}>First</button>
                <ReactPaginate
                    previousLabel={<img src={next} className={`rotate-180 ${currentPage === 1 ? "pagination-disabled" : "text-[#6D7D93]"}`} />}
                    breakLabel="..."
                    nextLabel={<img src={next} className={`${currentPage === totalPages ? "pagination-disabled" : "text-[#6D7D93]"}`} />}
                    pageCount={totalPages}
                    onPageChange={({ selected }) => handlePageChange({ selected })}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={2}
                    activeClassName={"active"}
                    containerClassName="custom-pagination"
                    pageClassName="custom-pagination-page"
                    previousClassName="custom-pagination-previous"
                    nextClassName="custom-pagination-next"
                    disabledClassName={"pagination-disabled"} // This handles disabling behavior for prev/next


                />
                <button onClick={() => handlePageChange(1)}
                    disabled={currentPage === totalPages} // Disable on the first page
                    className={`text-xs bg-white border border-[#E5EBF0] px-2 text-[#576378] rounded ${currentPage === totalPages ? "" : ""
                        }`}>Last</button>
            </div>
            {/* <div className="flex items-center gap-2">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 border rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                    Previous
                </button>
                {[...Array(totalPages).keys()].map((_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-3 py-1 border rounded ${currentPage === index + 1 ? "bg-blue-500 text-white" : ""}`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 border rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                    Next
                </button>
            </div> */}
        </div>
    );
};

export default Pagination;
