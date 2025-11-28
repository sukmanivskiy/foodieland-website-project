import './AuthorCard.scss'
import clsx from 'clsx'
import {Image} from "minista";

export default (props) => {
  const {
    className,
    imgSrc,
    name,
    authorDate,
  } = props

  return (
    <div
      className = {clsx('author-card', className)}
    >
      <Image
        src={imgSrc}
        className= 'author-card__image'
      />
      <h3 className = "author-card__name">{name}</h3>

      {authorDate && <time className="author-card__date" dateTime={authorDate.dateTime}>
        {authorDate.label}
      </time>}

    </div>
  )
}
