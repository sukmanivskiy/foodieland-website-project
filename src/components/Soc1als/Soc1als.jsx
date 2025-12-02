import './Soc1als.scss'
import clsx from 'clsx'
import Icon from "@/components/MyIcon/index.js";

export default (props) => {
  const {
    className,
    isColumn,
  } = props;

  const links = [
    {
      label: 'Facebook',
      icon: 'facebook',
    },
    {
      label: 'Twitter',
      icon: 'twitter',
    },
    {
      label: 'Instagram',
      icon: 'instagram',
    },
  ]

  return (
    <div
      className = {clsx('soc1als',isColumn && 'soc1als--column', className)}
    >
      {isColumn && (
        <p className = 'soc1als__description'>SHARE THIS ON:</p>
        )}
    <ul className={clsx('soc1als__list', isColumn && 'soc1als__list--column')}>
      {links.map(({label, icon }) => (
        <li className="soc1als__item">
          <a
            className = "soc1als__link"
            href = "/"
            title={label}
          >
            <span className="visually-hidden">{label}</span>
           <Icon name={icon} hasFill/>
          </a>
        </li>
      ))}
    </ul>
    </div>
  )
}
