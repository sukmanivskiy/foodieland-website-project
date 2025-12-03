import './RecipeCard.scss'
import clsx from 'clsx'
import {Image} from "minista";
import MyIcon from "@/components/MyIcon/index.js";
import LikeButton from "@/components/LikeButton/index.js";
import Tag from "@/components/Tag/Tag.jsx";

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
          href= {`/recipes/${href}`}
        >
          {linkLabel}
        </a>
        <ul className="recipe-card__tags-list">
          <li className='recipe-card__tags-item'>
            <Tag
              iconName={tags.totalTime.iconName}
              label={tags.totalTime.label}
            />
          </li>
          <li className='recipe-card__tags-item'>
            <Tag
              iconName={tags.dishName.iconName}
              label={tags.dishName.label}
            />
          </li>
        </ul>
        <LikeButton/>
      </div>
    </div>
  )
}
