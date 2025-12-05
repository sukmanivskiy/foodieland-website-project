import {recipesList} from "../data/recipes.js";
import blogs from "../data/blogs.js";
import { writeFileSync } from "fs";
import { resolve } from "path";

const outputPath = resolve("public/data.json");

const combined = [...recipesList,...blogs];

writeFileSync(
  outputPath,
  JSON.stringify(combined, null, 2),
  "utf-8"
);
