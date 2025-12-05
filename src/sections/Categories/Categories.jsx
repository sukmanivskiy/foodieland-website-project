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
        <Button
          className='categories__button'
          extraAttrs={{
            'data-js-categories-button': '',
          }}
        >
          View All Categories
        </Button>
      </header>
      <div className = "categories__body">
        <ul className="categories__list" data-js-categories=''>
          {categories.map((item) => (
            <li className="categories__list-item" data-js-categories-item=''>
              <CategoryCard
                category={item.category}
                imgSrc= {item.imgSrc}
                title = {item.title}
                bgColor = {item.bgColor}
                shadowColor = {item.shadowColor}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
