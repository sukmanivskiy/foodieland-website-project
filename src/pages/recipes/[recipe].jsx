import './recipe.scss'
import {recipesList} from "@/data/recipes.js";
import RecipeHeader from "@/sections/RecipeHeader/index.js";
import tags from "@/data/tags.js";
import RecipeInfo from "@/sections/RecipeInfo/index.js";
import RecipeDetails from "@/sections/RecipeDetails/index.js";
import Article from "@/components/Article/Article.jsx";

export async function getStaticData() {
  return recipesList.map((item) => ({
    props: {...item},
    paths: { recipe: item.href },
  }));
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


    </article>
  );
}