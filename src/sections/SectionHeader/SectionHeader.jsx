import './SectionHeader.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    title,
  } = props

  return (
    <header
      className = {clsx('section-header', className)}
    >
      <h1 className="section-header__title">{title}</h1>
      <div className="section-header__description">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
      </div>
    </header>
  )
}
