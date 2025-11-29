import './RecipeHeader.scss'
import clsx from 'clsx'
import AuthorCard from "@/components/AuthorCard/index.js";
import Tag from "@/components/Tag/index.js";
import Actions from "@/components/Actions/index.js";

export default (props) => {
  const {
    className,
    linkLabel,
    tags,
    author,
  } = props

  return (
    <div
      className = {clsx('recipe-header', className)}
    >
      <h1 className="recipe-header__title">{linkLabel}</h1>
      <div className="recipe-header__body">
        <AuthorCard
          imgSrc={author.imgSrc}
          name={author.name}
          authorDate={author.authorDate}
        />
        <ul className="recipe-header__list">
          <li className="recipe-header__item">
            <p className="recipe-header__item-description">COOK TIME
            </p>
            <Tag
              iconName={tags.prepTime.iconName}
              label={tags.prepTime.label}
            />
          </li>
          <li className="recipe-header__item">
            <p className="recipe-header__item-description">PREP TIME
            </p>
            <Tag
              iconName={tags.cookTime.iconName}
              label={tags.cookTime.label}
            />
          </li>
          <li className="recipe-header__item hidden-mobile-s">
            <Tag
              iconName={tags.dishName.iconName}
              label={tags.dishName.label}
            />
          </li>
        </ul>
      </div>
      <Actions
      className="recipe-header__actions"
      />
    </div>

  )
}
