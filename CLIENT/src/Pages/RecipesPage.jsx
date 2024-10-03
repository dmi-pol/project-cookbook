import React, { useEffect, useState } from 'react';


import axiosInstance from '../../axiosInstance';

import CatForm from '../components/createCatForm';
import Recipe from '../components/recipeModul';

function RecipesPage({user}) {
    const [recipes, setRecipes] = useState([]);
    
    async function loadRecipes() {
        try {
            const response = await axiosInstance.get('/recipes');
            if (response.status === 200) {
                setRecipes(response.data.recipes);
            }
        } catch (error) {
            console.log('Error', error.message);
        }
    }

    useEffect(() => {
        loadRecipes();
      }, []);
      return (


        <div id='recipesMainPage'>
          {/* <CatForm user={user} setRecipes={setRecipes} /> */}

          {
            recipes.map((recipe
            ) => (
              <Recipe recipe={recipe} setRecipes={setRecipes} key={recipe.id}/>
            ))
          }
        </div>
      );
    }
    export default RecipesPage;

