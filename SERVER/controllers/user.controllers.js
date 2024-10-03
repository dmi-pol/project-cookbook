const jwtConfig = require("../config/jwtConfig");
const { refresh } = require("../config/jwtConfig");
const UserService = require("../services/User.service");
const generateTokens = require("../utils/generateTokens");
const bcrypt = require("bcrypt");

async function loginUserController(req, res) {
  const { email, password } = req.body;
  try {
    if (!email.trim() || !password.trim()) {
      res.status(400).json({ message: "Empty fields" });
    } else {
      const user = await UserService.getUserByEmail(email);

      const isValid = await bcrypt.compare(password, user.password);
      if (isValid) {
        const tmpUser = user.get();
        delete tmpUser.password;

        const { accessToken, refreshToken } = generateTokens({ user: tmpUser });

        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          maxAge: jwtConfig.refresh.expiresIn,
        });

        res.status(201).json({ user: tmpUser, accessToken });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function registrationUSerController(req, res) {
  const { name, email, password } = req.body;
  try {
    if (!email.trim() || !name.trim() || !password.trim()) {
      res.status(400).json({ message: "Empty fields" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
    //   console.log(hashedPassword)
      const newUser = await UserService.createUser({
        name,
        email,
        password: hashedPassword,
      });
    //   console.log(newUser.get())
   
      const tmpUser = newUser.get();
      delete tmpUser.password;


      const { refreshToken, accessToken } = generateTokens({ user: tmpUser});
      console.log( refreshToken, accessToken )
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: jwtConfig.refresh.expiresIn,
      });
      
      res.status(201).json({ user: tmpUser, accessToken });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}



module.exports = {
  loginUserController,
  registrationUSerController,
}