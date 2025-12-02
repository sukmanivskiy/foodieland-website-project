import './Aside.scss'
import clsx from 'clsx'
import SideCard from "@/components/SideCard/index.js";
import Aside from "@/components/Aside/Aside.jsx";
import Reminder from "@/components/Reminder/index.js";

export default (props) => {
  const {
    className,
    recipes,
    title,
  } = props

  return (
    <aside
      className = {clsx('aside', className)}
    >
      <h2 className="aside__title">{title}</h2>
      <ul className = "aside__list">
        {recipes.map((recipe, index) => (
          <li className = "aside__item">
            <SideCard
              key = {index}
              linkLabel = {recipe.linkLabel}
              imgSrc = {recipe.imgSrc}
              author = {recipe.author}
            />
          </li>
        ))}
      </ul>

      <Reminder
        className="aside__reminder"
        href= '/'
        ariaLabel = 'go to foodieland.com'
        imgSrc = 'src/assets/images/reminder.jpg'
        width = {400}
        height = {434}
      />
    </aside>
  )
}
