const { getCatsController, createCatsController, deleteCatsController, updateCatsController } = require("../controllers/cat.controllers");
const verifyAccessToken = require("../middleware/verifyAccessToken");

const catRouter = require("express").Router();

catRouter
.get("/", getCatsController)
.post("/",verifyAccessToken, createCatsController)
.delete("/:id",verifyAccessToken, deleteCatsController)
.put("/:id",verifyAccessToken, updateCatsController);

module.exports = catRouter;