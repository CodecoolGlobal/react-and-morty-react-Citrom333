import React from "react";
// (props: number of total pages)

const PaginationItem=({page, currentPage, onPageChange})=>{
    return(
        <li className="page-item" onClick={() => onPageChange(page)}>
            <span className="page-link">{page}</span>
        </li>
    )
}

const Pagination=({currentPage, onPageChange, totalPages})=>{
const pages=[];
for (let i=1; i<=totalPages; i++) {
    pages.push(i);
}
    return <div className="pagination">
        <ul>
            {pages.map((page)=> <PaginationItem 
                                    page={page} 
                                    key={page} 
                                    currentPage={currentPage} 
                                    onPageChange={onPageChange}
                                />)}
        </ul>
    </div>
}
export default Pagination;