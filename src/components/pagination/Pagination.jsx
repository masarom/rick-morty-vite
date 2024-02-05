import './Pagination.scss';

const Pagination = ({ currentPage, goToPreviousPage, goToNextPage }) => {
  const handlePrevPg = (ev) => {
    ev.preventDefault();
    return goToPreviousPage();
  };

  const handleNextPg = (ev) => {
    ev.preventDefault();
    return goToNextPage();
  };

  return (
    <form className='pagination'>
      <button className='pagination__btn' name='prev' onClick={handlePrevPg}>
        Prev
      </button>
      <span className="pagination__text">Page {currentPage} of 42</span>
      <button className='pagination__btn' name='next' onClick={handleNextPg}>
        Next
      </button>
    </form>
  );
}; 

export default Pagination;