const RecipeService = require("../services/Recipe.service");


async function getRecipesController(req, res) {
  try {
    const recipes = await RecipeService.getRecipes();
    res.status(200).json({ recipes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deleteRecipeController(req, res) {
  const { id } = req.params;
  const user = res.locals.user;

  try {
    const { isDeleted } = await RecipeService.deleteRecipe(id, user.id);
   

    if (isDeleted) {
      res.status(200).json({ message: "Deleted" });
    } else {
      res.status(400).json({ message: "Not found record" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function updateRecipeController(req, res) {
  const { id } = req.params;
  const { user } = res.locals;
  const {title, img, servings, readyInMinutes, instructions} = req.body

 
  
  
  try {
    const recipe = await RecipeService.updateRecipe(id, {title, img, servings, readyInMinutes, instructions}, user.id);
 
   console.log(recipe)
    if (recipe) {
      res.status(200).json({recipe});
    } else {
      res.status(400).json({ message: "Not update" });
    }
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ message: error.message });
  }
}

async function createRecipeController(req, res) {
  const { user } = res.locals;

try {
  const newRecipe = await RecipeService.createRecipe(req.body);
  res.status(200).json({ newRecipe });
} catch (error) {
  res.status(500).json({ message: error.message });
}
}


module.exports = {
  getRecipesController,
  deleteRecipeController,
  updateRecipeController,
  createRecipeController
};