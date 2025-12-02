import './SubscriptionCTA.scss'
import clsx from 'clsx'
import Button from "@/components/Button/index.js";

export default (props) => {
  const {
    className,
  } = props

  return (
    <section
      className = {clsx('subscription-cta section', className)}
    >
     <div className="subscription-cta__inner">
       <header className="subscription-cta__header">
         <h2 className="subscription-cta__title">Deliciousness to your inbox</h2>
         <div className="subscription-cta__description">
           <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
         </div>
       </header>
       <div className = "subscription-cta__body">
         <form
           className = "subscription-cta__form"
         >
           <div className ="subscription-cta__form-container">
             <label htmlFor = "email" className='visually-hidden'>Your email address</label>
             <input
               className = "subscription-cta__input"
               type = "email"
               id = "email"
               name = "email"
               placeholder = "Your email address..."
               autoComplete = "on"
               required
             />
           </div>
           <Button
             type = "submit"
             className = "subscription-cta__button"
           >Subscribe
           </Button>
         </form>
       </div>
     </div>
    </section>
  )
}
