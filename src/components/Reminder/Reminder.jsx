import './Reminder.scss'
import clsx from 'clsx'
import {Image} from "minista";

export default (props) => {
  const {
    className,
    href,
    ariaLabel,
    imgSrc,
    width,
    height,
  } = props

  return (
    <a
      className={clsx('reminder', className)}
      href = {href}
      aria-label= {ariaLabel}
    >
      <Image
        src= {imgSrc}
        width={width}
        height={height}
        className = {clsx('reminder__image', className)}
      />
    </a>
  )
}
