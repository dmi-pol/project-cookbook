const { getCatsController, createCatsController, deleteCatsController, updateCatsController } = require("../controllers/cat.controllers");
const verifyAccessToken = require("../middleware/verifyAccessToken");

const recipeRouter = require("express").Router();

recipeRouter
.get("/", getCatsController)
.post("/",verifyAccessToken, createCatsController)
.delete("/:id",verifyAccessToken, deleteCatsController)
.put("/:id",verifyAccessToken, updateCatsController);

module.exports = recipeRouter;