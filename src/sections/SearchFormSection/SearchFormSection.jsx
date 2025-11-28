import './SearchFormSection.scss'
import clsx from 'clsx'
import SearchForm from "@/components/SearchForm/index.js";

export default (props) => {
  const {
    className,
  } = props

  return (
    <section
      className = {clsx('search-form-section', className)}
    >
      <SearchForm />
    </section>
  )
}
