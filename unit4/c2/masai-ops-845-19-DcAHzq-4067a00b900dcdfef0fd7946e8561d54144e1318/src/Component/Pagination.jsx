function Pagination({page,setpage,total}) {
  const prev = (
    <button
      data-testid="prev-page"
      disabled={page==1}
      onClick={()=>setpage(page-1)}
    >
      Prev
    </button>
  );
  const currentPage = <button data-testid="current-page">{page}</button>;
  const next = (
    <button
      data-testid="next-page"
      disabled={page==total}
      onClick={()=>setpage(page+1)}
    >
      Next
    </button>
  );
  return (
  <div data-testid="page-container">
      <div>
      {prev}
      {currentPage}
      {next}
      </div>
      <div>
        Total Pages: <b data-testid="total-pages">{total}</b>
      </div>
    </div>
  );
}

export default Pagination;
