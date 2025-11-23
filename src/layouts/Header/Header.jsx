import './Header.scss'
import Logo from "@/components/Logo/index.js";
import clsx from 'clsx'
import Soc1als from "@/components/Soc1als/index.js";
import BurgerButton from "@/components/BurgerButton/index.js";
import menuItems from "@/data/menuItems.js";

export default (props) => {
  const {url} = props;
  return (
    <header className="header" data-js-overlay=''>
      <div className="header__inner container">
        <Logo className = 'header__logo' />
        <nav className='header__menu' data-js-overlay-menu=''>
          <ul className="header__menu-list">
            {menuItems.map(({label, href}) => (
              <li className= 'header__menu-item'>
                <a
                  className= {clsx(
                    'header__menu-link',
                    href === url && 'is-active')}
                  href = {href}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Soc1als className="header__soc1als" />
        <BurgerButton
          className="header__burger-button visible-mobile"
          extraAttrs={{
            'data-js-overlay-burger': ''
          }}
        />
      </div>
    </header>
  )
}
