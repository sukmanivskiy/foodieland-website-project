import OverlayMenu from "@/modules/OverlayMenu.js";
import SliderCollection from "@/modules/SliderCollection.js";
import ResolveSvgRendering from "@/constants/ResolveSvgRendering.js";
import SelectCollection from "@/modules/CustomSelectCollection.js";
import {Print, Share} from "@/modules/PrintAndShareLogic.js";
import SearchPage from "@/modules/Search.js";
import CategoriesToggle from "@/modules/CategoriesToggle.js";

new OverlayMenu();
new SliderCollection();
new SelectCollection();
new Print('[data-js-print]');
new Share('[data-js-share]')
new SearchPage({ itemsPerPage: 6 });
new CategoriesToggle();

ResolveSvgRendering();

const SlideItem = [
  {
    HeroCard: {
      imgSrc: '/src/assets/images/scroll.png',
      label: 'Hot Recipes',
    },
  },
]