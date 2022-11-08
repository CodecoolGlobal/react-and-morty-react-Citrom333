import React, { useState } from "react";
// (props: number of total pages)

const PaginationItem = ({ page, currentPage, onPageChange }) => {
    return page === currentPage ?
        <li className="page-item active" onClick={() => isNaN(page) ? "" : onPageChange(page)}>
            <span className="page-link">{page}</span>
        </li>
        :
        <li className="page-item" onClick={() => isNaN(page) ? "" : onPageChange(page)}>
            <span className="page-link">{page}</span>
        </li>

}


const Pagination = ({ currentPage, onPageChange, totalPages }) => {
    const pages = [];
    let i = 0;
    if (currentPage === 1 || currentPage === 2 || currentPage === 3) {
        pages.splice(0, pages.length)
        i = 1;
        for (i; i <= 4; i++) {
            pages.push(i);
        }
        pages.push(">>");
        pages.push(totalPages);
        
    } else
        if (currentPage === totalPages || currentPage === totalPages - 1 || currentPage === totalPages - 2) {
            i = totalPages - 3;
            pages.push(1);
            pages.push("<<");
            for (i; i <= totalPages; i++) {
                pages.push(i);
            }
            
        } else {
            i = currentPage - 1;
            pages.push(1);
            pages.push("<<");
            for (i; i <= currentPage + 1; i++) {
                pages.push(i);
            }
            pages.push(">>");
            pages.push(totalPages);
          
        }

    return <div className="pagination">
        <ul>
            <li className="page-item">
                <a onClick={(currentPage > 1) ? () => onPageChange(currentPage - 1) : ""} className="page-link">Prev </a>
            </li>
            {pages.map((page) => <PaginationItem
                page={page}
                key={page}
                currentPage={currentPage}
                onPageChange={onPageChange}
            />)}
            <li className="page-item">
                <a onClick={(currentPage < totalPages) ? () => onPageChange(currentPage + 1) : ""} className="page-link">Next </a>
            </li>
        </ul>
    </div >
}
export default Pagination;