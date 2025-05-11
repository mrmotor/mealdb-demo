import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Recipes from "./components/Recipes";
import RecipeDetails from "./components/RecipeDetails";
import Favorites from "./components/Favorites";
import { db } from "./db";

import "./App.css";

function App() {
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [favoritesList, setFavoritesList] = useState([]);
  const apiString = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const [searchString, setSearchString] = useState("");
  const [recipesList, setRecipesList] = useState([]);

  const getFavoritesCount = async () => {
    await db.recipesFavorites.count().then((count) => {
      setFavoritesCount(count);
    });
  };

  const getFavorites = async () => {
    await db.recipesFavorites.toArray((favs) => {
      setFavoritesList(favs);
      getFavoritesCount();
    });
  };

  const addFavorites = async (
    idMealValue,
    strMealValue,
    strMealThumbValue,
    dateValue
  ) => {
    await db.recipesFavorites.add({
      idMeal: idMealValue,
      strMeal: strMealValue,
      strMealThumb: strMealThumbValue,
      date: dateValue,
    });
    getFavorites();
  };

  const delFavorites = async (idMealValue) => {
    await db.recipesFavorites.delete(idMealValue);
    getFavorites();
  };

  const fetchRecipes = async () => {
    let recipesRequest = await fetch(`${apiString}${searchString}`);
    let recipesResponse = await recipesRequest.json();
    setRecipesList(recipesResponse.meals);
  };

  useEffect(() => {
    fetchRecipes();
  }, [searchString]);

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Menu props={{ searchString, setSearchString, favoritesCount }} />
        <Routes>
          <Route
            path="/"
            element={
              <Recipes recipesList={recipesList} addFavorites={addFavorites} />
            }
          />
          <Route
            path="/details/:idMeal"
            element={<RecipeDetails recipesList={recipesList} />}
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favoritesList={favoritesList}
                delFavorites={delFavorites}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
