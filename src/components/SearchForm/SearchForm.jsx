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
      method = ""
      action = "/"
      className = "search-form"
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
        placeholder = "Search article, news or recipe..."
      />
      <Button
        className='search-form__button'
        type = "submit"
      >Search</Button>
    </form>
  )
}
