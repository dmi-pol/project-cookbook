import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../axiosInstance";

import clockIcon from "../free-icon-clock-3602199.png";

import tar from "../free-icon-salad-6359609.png";

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
      <Link to={`/recipes/${recipe.id}`}>
        <h3 className="header__nav-item">{recipe.title}</h3>
      </Link>
      <img src={recipe.img} alt="" />
      <p id="serv"><img id="clockIcon" src={tar}  /> Количесво порций: {recipe.servings}</p>
      <p id="serv"><img id='dish'src={clockIcon}  />  Время приготовления: {recipe.readyInMinutes}</p>
      
    
    </div>
  );
}

export default Recipe;
