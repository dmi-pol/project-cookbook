import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../axiosInstance";

import clockIcon from "../free-icon-clock-3602199.png";

import tar from "../free-icon-plate-6378222.png";

function Recipe({ recipe, setRecipes }) {

  const [isShow, setIsShow] = useState(false);
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");

 
  return (
    <div id="recipeCard">
      <Link to={`/recipes/${recipe.id}`}>
        <h3>{recipe.title}</h3>
      </Link>
      <img src={recipe.img} alt="" />
      <p id="serv"><img id="clockIcon" src={clockIcon}  /> Количесво порций: {recipe.servings}</p>
      <p id="min"><img id='dish'src={tar}  />  Время приготовления: {recipe.readyInMinutes}</p>
      
    </div>
  );
}

export default Recipe;
