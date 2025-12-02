import './recipe.scss'
import {recipesList,randomRecipes} from "@/data/recipes.js";
import RecipeHeader from "@/sections/RecipeHeader/index.js";
import RecipeInfo from "@/sections/RecipeInfo/index.js";
import Article from "@/components/Article/Article.jsx";
import Aside from "@/components/Aside/index.js";
import SubscriptionCTA from "@/sections/SubscriptionCTA/index.js";
import RecipeSuggestions from "@/sections/RecipeSuggestions/index.js";

export async function getStaticData() {
  return recipesList.map((item) => ({
    props: {...item},
    paths: { recipe: item.href },
  }));
}

export const metadata = {
  title: 'Recipe',
}

export default function (props) {
  const {
    linkLabel,
    tags,
    author,
    imgSrc,
    fullDescription,
    nutritionList,
    nutritionDescription,
    ingredients,
    article,
  } = props;
  return (
    <article className = "recipe container">
      <RecipeHeader
        className="recipe__header section"
        linkLabel={linkLabel}
        tags={tags}
        author={author}
      />
      <RecipeInfo
        className = "recipe__info section"
        imgSrc={imgSrc}
        description={fullDescription}
        nutritionList={nutritionList}
        nutritionDescription={nutritionDescription}
      />
      <Article
        className="recipe__ingredients"
        ingredients={ingredients} />
      <Article
        className="recipe__details section "
        article={article}
        isCheck
      />
      <Aside
        className="recipe__aside hidden-tablet"
        recipes = {randomRecipes}
        title='Other Recipes'
      />
      <SubscriptionCTA
      className = "recipe__subscription-cta" />
      <RecipeSuggestions
      className = "recipe__suggestions"
      isSmall
      />
    </article>
  );
}