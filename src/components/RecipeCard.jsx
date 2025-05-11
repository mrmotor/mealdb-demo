import { useNavigate } from "react-router-dom";
import React from "react";

function RecipeCard({
  strMeal,
  strCategory,
  strArea,
  strMealThumb,
  strTags,
  idMeal,
  addFavorites,
}) {
  const navigate = useNavigate();
  const handleDetailsClick = (idMeal) => {
    navigate(`/details/${idMeal}`);
  };

  return (
    <div class="card">
      <img src={`${strMealThumb}`} class="card-img-top" alt={`${strMeal}`} />
      <div class="card-body">
        <h5 class="card-title">{strMeal}</h5>
        <p class="card-text">Category: {strCategory}</p>
        <p class="card-text">Area: {strArea}</p>
        {strTags && <p class="card-text">Tags: {strTags}</p>}
        <a class="btn btn-primary" onClick={() => handleDetailsClick(idMeal)}>
          Details
        </a>
        <a
          class="btn btn-success"
          onClick={() =>
            addFavorites(idMeal, strMeal, strMealThumb, Date.now())
          }
        >
          Save
        </a>
      </div>
    </div>
  );
}

export default RecipeCard;
