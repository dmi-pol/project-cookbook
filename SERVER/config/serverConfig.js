const morgan = require("morgan");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser")

const serverConfig = (app) => {
  app.use(express.static(path.join(__dirname, "../public")));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser())
  app.use(morgan("dev"));
};

module.exports = serverConfig;
