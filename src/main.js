import OverlayMenu from "@/modules/OverlayMenu.js";
import SliderCollection from "@/modules/SliderCollection.js";
import ResolveSvgRendering from "@/constants/ResolveSvgRendering.js";
import SelectCollection from "@/modules/CustomSelectCollection.js";

new OverlayMenu();
new SliderCollection();
new SelectCollection();

ResolveSvgRendering();

const SlideItem = [
  {
    HeroCard: {
      imgSrc: '/src/assets/images/scroll.png',
      label: 'Hot Recipes',
    },
  },
]