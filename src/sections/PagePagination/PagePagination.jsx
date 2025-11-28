import './PagePagination.scss'
import clsx from 'clsx'
import PaginationButton from "@/components/PaginationButton/index.js";

export default (props) => {
  const { total, current } = props;

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
    <nav style={{ marginTop: "20px", display: "flex", gap: "8px", alignItems: "center" }}>

      {/* Prev */}
      {current > 1 && (
        <PaginationButton href={`/recipes/${current - 1}`} aria-label="Prev">
          ←
        </PaginationButton>
      )}

      {/* Ліва "…" */}
      {start > 1 && (
        <>
          <PaginationButton href={`/recipes/1`}>1</PaginationButton>
          <span style={{ padding: "0 6px" }}>…</span>
        </>
      )}

      {/* Сторінки */}
      {pages.map((page) => (
        <PaginationButton
          key={page}
          href={`/recipes/${page}`}
          variant={current === page ? "active" : "default"}
        >
          {page}
        </PaginationButton>
      ))}

      {/* Права "…" */}
      {end < total && (
        <>
          <span style={{ padding: "0 6px" }}>…</span>
          <PaginationButton href={`/recipes/${total}`}>{total}</PaginationButton>
        </>
      )}

      {/* Next */}
      {current < total && (
        <PaginationButton href={`/recipes/${current + 1}`} aria-label="Next">
          →
        </PaginationButton>
      )}
    </nav>
  );
};
