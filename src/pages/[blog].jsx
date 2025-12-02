import blogs from "@/data/blogs.js";
import PagePagination from "@/sections/PagePagination/index.js";
import recipesPerPage from "@/utils/recipesPerPageLogic.js";
import ItemsList from "@/sections/ItemsList/index.js";
import SectionHeader from "@/sections/SectionHeader/index.js";
import SearchFormSection from "@/sections/SearchFormSection/index.js";
import SubscriptionCTA from "@/sections/SubscriptionCTA/index.js";
import Aside from "@/components/Aside/index.js";
import {randomRecipes} from "@/data/recipes.js";
import './blog/blog.scss'

export async function getStaticData() {
  return recipesPerPage(blogs, 6, "blog").map((page) => ({
    props: {
      pageRecipes: page.pageData,
      currentPage: page.currentPage,
      totalPages: page.totalPages,
    },
    paths: page.path,
  }));
}


export default function RecipesPage(props) {
  const { pageRecipes, currentPage, totalPages } = props;

  return (
    <div className='blog container'>
      <SectionHeader className = 'blog__header section '/>
      <SearchFormSection className="blog__search " />
      <ItemsList
        className=" blog__list section "
        recipes={pageRecipes} />
      <Aside
        className="blog__aside hidden-laptop-s"
        recipes = {randomRecipes}
        title='Tasty Recipes'
      />
      <PagePagination
        className="blog__pagination "
        current={currentPage}
        total={totalPages}
        path = {'blog'}
      />
      <SubscriptionCTA
      className="blog__subscriptionCTA"/>
    </div>
  );
}
