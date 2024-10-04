const { loginUserController, registrationUSerController } = require("../controllers/user.controllers");

const userRouter = require("express").Router();

userRouter
.post("/authorization", loginUserController)
.post("/registration", registrationUSerController)
.delete("/logout", async (req, res) => {
    res.clearCookie("refreshToken")
    res.status(200).json({
      message: "Logout success"
    });
  });

module.exports = userRouter;