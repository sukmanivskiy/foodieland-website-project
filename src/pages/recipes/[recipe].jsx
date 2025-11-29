import {recipesList} from "@/data/recipes.js";
import RecipeHeader from "@/sections/RecipeHeader/index.js";
import tags from "@/data/tags.js";

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
  } = props;
  return (
    <article className = "recipe">
      <RecipeHeader
        className="recipe__header container section"
        linkLabel={linkLabel}
        tags={tags}
        author={author}
      />


    </article>
  );
}