const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const router = require("../config/routes.js");
const path = require("path");
const DIR = path.resolve();
const staticPublicPath = path.join(DIR, "public");
const viewsPath = path.join(DIR, "views");
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(staticPublicPath));
app.set("views", viewsPath);
app.set("view engine", "ejs");
app.use(router);
//error 404
app.use((req, res) => {
  res.render("pages/notFound404");
});

module.exports = app;
