import { recipesList } from "@/data/recipes.js";
import RecipeCard from "@/components/RecipeCard/index.js";
import PagePagination from "@/sections/PagePagination/index.js";
import recipesPerPage from "@/utils/recipesPerPageLogic.js";
import ItemsList from "@/sections/ItemsList/index.js";
import SectionHeader from "@/sections/SectionHeader/index.js";
import SearchFormSection from "@/sections/SearchFormSection/index.js";
import SubscriptionCTA from "@/sections/SubscriptionCTA/index.js";

export async function getStaticData() {
  return recipesPerPage(recipesList, 6, "recipes").map((page) => ({
    props: {
      pageRecipes: page.pageData,
      currentPage: page.currentPage,
      totalPages: page.totalPages,
    },
    paths: page.path,
  }));
}
export const metadata = {
  title: 'Recipes',
}


export default function RecipesPage(props) {
  const { pageRecipes, currentPage, totalPages } = props;

  return (
    <>
      <SectionHeader
        title='Delicious Recipes'
        className = 'section container'/>
      <SearchFormSection className="container" />
      <ItemsList
        className=" section container"
        recipes={pageRecipes} />
      <PagePagination
        className="container"
        current={currentPage}
        total={totalPages}
        path={'recipes'}
      />
      <SubscriptionCTA className='container'/>
    </>
  );
}
