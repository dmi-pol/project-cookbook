import React, { useState } from "react";
import axiosInstance from "../../axiosInstance";

function RecipesForm({ setRecipes, user }) {

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
      
      setRecipes((prev) => [...prev, data.recipes]);
      setTitle("");
      setImage("");
      setServings("");
      setReadyInMinutes("");
      setInstructions("");

    } catch (error) {
      console.error("Ошибка при отправке формы", error);
    }
  };

  return (
    <>
    <button type="button" onClick={() => setIsShow((prev) => !prev)}>
        Update cat
      </button>


      
    {isShow &&
    <form onSubmit={submitHandler}>
      <label>
        Название рецепта
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Название рецепта"
        />
      </label>
      <br />
      <label>
        Картинка блюда
        <input
          type="text"
          value={img}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Ссылка на картинку блюда"
        />
      </label>
      <br />
      <label>
        Количество порций
        <input
          type="text"
          value={servings}
          onChange={(e) => setServings(e.target.value)}
          placeholder="Сколько порций"
        />
      </label>
      <br />
      <label>
        Время готовки в минутах
        <input
          type="text"
          value={readyInMinutes}
          onChange={(e) => setReadyInMinutes(e.target.value)}
          placeholder="Время готовки"
        />
      </label>
      <br />
      <label>
        Инструкция по приготовлению
        <input
          type="text"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Инструкция"
        />
      </label>
      <button type="submit">Добавь</button>
    </form>}
    </>);
}

export default RecipesForm;
