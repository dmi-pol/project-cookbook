import React, { useEffect, useState } from "react";

import axiosInstance from "../../axiosInstance";

import CatForm from "../components/createCatForm";
import Recipe from "../components/recipeModul";
import RecipesForm from "../components/createRecipeForm";

function RecipesPage({ user }) {

 
  const [recipes, setRecipes] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  
  

  async function loadRecipes() {
    try {
      const response = await axiosInstance.get("/recipes");
      if (response.status === 200) {
        
        setRecipes(response.data.recipes);
      }
    } catch (error) {
      console.log("Error", error.message);
    }
  }


  async function sortHandler() {
    try {
      setRecipes((prev) =>
        prev.sort((a, b) => b.readyInMinutes - a.readyInMinutes)
      );
      setIsSorted(true);
      if (isSorted) {
        setRecipes((prev) =>
          prev.sort((a, b) => a.readyInMinutes - b.readyInMinutes)
        );
        setIsSorted(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    loadRecipes();
  }, []);

  return (
    <div>
    <div id="buttonsMainPage">
      <RecipesForm recipes={recipes} user={user} setRecipes={setRecipes}/>
      <button id="sortButton" type="submit" onClick={sortHandler}>
        ВРЕМЯ ПРИГОТОВЛЕНИЯ ⬆
      </button>
      </div>
      <div id="recipesMainPage">
        {recipes.map((recipe) => (
          <Recipe recipe={recipe} user={user} setRecipes={setRecipes} key={recipe.id} />
        ))}
      </div>
    </div>
  );
}
export default RecipesPage;
