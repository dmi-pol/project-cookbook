const jwt = require("jsonwebtoken");

function verifyAccessToken(req, res, next) {
  try {
    const  accessToken = req.headers.authorization.split(" ")[1] // Barier sdlkfdslkjfksdljnfkjsd
    const { user } = jwt.verify(accessToken, process.env.ACCESS_TOKEN);
    // console.log(user)

    res.locals.user = user;

    next();
  } catch (error) {
    console.log(error);
    
    console.log("Invalid access token");
    res.status(403).json({"message" :"Invalid access token"});
  }
}

module.exports = verifyAccessToken;
