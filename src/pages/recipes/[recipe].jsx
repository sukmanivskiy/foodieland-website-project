import {recipesList} from "@/data/recipes.js";

export async function getStaticData() {
  const apiUrl = "https://api.github.com/repos/qrac/minista/issues"
  const apiParamsQuery = "?state=all&creator=qrac&per_page=5"
  const response = await fetch(apiUrl + apiParamsQuery)
  return recipesList.map((item) => ({
    props: {...item},
    paths: { recipe: item.href },
  }));
}

export default function (props) {
  return (
    <div className="recipe-container">
      <h1>{props.linkLabel}</h1>
      <p>{props.id}</p>

      <h3>Ingredients:</h3>
      <a href="/recipes/">← Back to all recipes</a>
    </div>
  );
}