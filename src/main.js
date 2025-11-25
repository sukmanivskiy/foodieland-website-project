import OverlayMenu from "@/modules/OverlayMenu.js";
import SliderCollection from "@/modules/SliderCollection.js";
import ResolveSvgRendering from "@/constants/ResolveSvgRendering.js";

new OverlayMenu();
new SliderCollection();

ResolveSvgRendering();

const SlideItem = [
  {
    HeroCard: {
      imgSrc: '/src/assets/images/scroll.png',
      label: 'Hot Recipes',
    },
  },
]