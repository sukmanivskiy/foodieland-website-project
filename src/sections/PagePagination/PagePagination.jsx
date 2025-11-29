import './PagePagination.scss'
import clsx from 'clsx'
import PaginationButton from "@/components/PaginationButton/index.js";

export default (props) => {
  const { total, current, className } = props;

  const maxPages = 5;
  let start = current - Math.floor(maxPages / 2);
  let end = current + Math.floor(maxPages / 2);

  if (start < 1) {
    start = 1;
    end = Math.min(total, maxPages);
  }

  if (end > total) {
    end = total;
    start = Math.max(1, total - maxPages + 1);
  }

  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <div className= {clsx('page-pagination',className)}>
      <nav className= 'page-pagination__navigation' >

        {current > 1 && (
          <PaginationButton className='page-pagination__button hidden-mobile-s' href={`/recipes/${current - 1}`} aria-label="Prev">
            (
          </PaginationButton>
        )}

        {start > 1 && (
          <>
            <PaginationButton className='page-pagination__button' href={`/recipes/1`}>1</PaginationButton>
            <span className= 'hidden-mobile-s'>…</span>
          </>
        )}

        {pages.map((page) => (
          <PaginationButton
            key={page}
            href={`/recipes/${page}`}
            className={clsx(
              'pagination-button',
              current === page && 'pagination-button--active'
            )}
          >
            {page}
          </PaginationButton>
        ))}

        {end < total && (
          <>
            <span className='hidden-mobile-s'>…</span>
            <PaginationButton className='page-pagination__button' href={`/recipes/${total}`}>{total}</PaginationButton>
          </>
        )}

        {current < total && (
          <PaginationButton className='page-pagination__button hidden-mobile-s' href={`/recipes/${current + 1}`} aria-label="Next">
            )
          </PaginationButton>
        )}
      </nav>
    </div>
  );
};
