import recipes from "./recipes.js";

/* -----------------------------
   Get all cuisines (no duplicates)
------------------------------*/
export function getAllCuisines() {
  const cuisineSet = new Set();

  Object.values(recipes).forEach(recipe => {
    cuisineSet.add(recipe.typeOfCuisine);
  });

  return [...cuisineSet].sort();
}

/* -----------------------------
   Get recipes belonging to cuisine
------------------------------*/
export function getRecipesByCuisine(cuisine) {
  const results = [];

  Object.entries(recipes).forEach(([id, recipe]) => {
    if (recipe.typeOfCuisine.toLowerCase() === cuisine.toLowerCase()) {
      results.push({ id, recipe });
    }
  });

  return results;
}