const express = require("express");

const MovieLitesRoutes = express.Router();

const {
  getAllMovieLites,
  createMovieLite,
} = require("../controllers/movieLites.controller");

MovieLitesRoutes.get("/", getAllMovieLites);
MovieLitesRoutes.post("/", createMovieLite);

module.exports = MovieLitesRoutes;
