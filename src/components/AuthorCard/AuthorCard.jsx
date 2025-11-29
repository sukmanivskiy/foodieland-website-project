import './AuthorCard.scss'
import clsx from 'clsx'
import {Image} from "minista";

export default (props) => {
  const {
    className,
    imgSrc,
    name,
    authorDate,
    isInline
  } = props

  return (
    <div
      className={clsx(
        'author-card',
        isInline && 'author-card--inline',
      )}
    >
      <Image
        src={imgSrc}
        className={clsx(
          'author-card__image',
          isInline && 'author-card--inline__image',
        )}
      />
      <h3 className={clsx(
        'author-card__name',
        isInline && 'author-card--inline__name',
      )}>{name}</h3>

      {authorDate && <time className={clsx(
        'author-card__date',
        isInline && 'author-card--inline__date',
      )} dateTime={authorDate.dateTime}>
        {authorDate.label}
      </time>}

    </div>
  )
}
