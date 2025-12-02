import './Actions.scss'
import clsx from 'clsx'
import ActionButton from "@/components/ActionButton/index.js";

export default (props) => {
  const actions = [
    {title:'PRINT',iconName:'print'},
    {title:'SHARE',iconName:'share'},
  ]
  const {
    className,
  } = props

  return (
    <ul
      className = {clsx('actions', className)}
    >
      {actions.map(({title,iconName}) =>{
        return (
          <li className="actions__item">
            <ActionButton
              iconName={iconName}
            />
            <p className = "actions__title">{title}</p>
          </li>
        )
      })}
    </ul>
  )
}
