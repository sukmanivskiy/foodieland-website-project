import './RecipeSuggestions.scss'
import clsx from 'clsx'
import {suggestedRecipes} from "@/data/recipes.js";
import RecipeCard from "@/components/RecipeCard/RecipeCard.jsx";

export default (props) => {
  const {
    className,
  } = props

  return (
    <section
      className = {clsx('recipe-suggestions section container', className)}>
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
            }) => (
            <li className='recipe-suggestions__item'>
              <RecipeCard
                tags={tags}
                linkLabel={linkLabel}
                imgSrc={imgSrc}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
