import tags from "../data/tags.js";
import authors from "../data/authors.js";
import nameToLink from "../utils/nameToLink.js";
import hashSum from 'hash-sum'
import shuffle from "../utils/shuffle.js";

export const recipesList = [
  {
    tags: tags(15, 15, 'Chicken'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),
    linkLabel: 'Big and Juicy Wagyu Beef Cheeseburger',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-1.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
     paragraphs:[
        {
        title: 'Lorem ipsum dolor sit amet',
       description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
      },
  },
  {
    tags: tags(15, 15, 'Chicken'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),
    linkLabel: 'Fresh Lime Roasted Salmon with Ginger Sauce',
    imgSrc: 'src/assets/images/content-image.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
     paragraphs:[
        {
        title: 'Lorem ipsum dolor sit amet',
       description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
      },
  },
  {
    tags: tags(15, 15, 'Chicken'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),

    linkLabel: 'Strawberry Oatmeal Pancake with Honey Syrup',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-3.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
     paragraphs:[
        {
        title: 'Lorem ipsum dolor sit amet',
       description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
      },
  },
  {
    tags: tags(15, 15, 'Chicken'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),
    linkLabel: 'Fresh and Healthy Mixed Mayonnaise Salad',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-4.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
     paragraphs:[
        {
        title: 'Lorem ipsum dolor sit amet',
       description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
      },
  },
  {
    tags: tags(15, 15, 'Chicken'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),
    linkLabel: 'Chicken Meatballs with Cream Cheese',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-5.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
     paragraphs:[
        {
        title: 'Lorem ipsum dolor sit amet',
       description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
      },
  },
  {
    tags: tags(15, 15, 'Chicken'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),
    linkLabel: 'Fruity Pancake with Orange & Blueberry',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-6.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
     paragraphs:[
        {
        title: 'Lorem ipsum dolor sit amet',
       description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
      },
  },
  {
    tags: tags(15, 15, 'Chicken'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),
    linkLabel: 'The Best Easy One Pot Chicken and Rice',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-7.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
     paragraphs:[
        {
        title: 'Lorem ipsum dolor sit amet',
       description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
      },
  },
  {
    tags: tags(15, 15, 'Chicken'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),
    linkLabel: 'Mixed Tropical Fruit Salad with Superfood Boosts ',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-8.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
     paragraphs:[
        {
        title: 'Lorem ipsum dolor sit amet',
       description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
      },
  },
  {
    suggested: true,
    tags: tags(15, 15, 'Healthy'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-9.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
     paragraphs:[
        {
        title: 'Lorem ipsum dolor sit amet',
       description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
      },
  },
  {
    suggested: true,
    tags: tags(15, 15, 'Western'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-10.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
     paragraphs:[
        {
        title: 'Lorem ipsum dolor sit amet',
       description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
      },
  },
  {
    suggested: true,
    tags: tags(15, 15, 'Healthy'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-11.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
     paragraphs:[
        {
        title: 'Lorem ipsum dolor sit amet',
       description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
      },
  },
  {
    suggested: true,
    tags: tags(15, 15, 'Eastern'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-12.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
     paragraphs:[
        {
        title: 'Lorem ipsum dolor sit amet',
       description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
      },
  },
  {
    suggested: true,
    tags: tags(15, 15, 'Healthy'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-9.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
     paragraphs:[
        {
        title: 'Lorem ipsum dolor sit amet',
       description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
      },
  },
  {
    suggested: true,
    tags: tags(15, 15, 'Snack'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-13.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
     paragraphs:[
        {
        title: 'Lorem ipsum dolor sit amet',
       description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
      },
  },
  {
    suggested: true,
    tags: tags(15, 15, 'Seafood'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-14.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
     paragraphs:[
        {
        title: 'Lorem ipsum dolor sit amet',
       description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
      },
  },
  {
    suggested: true,
    tags: tags(15, 15, 'Japanese'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-15.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
     paragraphs:[
        {
        title: 'Lorem ipsum dolor sit amet',
       description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
      },
  },
  {
    suggested: true,
    tags: tags(15, 15, 'Healthy'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-9.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
     paragraphs:[
        {
        title: 'Lorem ipsum dolor sit amet',
       description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
      },
  },
  {
    suggested: true,
    tags: tags(15, 15, 'Western'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-10.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
     paragraphs:[
        {
        title: 'Lorem ipsum dolor sit amet',
       description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
      },
  },
  {
    suggested: true,
    tags: tags(15, 15, 'Healthy'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-11.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
      paragraphs:[
        {
        title: 'Lorem ipsum dolor sit amet',
       description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
    },
  },
  {
    suggested: true,
    tags: tags(15, 15, 'Eastern'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-12.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
     paragraphs:[
        {
        title: 'Lorem ipsum dolor sit amet',
       description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
      },
  },
  {
    suggested: true,
    tags: tags(15, 15, 'Healthy'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-9.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
     paragraphs:[
        {
        title: 'Lorem ipsum dolor sit amet',
       description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
      },
  },


  {
    suggested: true,
    tags: tags(15, 15, 'Snack'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-13.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
     paragraphs:[
        {
        title: 'Lorem ipsum dolor sit amet',
       description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
      },
  },
  {
    suggested: true,
    tags: tags(15, 15, 'Seafood'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-14.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
     paragraphs:[
        {
        title: 'Lorem ipsum dolor sit amet',
       description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
      },
  },
  {
    suggested: true,
    tags: tags(15, 15, 'Japanese'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-15.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
     paragraphs:[
        {
        title: 'Lorem ipsum dolor sit amet',
       description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
      },
  },
  {
    suggested: true,
    tags: tags(15, 15, 'Healthy'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-9.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
     paragraphs:[
        {
        title: 'Lorem ipsum dolor sit amet',
       description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
      },
  },
  {
    suggested: true,
    tags: tags(15, 15, 'Western'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-10.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
     paragraphs:[
        {
        title: 'Lorem ipsum dolor sit amet',
       description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
      },
  },
  {
    suggested: true,
    tags: tags(15, 15, 'Healthy'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-11.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
     paragraphs:[
        {
        title: 'Lorem ipsum dolor sit amet',
       description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
      },
  },
  {
    suggested: true,
    tags: tags(15, 15, 'Eastern'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-12.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
     paragraphs:[
        {
        title: 'Lorem ipsum dolor sit amet',
       description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
      },
  },
  {
    suggested: true,
    tags: tags(15, 15, 'Healthy'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-9.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
     paragraphs:[
        {
        title: 'Lorem ipsum dolor sit amet',
       description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
      },
  },
  {
    suggested: true,
    tags: tags(15, 15, 'Snack'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-13.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
     paragraphs:[
        {
        title: 'Lorem ipsum dolor sit amet',
       description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
      },
  },
  {
    suggested: true,
    tags: tags(15, 15, 'Seafood'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-14.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
     paragraphs:[
        {
        title: 'Lorem ipsum dolor sit amet',
       description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
      },
  },
  {
    suggested: true,
    tags: tags(15, 15, 'Japanese'),
    description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ',
    author: authors('John Smith'),
    linkLabel: 'The Creamiest Creamy Chicken and Bacon Pasta',
    imgSrc: 'src/assets/images/recipes-images/recipe-image-15.jpg',
    nutritionList: [
      {
        name: 'Calories',
        value: '219.9 kcal',
      },
      {
        name: 'Total Fat',
        value: '10.7 g',
      },
      {
        name: 'Protein',
        value: '7.9 g',
      },
      {
        name: 'Carbohydrate',
        value: '22.3 g',
      },
      {
        name: 'Cholesterol',
        value: '37.4 mg',
      },
    ],
    type:'recipes',
fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    nutritionDescription: 'adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    ingredients: {
      title:'Ingredients',
      lists: [
        {
          title: 'For main dish',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
        {
               title: 'For the sause',
          details: [
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
            'Lorem ipsum dolor sit amet',
          ],
        },
      ],
    },
    article:{
      title: 'Directions',
     paragraphs:[
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          imgSrc: 'src/assets/images/content-image.jpg',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
      ],
      },
  },
].map((recipe, index) => {
  const id = hashSum(recipe.linkLabel + index);

  return {
    ...recipe,
    id,
    href: `${nameToLink(recipe.linkLabel)}-${id}`,
  };
})

export const suggestedRecipes = recipesList.filter((recipe) => {
  return recipe.suggested === true
}).slice(0, 8);

export const randomRecipes = shuffle(recipesList).slice(0, 3);