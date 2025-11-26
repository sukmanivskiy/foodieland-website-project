import './Footer.scss'
import Logo from "@/components/Logo/index.js";
import menuItems from "@/data/menuItems.js";
import clsx from "clsx";
import footerMenuItems from "@/data/footerMenuItems.js";
import Soc1als from "@/components/Soc1als/Soc1als.jsx";

export default (props) => {
  const {url} =props;
  return (
    <footer className="footer section">
      <div className="footer__inner container">
        <header className="footer__header">
          <div className="footer__logo-container">
            <span className='visually-hidden'>Go to main page</span>
            <Logo className = 'footer__logo' />
            <div className="footer__description">
              <p>Lorem ipsum dolor sit amet, consectetuipisicing elit </p>
            </div>
          </div>
          <nav className="footer__navigation">
            <ul className="footer__menu-list">
              {footerMenuItems.map(({label, href}) => (
                <li className= 'footer__menu-item'>
                  <a
                    className= {clsx(
                      'footer__menu-link',
                      href === url && 'is-active')}
                    href = {href}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <div className="footer__body">
          <footer className="footer__copyright">
            © 2020 Flowbase. Powered by
            <a
              href = '/'
            > Webflow
            </a>
          </footer>
          <Soc1als className="footer__soc1als" />
        </div>
      </div>
    </footer>
  )
}
