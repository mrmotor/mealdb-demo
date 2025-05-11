import React from "react";
import { getDate } from "./Utils";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Favorites({ favoritesList, delFavorites }) {
  const navigate = useNavigate();
  const [filterString, setFilterString] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const fillterRecipes = () => {
    if (favoritesList.length > 0) {
      setFilteredRecipes(
        favoritesList.filter((recipe) => {
          if (recipe.strMeal.toLowerCase().includes(filterString)) {
            return recipe;
          }
        })
      );
    } else {
      setFilteredRecipes([]);
    }
  };

  useEffect(() => {
    fillterRecipes();
  }, [filterString, favoritesList]);

  return (
    <div className="container d-grid gap-3">
      <h2 className="text-center">Favorites</h2>
      <div className="m-auto">
        <a class="btn btn-primary" onClick={() => navigate("/")}>
          Go back
        </a>
      </div>
      <div className="input-group w-50 mx-auto">
        {/* Search input */}
        <input
          type="text"
          className="form-control"
          value={filterString}
          onChange={(e) => {
            setFilterString(e.target.value);
          }}
        />
        {/* Clear input button */}
        <div className="input-group-append">
          <span
            className="input-group-text"
            onClick={() => {
              setFilterString("");
            }}
          >
            X
          </span>
        </div>
      </div>
      {/* Table for output */}
      {filteredRecipes.length > 0 ? (
        <table className="table w-75 mx-auto">
          <thead className="tabel">
            <tr className="align-middle">
              <td>Id</td>
              <td>Title</td>
              <td>Image</td>
              <td>Liked time</td>
              <td>Remove</td>
            </tr>
          </thead>
          <tbody>
            {/* Output rows of table */}
            {filteredRecipes.map((recipe) => (
              <tr className="align-middle">
                <td>{recipe.idMeal}</td>
                <td>{recipe.strMeal}</td>
                <td>
                  <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    width="100"
                  />
                </td>
                <td>{getDate(recipe.date)}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      delFavorites(recipe.idMeal);
                    }}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h3 className="m-auto text-center">No recipes</h3>
      )}
    </div>
  );
}

export default Favorites;
