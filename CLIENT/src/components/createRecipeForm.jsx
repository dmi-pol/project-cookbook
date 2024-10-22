import React, { useEffect, useState } from "react";
import axiosInstance from "../../axiosInstance";

function RecipesForm({recipes, setRecipes, user }) {

  const [title, setTitle] = useState("");
  const [img, setImage] = useState("")
  const [servings, setServings] = useState("");
  const [readyInMinutes, setReadyInMinutes] = useState("");
  const [instructions, setInstructions] = useState("");
  const [isShow, setIsShow] = useState(false);



 

 


  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosInstance.post("/recipes", {
        title,
        img,
        servings,
        readyInMinutes,
        instructions,
        userId: user.id,
      });

      if(data){
        console.log(data)
      }

      setRecipes((prev) => [...prev, data.newRecipe]);
      setTitle("");
      setImage("");
      setServings("");
      setReadyInMinutes("");
      setInstructions("");
      setIsShow((prev) => !prev)
      console.log(recipes)
    } catch (error) {
      console.error("Ошибка при отправке формы", error);
    }
  };



  return (
    <>
    <button id="sortButton" type="button" onClick={() => setIsShow((prev) => !prev)} >
        ДОБАВИТЬ РЕЦЕПТ +
      </button>


      
    {isShow &&
    <form id="form" onSubmit={submitHandler}>
      <label>
        Название рецепта:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Название рецепта"
        />
      </label>
      <br />
      <label>
        Картинка блюда:
        <input
          type="text"
          value={img}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Ссылка на картинку блюда"
        />
      </label>
      <br />
      <label>
        Количество порций:
        <input
          type="text"
          value={servings}
          onChange={(e) => setServings(e.target.value)}
          placeholder="Сколько порций"
        />
      </label>
      <br />
      <label>
        Время готовки:
        <input
          type="text"
          value={readyInMinutes}
          onChange={(e) => setReadyInMinutes(e.target.value)}
          placeholder="Время готовки"
        />
      </label>
      <br />
      <label>
        Инструкция:
        <input id="description"
          type="text"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Инструкция"
        />
      </label>
      <button id="submit" type="submit">ДОБАВИТЬ</button>
    </form>}
    </>);
}

export default RecipesForm;
