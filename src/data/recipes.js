import tags from "@/data/tags.js";
import nameToLink from "@/utils/nameToLink.js";

export const recipesList = [
  {
    tags: tags(30,'Chicken'),
    linkLabel: 'Big and Juicy Wagyu Beef Cheeseburger',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-1.jpg',
  },
  {
    tags: tags(30,'Chicken'),
    linkLabel: 'Fresh Lime Roasted Salmon with Ginger Sauce',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-2.jpg',
  },
  {
    tags: tags(30,'Chicken'),
    linkLabel: 'Strawberry Oatmeal Pancake with Honey Syrup',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-3.jpg',
  },
  {
    tags: tags(30,'Chicken'),
    linkLabel: 'Fresh and Healthy Mixed Mayonnaise Salad',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-4.jpg',
  },
  {
    tags: tags(30,'Chicken'),
    linkLabel: 'Chicken Meatballs with Cream Cheese',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-5.jpg',
  },
  {
    tags: tags(30,'Chicken'),
    linkLabel: 'Fruity Pancake with Orange & Blueberry',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-6.jpg',
  },
  {
    tags: tags(30,'Chicken'),
    linkLabel: 'The Best Easy One Pot Chicken and Rice',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-7.jpg',
  },
  {
    tags: tags(30,'Chicken'),
    linkLabel: 'Mixed Tropical Fruit Salad with Superfood Boosts ',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-8.jpg',
  },
  {
    suggested: true,
    tags: tags(30,'Healthy'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-9.jpg',
  },
  {
    suggested: true,
    tags: tags(30,'Western'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-10.jpg',
  },
  {
    suggested: true,
    tags: tags(30,'Healthy'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-11.jpg',
  },
  {
    suggested: true,
    tags: tags(30,'Eastern'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-12.jpg',
  },
  {
    suggested: true,
    tags: tags(30,'Healthy'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-9.jpg',
  },
  {
    suggested: true,
    tags: tags(30,'Snack'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-13.jpg',
  },
  {
    suggested: true,
    tags: tags(30,'Seafood'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-14.jpg',
  },
  {
    suggested: true,
    tags: tags(30,'Japanese'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-15.jpg',
  },
  {
    suggested: true,
    tags: tags(30,'Healthy'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-9.jpg',
  },
  {
    suggested: true,
    tags: tags(30,'Western'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-10.jpg',
  },
  {
    suggested: true,
    tags: tags(30,'Healthy'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-11.jpg',
  },
  {
    suggested: true,
    tags: tags(30,'Eastern'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-12.jpg',
  },
  {
    suggested: true,
    tags: tags(30,'Healthy'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-9.jpg',
  },
  {
    suggested: true,
    tags: tags(30,'Snack'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-13.jpg',
  },
  {
    suggested: true,
    tags: tags(30,'Seafood'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-14.jpg',
  },
  {
    suggested: true,
    tags: tags(30,'Japanese'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-15.jpg',
  },
  {
    suggested: true,
    tags: tags(30,'Healthy'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-9.jpg',
  },
  {
    suggested: true,
    tags: tags(30,'Western'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-10.jpg',
  },
  {
    suggested: true,
    tags: tags(30,'Healthy'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-11.jpg',
  },
  {
    suggested: true,
    tags: tags(30,'Eastern'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-12.jpg',
  },
  {
    suggested: true,
    tags: tags(30,'Healthy'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-9.jpg',
  },
  {
    suggested: true,
    tags: tags(30,'Snack'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-13.jpg',
  },
  {
    suggested: true,
    tags: tags(30,'Seafood'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-14.jpg',
  },
  {
    suggested: true,
    tags: tags(30,'Japanese'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-15.jpg',
  },
].map((recipe) => {
  const id = crypto.randomUUID();

  return {
    ...recipe,
    id,
    href: `${nameToLink(recipe.linkLabel)}-${id.slice(0, 6)}`,
  };
})

export const suggestedRecipes = recipesList.filter((recipe) => {return recipe.suggested === true}).slice(0,8);