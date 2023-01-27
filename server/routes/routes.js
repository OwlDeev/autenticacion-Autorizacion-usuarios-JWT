const express = require("express");
const ruta = express.Router();
const {
  postUsuarios,
  getUsuarios,
  postLogin,
} = require("../controllers/controllers");

ruta.route("/usuarios").post(postUsuarios);

ruta.route("/login").post(postLogin);

ruta.route("/usuarios").get(getUsuarios);

module.exports = ruta;
