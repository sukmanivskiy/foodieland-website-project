import './ContentItem.scss'
import clsx from 'clsx'
import {Image} from "minista";
import MyIcon from "@/components/MyIcon/index.js";
import LikeButton from "@/components/LikeButton/index.js";
import AuthorCard from "@/components/AuthorCard/index.js";

export default (props) => {
  const {
    className,
    linkLabel,
    imgSrc,
    href,
    description,
    author,
  } = props

  return (
    <div
      className = {clsx('content-item', className)}
    >
      <Image
        className={clsx('content-item__image', {})}
        src={imgSrc}
      />
      <div className="content-item__body">
        <a
          className={clsx('content-item__link h4', className)}
          href= {href}
        >
          {linkLabel}
        </a>
        <div className="content-item__description">
          {description}
        </div>
        <AuthorCard
          className= 'content-item__author inline-card'
          {...author}
        />
      </div>
    </div>
  )
}
