const recipeRouter = require("./recipe.routes");
const tokensRoute = require("./token.routes");
const userRouter = require("./user.routes");

const indexRouter = require("express").Router();

indexRouter.use("/users", userRouter);
indexRouter.use("/recipes", recipeRouter);
indexRouter.use("/tokens", tokensRoute);

module.exports = indexRouter;
