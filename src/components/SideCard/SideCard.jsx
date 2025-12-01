import './SideCard.scss'
import clsx from 'clsx'
import {Image} from "minista";
import Tag from "@/components/Tag/Tag.jsx";
import LikeButton from "@/components/LikeButton/LikeButton.jsx";

export default (props) => {
  const {
    className,
    linkLabel,
    imgSrc,
    author,
    href
  } = props

  return (
    <div
      className = {clsx('side-card', className)}
    >
      <Image
        className={clsx('side-card__image', {})}
        src={imgSrc}
      />
      <div className="side-card__body">
        <a
          className={clsx('side-card__link h6', className)}
          href= {href}
        >
          {linkLabel}
        </a>
        <p className="side-card__name">By {author.name}</p>

      </div>
    </div>
  )
}
