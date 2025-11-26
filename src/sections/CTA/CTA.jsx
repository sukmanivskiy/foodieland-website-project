import './CTA.scss'
import clsx from 'clsx'
import Button from "@/components/Button/index.js";
import {Image} from "minista";

export default () => {
  return (
    <section
      className = 'cta container section'
    >
      <header className="cta__header">
        <h2 className="cta__title">Everyone can be a <br className='hidden-mobile'/>chef in their own kitchen</h2>
        <div className="cta__description">
          <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
        </div>
        <Button
          className='cta__button'
          href="/">Learn more</Button>
      </header>
      <div className="cta__body">
        <Image
          src='src/assets/images/cta.png'
          className="cta__image"
          width={660}
        />
      </div>
    </section>
  )
}
