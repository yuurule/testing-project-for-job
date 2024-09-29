'use client';

const Pagination = ({ 
  totalPage, 
  currentPage, 
  handleSelectPage 
} : {
  totalPage : number[],
  currentPage : number,
  handleSelectPage : (page:number) => void,
}) => {

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <button 
            type="button"
            className="page-link" 
            disabled={currentPage == 1}
            onClick={() => handleSelectPage(currentPage - 1)}
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        {
          totalPage.map((page, index) => {
            return (
              <li key={index} className="page-item">
                <button 
                  type="button" 
                  className={`page-link ${page == currentPage ? 'active' : ''}`}
                  disabled={page == currentPage} 
                  onClick={() => handleSelectPage(page)} 
                >
                {page}
                </button>
              </li>
            )
          })
        }
        <li className="page-item">
          <button 
            type='button'
            className="page-link" 
            disabled={currentPage == totalPage.length}
            onClick={() => handleSelectPage(currentPage + 1)}
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination;