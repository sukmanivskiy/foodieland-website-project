import OverlayMenu from "@/modules/OverlayMenu.js";
import SliderCollection from "@/modules/SliderCollection.js";

fetch('/assets/images/icons.svg')
  .then(r => r.text())
  .then(svg => {
    const div = document.createElement('div')
    div.style.display = 'none'
    div.innerHTML = svg
    document.body.prepend(div)
  initSite()
  })
 function initSite() {
   new OverlayMenu();
   new SliderCollection();

   const SlideItem = [
     {
       HeroCard: {
         imgSrc: '/src/assets/images/scroll.png',
         label: 'Hot Recipes',
       },
     },
   ]
 }
