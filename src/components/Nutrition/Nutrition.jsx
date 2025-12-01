import './Nutrition.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    nutritionList,
    nutritionDescription,
  } = props

  return (
    <article
      className = {clsx('nutrition', className)}
    >
      <h2 className="nutrition__title h4">Nutrition Information</h2>
      <div className="nutrition__body">
        <ul className="nutrition__list">
          {nutritionList.map(({name, value}) => {
            return (
              <li className="nutrition__item">
                <span className = "nutrition__name">{name}</span>
                <span className = "nutrition__value">{value}</span>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="nutrition__description">
        <p>{nutritionDescription}</p>
      </div>
    </article>
  )
}
