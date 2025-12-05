import './Recipes.scss'
import clsx from 'clsx'
import RecipeCard from "@/components/RecipeCard/index.js";
import Reminder from "@/components/Reminder/index.js";
import {recipesList} from "@/data/recipes.js";

export default () => {

  return (
    <section
      className ='recipes container section'
    >
      <header className = "recipes__header">
        <h2 className="recipes__title">Simple and tasty recipes</h2>
        <div className="recipes__description">
          <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        </div>
      </header>
      <div className = "recipes__body">
        <ul className="recipes__list">
          {recipesList.slice(0,8).map((
            {
              tags,
              linkLabel,
              imgSrc,
              href,
            }) => (
              <li className="recipes__item">
                <RecipeCard
                  href={href}
                  tags={tags}
                  linkLabel={linkLabel}
                  imgSrc={imgSrc}
                />
              </li>
          ))}
          <li className="recipes__reminder hidden-tablet">
            <Reminder
              href= '/'
              ariaLabel = 'go to foodieland.com'
              imgSrc = 'src/assets/images/reminder.jpg'
              width = {400}
              height = {434}
            />
          </li>
        </ul>

      </div>
    </section>
  )
}
