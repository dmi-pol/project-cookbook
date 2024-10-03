import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../axiosInstance";

function Recipe({ recipe, setRecipes }) {
  const [isShow, setIsShow] = useState(false);
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");

  async function deleteHeandler(id) {
    const response = await axiosInstance.delete(`/recipes/${recipe.id}`);
  
    
    if (response.status === 200) {
        setRecipes((prev) => prev.filter((el) => el.id !== id));
    }
  }

  async function updateHeandler(e) {
    e.preventDefault();
    const response = await axiosInstance.put(`/cats/${recipe.id}`, {
      name,
      breed,
    });
    console.log(response);
    if (response.status === 200) {
        setRecipes((prev) =>
        prev.map((el) =>
          el.id === response.data.recipe.id
            ? response.data.recipe
            : el
        )
      );
      setIsShow(false);
    }
  }
  return (
    <div id="recipeCard">
      <Link to={`/cats/${recipe.id}`}>
        <h3>{recipe.title}</h3>
      </Link>
      <img src={recipe.img} alt="" />
      <p id="serv">🍽 Количесво порций: {recipe.servings}</p>
      <p id="min">🕗  Время приготовления: {recipe.readyInMinutes}</p>
      <button type="button" onClick={() => deleteHeandler(recipe.id)}>
        Delete cat
      </button>
      <button type="button" onClick={() => setIsShow((prev) => !prev)}>
        Update cat
      </button>
      {isShow && (
        <form onSubmit={updateHeandler}>
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Breed
            <input
              type="text"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
            />
          </label>
          <button type="submit">Add</button>
        </form>
      )}
    </div>
  );
}

export default Recipe;
