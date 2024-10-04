const { getRecipesController, updateRecipeController, deleteRecipeController, createRecipeController, getOneRecipeController } = require("../controllers/recipe.controllers");
const verifyAccessToken = require("../middleware/verifyAccessToken");

const recipeRouter = require("express").Router();

recipeRouter
.get("/", getRecipesController)
.post("/",verifyAccessToken, createRecipeController)
.delete("/:id",verifyAccessToken, deleteRecipeController)
.put("/:id",verifyAccessToken, updateRecipeController)
.get("/:id", getOneRecipeController)

module.exports = recipeRouter;