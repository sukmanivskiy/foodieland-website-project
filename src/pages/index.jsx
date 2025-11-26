import Hero from '@/sections/Hero'
import Button from '@/components/Button'
import Field from '@/components/Field'
import Categories from "@/sections/Categories/index.js";
import Recipes from "@/sections/Recipes/index.js";
import CTA from "@/sections/CTA/index.js";
import InstagramFeed from "@/sections/InstagramFeed/index.js";

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Hero />
      <Categories />
      <Recipes />
      <CTA/>
      <InstagramFeed/>
    </>
  )
}
