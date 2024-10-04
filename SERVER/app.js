require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken")

const app = express();
const indexRouter = require("./routes/index.routes");
const serverConfig = require("./config/serverConfig");

serverConfig(app);
app.use("/api", indexRouter);



app.listen(process.env.PORT, () => {
  console.log(`Лисички танцуют на  ${process.env.PORT} порту!! `);
});
