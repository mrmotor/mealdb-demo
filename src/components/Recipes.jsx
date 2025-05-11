import React from "react";
import RecipeCard from "./RecipeCard";

function Recipes({ recipesList, addFavorites }) {
  return (
    <div className="d-flex flex-wrap justify-content-around gap-3 p-3">
      {
        // console.log(recipesList.length)
        recipesList ? (
          recipesList.map((recipe) => (
            <RecipeCard
              strMeal={recipe.strMeal}
              strCategory={recipe.strCategory}
              strArea={recipe.strArea}
              strMealThumb={recipe.strMealThumb}
              strTags={recipe.strTags}
              idMeal={recipe.idMeal}
              addFavorites={addFavorites}
            />
          ))
        ) : (
          <h3 className="m-auto text-center">Recipe not found</h3>
        )
      }
    </div>
  );
}

export default Recipes;
