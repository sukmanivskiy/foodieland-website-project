import {recipesList} from "../data/recipes.js";
import blogs from "../data/blogs.js";
import { writeFileSync } from "fs";
import { resolve } from "path";

const outputPath = resolve("public/data.json");

// об’єднання даних у один об’єкт
const combined = [...recipesList,...blogs];

// запис у JSON
writeFileSync(
  outputPath,
  JSON.stringify(combined, null, 2),
  "utf-8"
);

console.log("✔ data.json generated");
