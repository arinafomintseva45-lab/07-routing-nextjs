'use client';

import ReactPaginate from 'react-paginate';

type Props = {
  pageCount: number;
  currentPage: number;
  onPageChange: (selected: number) => void;
};

export default function Pagination({
  pageCount,
  currentPage,
  onPageChange,
}: Props) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      forcePage={currentPage - 1}
      onPageChange={(event) => onPageChange(event.selected + 1)}
      previousLabel={'←'}
      nextLabel={'→'}
      breakLabel={'...'}
    />
  );
}