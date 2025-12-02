import './ActionButton.scss'
import clsx from 'clsx'
import MyIcon from "@/components/MyIcon/index.js";

export default (props) => {
  const { className,title,iconName, extraAttrs } = props

  return (
    <button
      className={clsx('action-button', className)}
      type="button"
      aria-label={title}
      title={title}
      {...{[`data-js-${iconName}`]:'true'}}
      {...extraAttrs}
    >
      <MyIcon
        name={iconName}
      />
    </button>
  )
}
