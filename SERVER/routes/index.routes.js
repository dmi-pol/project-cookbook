const catRouter = require("./cat.routes");
const tokensRoute = require("./token.routes");
const userRouter = require("./user.routes");

const indexRouter = require("express").Router();

indexRouter.use("/users", userRouter)
indexRouter.use("/cats", catRouter)
indexRouter.use("/tokens", tokensRoute)

module.exports = indexRouter;