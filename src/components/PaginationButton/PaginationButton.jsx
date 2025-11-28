import './PaginationButton.scss'
import clsx from 'clsx'

export default (props) => {
  const { className, title,children,href, extraAttrs } = props


  return (
    <a
      className={clsx('pagination-button', className)}
      aria-label={title}
      title={title}
      href={href}
      {...extraAttrs}
    >
      {children}
    </a>
  )
}
