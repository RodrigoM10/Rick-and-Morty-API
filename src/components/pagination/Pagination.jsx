import React from 'react'
import { Pagination } from 'react-bootstrap';

export default function PaginationRB({setPage, page, info}) {

    const prevPage = () => { setPage(page - 1) };
    const nextPage = () => { setPage(page + 1) };
    const firstPage = () => { setPage(1) };
    const lastPage = () => setPage((info.pages));

    return (
        <div className="d-flex justify-content-center my-4">
                <Pagination size="lg">
                    <Pagination.Prev onClick={prevPage} disabled={page === 1} />
                    <Pagination.Item onClick={firstPage} disabled={page === 1} >{1}</Pagination.Item>
                    <Pagination.Ellipsis disabled />
                    <Pagination.Item active>{page}</Pagination.Item>
                    <Pagination.Ellipsis disabled />
                    <Pagination.Item onClick={lastPage} disabled={page === info.pages} >{info.pages}</Pagination.Item>
                    <Pagination.Next onClick={nextPage} disabled={page === info.pages} />
                </Pagination>
            </div>
    )
}
