import './ContactSection.scss'
import clsx from 'clsx'
import ContactForm from "@/components/ContactForm/index.js";
import {Image} from "minista";
import SubscriptionCTA from "@/sections/SubscriptionCTA/index.js";
import RecipeSuggestions from "@/sections/RecipeSuggestions/index.js";

export default (props) => {
  const {
    className,
  } = props

  return (
    <section
      className = {clsx('contact-section', className)}
    >
     <h1 className="contact-section__title">Contact us</h1>
      <div className="contact-section__body">
        <div className="contact-section__image-container">
          <Image
            className="contact-section__image"
            src='src/assets/images/contact-image.png'
            alt='chef image'
          />
        </div>
        <ContactForm/>
      </div>
    </section>
  )
}
