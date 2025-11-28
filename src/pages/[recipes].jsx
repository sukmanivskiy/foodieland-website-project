import { recipesList } from "@/data/recipes.js";
import RecipeCard from "@/components/RecipeCard/index.js";
import PagePagination from "@/sections/PagePagination/index.js";
import recipesPerPage from "@/utils/recipesPerPageLogic.js";
import ItemsList from "@/sections/ItemsList/index.js";
import SectionHeader from "@/sections/SectionHeader/index.js";
import SearchFormSection from "@/sections/SearchFormSection/index.js";

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


export default function RecipesPage(props) {
  const { pageRecipes, currentPage, totalPages } = props;

  return (
    <>
      <SectionHeader className = 'section container'/>
      <SearchFormSection className="container" />
      {/*<ItemsList recipes={pageRecipes} />*/}
      {/*<PagePagination  current={currentPage} total={totalPages} />*/}
    </>
  );
}
