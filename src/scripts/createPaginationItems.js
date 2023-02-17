import { Pagination } from "react-bootstrap"

const createPaginationItems = (totalCount, limit, activePage, handleClick) => {
    const totalPages = totalCount / limit
    let paginationItems = []
    for (let number = 1; number <= totalPages; number++) {
        paginationItems.push(<Pagination.Item onClick={handleClick} id={number} key={number} active={number === activePage}>{number}</Pagination.Item>)       
    }
    return paginationItems
}

export default createPaginationItems;