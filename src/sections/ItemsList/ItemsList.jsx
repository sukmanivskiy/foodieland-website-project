import './ItemsList.scss'
import clsx from 'clsx'
import ContentItem from "@/components/ContentItem/index.js";

export default (props) => {
  const {
    className,
    recipes,
    href,
  } = props

  return (
    <div
      className = {clsx('items-list', className)}
    >
      <ul className="items-list__list">
        {!href && recipes.map((item) => (
          <li className="items-list__item">
            <ContentItem
              linkLabel = {item.linkLabel}
              imgSrc = {item.imgSrc}
              href = {item.href}
              description = {item.description}
              author = {item.author}
            />
          </li>
        ))}
        {href && recipes.map((item) => (
          <li className="items-list__item">
            <ContentItem
              linkLabel = {item.linkLabel}
              imgSrc = {item.imgSrc}
              href = {`/${href}/${item.href}`}
              description = {item.description}
              author = {item.author}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
