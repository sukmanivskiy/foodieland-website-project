import {recipesList} from "@/data/recipes.js";
import recipesPerPageLogic from "@/utils/recipesPerPageLogic.js";
import SectionHeader from "@/sections/SectionHeader/SectionHeader.jsx";
import SearchFormSection
  from "@/sections/SearchFormSection/SearchFormSection.jsx";
import ItemsList from "@/sections/ItemsList/ItemsList.jsx";
import PagePagination from "@/sections/PagePagination/PagePagination.jsx";
import SubscriptionCTA from "@/sections/SubscriptionCTA/SubscriptionCTA.jsx";
import Categories from "@/sections/Categories/index.js";


export async function getStaticData() {
  const pages = [];

  const allCategories = Array.from(
    new Set(recipesList.flatMap(r => r.categories))
  );

  allCategories.forEach((category) => {
    const filtered = recipesList.filter(r =>
      r.categories.includes(category)
    );

    const paginated = recipesPerPageLogic(filtered, 6, `${category}`);

    paginated.forEach((page) => {
      pages.push({
        props: {
          category,
          pageRecipes: page.pageData,
          currentPage: page.currentPage,
          totalPages: page.totalPages,
        },
        paths: {
          category: `${category}/${page.currentPage}`,
        },
      });
    });
  });
  return pages;
}

export const metadata = {
  title: "Categories",
};

export default function RecipesPage(props) {
  const { pageRecipes, currentPage, totalPages,category } = props;
  return (
    <>
      <SectionHeader
        title={category.charAt(0).toUpperCase()+ category.slice(1)}
        className = 'section container'/>
      <SearchFormSection className="container" />
      <Categories/>
      <ItemsList
        className=" section container"
        recipes={pageRecipes}
        href='recipes'
      />
      <PagePagination
        className="container"
        current={currentPage}
        total={totalPages}
        path= {`recipes/${category}`}
      />
      <SubscriptionCTA className='container'/>
    </>
  );
}