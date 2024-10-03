import React from 'react'
import { useParams } from 'react-router-dom';

function OneRecipe({recipes}) {
    const { id } = useParams();

const recipe = recipes.find((el)=> el.id === Number(id))


  return (
    <div className='one-recipe'>
        <h2 id="title">  Описание: {recipe.title}</h2>
         <img src={recipe.img} alt="" />
      <p id="serv">🍽  Количесво порций: {recipe.servings}</p>
      <p id="min">🕗  Время приготовления: {recipe.readyInMinutes}</p>
      
      <p id="desc">  Описание: {recipe.instructions}</p>
        
    </div>
  )
}

export default OneRecipe