import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../../axiosInstance';

import clockIcon from '../free-icon-clock-3602199.png';
import tar from '../free-icon-salad-6359609.png';

function OneRecipe({ recipes, setRecipes, user }) {
  const [isShow, setIsShow] = useState(false);
  const [img, setImage] = useState('');
  const [servings, setServings] = useState('');
  const [readyInMinutes, setReadyInMinutes] = useState('');
  const [instructions, setInstructions] = useState('');
  const [title, setTitle] = useState('');
  const [oneRec, setOneRec] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();


  async function loadOneRecipe(recipeId) {
    console.log(recipeId);
    try {
      const response = await axiosInstance.get(`/recipes/${recipeId}`);
      setOneRec(response.data.recipe);
    } catch (error) {
      console.log('Error', error.message);
    }
  }

  useEffect(() => {
    if (id) {
      loadOneRecipe(id);
    }
  }, [id]);

  async function deleteHandler(recipeId) {
    try {
      const response = await axiosInstance.delete(`/recipes/${recipeId}`);
      if (response.status === 200) {
        setRecipes((prev) => prev.filter((el) => el.id !== recipeId));
        navigate('/recipes');
      }
    } catch (error) {
      console.error('Ошибка при удалении рецепта:', error.message);
    }
  }

  async function updateHandler(e) {
    e.preventDefault();
    try {
      const response = await axiosInstance.put(`/recipes/${oneRec.id}`, {
        title,
        img,
        servings,
        readyInMinutes,
        instructions,
      });
      if (response.status === 200) {
        setRecipes((prev) =>
          prev.map((el) => (el.id === response.data.recipe.id ? response.data.recipe : el))
        );
        setOneRec(response.data.recipe);
        setIsShow(false);
      }
    } catch (error) {
      console.error('Ошибка при обновлении рецепта:', error.message);
    }
  }

  return (
    <div className='one-recipe'>
      <h2 id='title'>Описание: {oneRec.title}</h2>
      <img src={oneRec.img} alt='Фото Блюда' />
      <p id='serv'>
        <img id='clockIcon' src={tar} alt='Иконка' /> Количество порций: {oneRec.servings}
      </p>
      <p id='serv'>
        <img id='dish' src={clockIcon} alt='Иконка' /> Время приготовления: {oneRec.readyInMinutes}
      </p>
      <p id='desc'>Описание: {oneRec.instructions}</p>


      {user.id === oneRec.userId && (
        <>
          <button type='button' onClick={() => deleteHandler(oneRec.id)}>
            УДАЛИТЬ
          </button>
          <button type='button' onClick={() => setIsShow((prev) => !prev)}>
            РЕДАКТИРОВАТЬ
          </button>
        </>
      )} 


      {isShow && (
        <form onSubmit={updateHandler}>
          <label>
            Название рецепта
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Название рецепта'
            />
          </label>
          <br />
          <label>
            Картинка блюда
            <input
              type='text'
              value={img}
              onChange={(e) => setImage(e.target.value)}
              placeholder='Ссылка на картинку блюда'
            />
          </label>
          <br />
          <label>
            Количество порций
            <input
              type='text'
              value={servings}
              onChange={(e) => setServings(e.target.value)}
              placeholder='Сколько порций'
            />
          </label>
          <br />
          <label>
            Время готовки в минутах
            <input
              type='text'
              value={readyInMinutes}
              onChange={(e) => setReadyInMinutes(e.target.value)}
              placeholder='Время готовки'
            />
          </label>
          <br />
          <label>
            Инструкция по приготовлению
            <input
              type='text'
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder='Инструкция'
            />
          </label>
          <button type='submit'>СОХРАНИТЬ</button>
        </form>
      )}
    </div>
  );
}

export default OneRecipe;
