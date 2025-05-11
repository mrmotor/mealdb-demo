import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function RecipeDetails({ recipesList }) {
  const params = useParams();
  const navigate = useNavigate();

  const recipeByMealId = (idMeal) => {
    let result = recipesList.filter((recipe) => recipe.idMeal === idMeal);
    return result[0];
  };

  const recipe = recipeByMealId(params.idMeal);

  let ingredientList = [];
  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`] && recipe[`strMeasure${i}`].trim()) {
      ingredientList.push(
        recipe[`strIngredient${i}`] + " - " + recipe[`strMeasure${i}`]
      );
    }
  }

  const instructionsList = recipe.strInstructions.split("\r\n");
  return (
    <div className="card justify-content-center my-5 p-5 mx-auto w-75">
      <img
        className="card-img w-50 m-auto"
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
      />
      <h3 className="card-header w-50 m-auto my-2">{recipe.strMeal}</h3>
      <div className="justify-content-center mx-auto">
        <div>
          <button
            className="btn btn-success"
            onClick={() => {
              navigate("/");
            }}
          >
            Go back
          </button>
        </div>
      </div>
      <p className="m-auto">Category: {recipe.strCategory}</p>
      <p className="m-auto">Region: {recipe.strArea}</p>
      <h3>Instructions</h3>
      <ul>
        {instructionsList.map((item, index) => (
          <li className="text-start m-0" key={index}>
            {item}
          </li>
        ))}
      </ul>
      <h3>Ingredients:</h3>
      <ul>
        {ingredientList.map((item, index) => (
          <li className="text-start m-0" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeDetails;
