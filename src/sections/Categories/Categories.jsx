import './Categories.scss'
import clsx from 'clsx'
import Button from "@/components/Button/index.js";
import CategoryCard from "@/components/CategoryButton/index.js";
import categories from "@/data/categories.js";

export default () => {

  return (
    <section
      className ='categories container section'
    >
      <header className = "categories__header">
        <h2 className="categories__title">Categories</h2>
        <Button className='categories__button'>
          View All Categories
        </Button>
      </header>
      <div className = "categories__body">
        <ul className="categories__list">
          {categories.slice(0,6).map((recipe) => (
            <li className="categories__list-item">
              <CategoryCard
                imgSrc= {recipe.imgSrc}
                title = {recipe.title}
                bgColor = {recipe.bgColor}
                shadowColor = {recipe.shadowColor}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
