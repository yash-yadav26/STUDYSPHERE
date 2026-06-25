const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  let startPage = Math.max(1, currentPage - 1);
  let endPage = Math.min(totalPages, currentPage + 1);

  if (currentPage === 1) {
    endPage = Math.min(3, totalPages);
  }

  if (currentPage === totalPages) {
    startPage = Math.max(1, totalPages - 2);
  }

  const visiblePages = [];

  for (let i = startPage; i <= endPage; i++) {
    visiblePages.push(i);
  }

  return (
    <div className="flex items-center justify-center gap-3 mt-8">

      {/* Previous */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="
          px-5
          py-2.5
          rounded-xl
          border
          bg-white
          text-slate-700
          shadow-sm
          hover:bg-indigo-50
          disabled:opacity-50
          disabled:cursor-not-allowed
          transition
        "
      >
        Previous
      </button>

      {/* Page Numbers */}
      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`
            w-11
            h-11
            rounded-xl
            font-semibold
            transition-all
            duration-200
            ${
              currentPage === page
                ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg scale-105"
                : "bg-white border hover:bg-indigo-50 hover:border-indigo-400"
            }
          `}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="
          px-5
          py-2.5
          rounded-xl
          border
          bg-white
          text-slate-700
          shadow-sm
          hover:bg-indigo-50
          disabled:opacity-50
          disabled:cursor-not-allowed
          transition
        "
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;