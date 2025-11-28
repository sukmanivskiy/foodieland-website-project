import './ItemsList.scss'
import clsx from 'clsx'
import PagePagination from "@/sections/PagePagination/PagePagination.jsx";
import RecipeCard from "@/components/RecipeCard/index.js";

export default (props) => {
  const {
    className,
    recipes,
  } = props

  return (
    <div
      className = {clsx('items-list', className)}
    >
      <ul className="items-list__list">
        {recipes.map((item) => (
          <RecipeCard key={item.id} {...item} />
        ))}
      </ul>
    </div>
  )
}
