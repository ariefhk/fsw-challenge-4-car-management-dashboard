const express = require("express");
const cors = require("cors");
const router = require("../config/routes.js");
const path = require("path");
const DIR = path.resolve();
const staticPublicPath = path.join(DIR, "public");
const app = express();

app.use(cors());
app.use(express.static(staticPublicPath));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

module.exports = app;
