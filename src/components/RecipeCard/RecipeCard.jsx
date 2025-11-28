import './RecipeCard.scss'
import clsx from 'clsx'
import {Image} from "minista";
import MyIcon from "@/components/MyIcon/index.js";
import LikeButton from "@/components/LikeButton/index.js";

export default (props) => {
  const {
    className,
    tags = [],
    linkLabel,
    imgSrc,
    href,
  } = props

  return (
    <div
      className = {clsx('recipe-card', className)}
    >
      <div className="recipe-card__body">
        <Image
          className={clsx('recipe-card__image', {})}
          src={imgSrc}
        />
        <a
          className={clsx('recipe-card__link', className)}
          href= {href}
        >
          {linkLabel}
        </a>
        <ul className="recipe-card__tags-list">
          {tags.map(({iconName, label}) => (
            <li className="recipe-card__tags-item">
              <MyIcon name={iconName} hasFill />
              <span className='recipe-card__tags-label'>{label}</span>
            </li>
          ))}
        </ul>
        <LikeButton/>
      </div>
    </div>
  )
}
