import Button from "@/components/Button/index.js";
import SectionHeader from "@/sections/SectionHeader/SectionHeader.jsx";
import SearchFormSection
  from "@/sections/SearchFormSection/SearchFormSection.jsx";

export const metadata = {
  title: 'Not found',
}

export default () => {
  return (
    <>
      <SectionHeader
        title='Search & Enjoy'
        className = 'section container'/>
      <SearchFormSection className="container" />
      <div
        className = "items-list"
        data-js-results-container = ""
      >
        <ul
          data-js-results = ""
          aria-live = "polite"
          className = "items-list__list section container"
        ></ul>
      </div>
      <div className = "page-pagination">
        <nav
          className = "page-pagination__navigation"
          data-js-pagination = ""
          aria-label = "Pagination"
        ></nav>
      </div>
    </>
  )
}