import './RecipeSuggestions.scss'
import clsx from 'clsx'
import {suggestedRecipes} from "@/data/recipes.js";
import RecipeCard from "@/components/RecipeCard/RecipeCard.jsx";

export default (props) => {
  const {
    className,
    isSmall,
  } = props

  return (
    <section
      className = {clsx('recipe-suggestions section container', className)}>
      {!isSmall && (
        <>
          <header className="recipe-suggestions__header">
            <h2 className="recipe-suggestions__title">Try this delicious recipe
              to make your day</h2>
            <div className="recipe-suggestions__description">
              <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
          </header>
          <div className="recipe-suggestions__body">
            <ul className="recipe-suggestions__list">
              {suggestedRecipes.map((
                {
                  tags,
                  linkLabel,
                  imgSrc,
                  href,
                }) => (
                <li className='recipe-suggestions__item'>
                  <RecipeCard
                    href={href}
                    tags={tags}
                    linkLabel={linkLabel}
                    imgSrc={imgSrc}
                  />
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {isSmall && (
        <>
          <header className="recipe-suggestions__header">
            <h2 className="recipe-suggestions__title recipe-suggestions__title--small">Try this delicious recipe
              to make your day</h2>
          </header>
          <div className="recipe-suggestions__body">
            <ul className="recipe-suggestions__list recipe-suggestions__list--small">
              {suggestedRecipes.slice(0,4).map((
                {
                  tags,
                  linkLabel,
                  imgSrc,
                  href,
                }) => (
                <li className='recipe-suggestions__item recipe-suggestions__item--small'>
                  <RecipeCard
                    href={href}
                    tags={tags}
                    linkLabel={linkLabel}
                    imgSrc={imgSrc}
                  />
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </section>
  )
}
