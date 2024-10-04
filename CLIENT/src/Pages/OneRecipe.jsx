import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../../axiosInstance';


function OneRecipe({recipes, setRecipes, user}) {
    const { id } = useParams();

    const [isShow, setIsShow] = useState(false);
    const [img, setImage] = useState("")
    const [servings, setServings] = useState("");
    const [readyInMinutes, setReadyInMinutes] = useState("");
    const [instructions, setInstructions] = useState("");
    const [title, setTitle] = useState("");
    const [oneRec, setOneRec] = useState({});
    const navigate = useNavigate();
  

    useEffect(() => {
      const selectedRecipe = recipes.find((el) => el.id === Number(id));
      console.log(selectedRecipe)
      if (selectedRecipe) {
        setOneRec(selectedRecipe);
        // Устанавливаем значения для полей формы при редактировании
        setTitle(selectedRecipe.title);
        setImage(selectedRecipe.img);
        setServings(selectedRecipe.servings);
        setReadyInMinutes(selectedRecipe.readyInMinutes);
        setInstructions(selectedRecipe.instructions);
      }
    }, [id, recipes]);

  async function deleteHeandler(id) {
    const response = await axiosInstance.delete(`/recipes/${id}`);
  
    
    if (response.status === 200) {
        setRecipes((prev) => prev.filter((el) => el.id !== id));
        navigate("/recipes");
    }
  }

  async function updateHeandler(e) {
    e.preventDefault();
    const response = await axiosInstance.put(`/recipes/${oneRec.id}`, {
      title,
      img,
      servings,
      readyInMinutes,
      instructions
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
    <div className='one-recipe'>

        <h2 id="title">  Описание: {oneRec.title}</h2>
         <img src={oneRec.img} alt="" />
      <p id="serv">🍽  Количесво порций: {oneRec.servings}</p>
      <p id="min">🕗  Время приготовления: {oneRec.readyInMinutes}</p>

      
      <p id="desc">  Описание: {oneRec.instructions}</p>
      <button type="button" onClick={() => deleteHeandler(oneRec.id)}>
        УДАЛИТЬ
      </button>
      <button type="button" onClick={() => setIsShow((prev) => !prev)}>
        РЕДАКТИРОВАТЬ
      </button>
     {isShow &&
    <form onSubmit={updateHeandler}>
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
      <button type="submit">СОХРАНИТЬ</button>
    </form>}
    </div>
  )
}

export default OneRecipe