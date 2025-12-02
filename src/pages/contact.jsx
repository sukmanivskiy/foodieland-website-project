import Button from "@/components/Button/index.js";
import ContactForm from "@/components/ContactForm/index.js";
import ContactSection from "@/sections/ContactSection/index.js";
import SubscriptionCTA from "@/sections/SubscriptionCTA/index.js";
import RecipeSuggestions from "@/sections/RecipeSuggestions/index.js";

export const metadata = {
  title: 'Contact',
}

export default () => {
  return (
    <>
      <ContactSection
      className="section container"
      />
      <SubscriptionCTA
      className="container"/>
      <RecipeSuggestions
      isSmall
      />

    </>
  )
}