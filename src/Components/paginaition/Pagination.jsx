import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  onNumberClick,
}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const generatePageNumber = () => {
    const pageNumber = [];
    const range = 3;

    for (
      let i = Math.max(1, currentPage - range);
      i <= Math.min(totalPages, currentPage + range);
      i++
    ) {
      pageNumber.push(i);
    }

    return pageNumber;
  };

  return (
    <div className="flex items-center gap-2 justify-center pb-8">
      <button
        className={`px-2 py-1 rounded-sm flex items-center gap-2 ${
          isFirstPage ? 'bg-base-300 cursor-not-allowed' : 'bg-white'
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={isFirstPage}
      >
        <FaAngleLeft /> Pre
      </button>

      <div className="flex flex-row gap-1">
        {generatePageNumber().map((pageNumber) => (
          <button
            key={pageNumber}
            className={`px-3 py-1 rounded-sm ${
              currentPage === pageNumber
                ? 'bg-base-300'
                : 'bg-white text-[#800000]'
            }`}
            onClick={() => onNumberClick(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>

      <button
        className={`px-2 py-1 rounded-sm flex items-center gap-2 ${
          isFirstPage ? 'bg-base-300 cursor-pointer' : 'bg-white'
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={isLastPage}
      >
        Next <FaAngleRight />
      </button>
    </div>
  );
};

export default Pagination;
