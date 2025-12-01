import './RecipeInfo.scss'
import clsx from 'clsx'
import {Image} from "minista";
import Nutrition from "@/components/Nutrition/index.js";

export default (props) => {
  const {
    className,
    imgSrc,
    description,
    nutritionList,
    nutritionDescription,

  } = props

  return (
    <section
      className = {clsx('recipe-info', className)}
    >
      <Image
        className='recipe-info__image'
        width={600}
        src={imgSrc}
      />
      <Nutrition
        className = 'recipe-info__nutrition'
        nutritionList={nutritionList}
        nutritionDescription={nutritionDescription}
      />
      <div className="recipe-info__description">
        <p>{description}</p>
      </div>

    </section>
  )
}
