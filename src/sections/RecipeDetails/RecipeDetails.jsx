import './RecipeDetails.scss'
import clsx from 'clsx'
import Ingredients from "@/components/Article/index.js";
import Article from "@/components/Article/index.js";

export default (props) => {
  const {
    className,
    ingredients,
    article
  } = props

  return (
    <section
      className = {clsx('recipe-details', className)}
    >
      <h2 className="visually-hidden">recipe details</h2>

    </section>
  )
}
