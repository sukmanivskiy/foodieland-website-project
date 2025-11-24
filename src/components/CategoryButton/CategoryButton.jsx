import './CategoryButton.scss'
import clsx from 'clsx'
import {Image} from "minista";
import Button from "@/components/Button/index.js";

export default (props) => {
  const {
    className,
    imgSrc,
    title,
    bgColor,
    shadowColor,
  } = props

  return (
    <button
      className = {clsx('category-button', className)}
      style={{
        background: `linear-gradient(180deg, rgba(${bgColor} 0) 0%, rgba(${bgColor} 0.1) 100%)`,
        }}
    >
      <Image
        className = {clsx('category-button__image', className)}
        src={imgSrc} alt=""
        style={{
          filter: `drop-shadow(20px 20px 10px rgba(${shadowColor} 0.2))`,
        }}
      />
      <h3
        className="category-button__title"
      >
        {title}
      </h3>
    </button>
  )
}
