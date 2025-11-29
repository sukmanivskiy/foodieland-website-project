import './Tag.scss'
import clsx from 'clsx'
import MyIcon from "@/components/MyIcon/index.js";

export default (props) => {
  const {
    className,
    iconName,
    label,
  } = props

  return (
    <div
      className = {clsx('tag', className)}
    >
      <MyIcon
        className='tag__icon'
        name={iconName} hasFill
      />
      <span className='tag__label'>{label}</span>
    </div>
  )
}
