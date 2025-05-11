import Dexie from "dexie";

export const db = new Dexie("MealDB-Demo");
db.version(1).stores({
  recipesFavorites: "idMeal, strMeal, strMealThumb, date", // Primary key and indexed props
});
