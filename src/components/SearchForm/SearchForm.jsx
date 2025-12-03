import './SearchForm.scss'
import clsx from 'clsx'
import Button from "@/components/Button/index.js";

export default (props) => {
  const {
    className,
  } = props

  return (
    <form
      role = "search"
      aria-label = "search"
      className = "search-form"
      data-js-search-form=''
    >
      <label
        htmlFor = "search"
        className = "visually-hidden"
      >search</label>
      <input
        className = "search-form__input"
        type = "search"
        id = "search"
        name = "q"
        autoComplete='off'
        data-js-search-input
        placeholder = "Search article, news or recipe..."
      />
      <Button
        className='search-form__button'
        type = "submit"
      >Search</Button>
    </form>
  )
}
