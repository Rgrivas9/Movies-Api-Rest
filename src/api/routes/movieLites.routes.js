const express = require("express");

const MovieLitesRoutes = express.Router();

const {
  getAllMovieLites,
  createMovieLite,
  updateMovieLite,
} = require("../controllers/movieLites.controller");

MovieLitesRoutes.get("/", getAllMovieLites);
MovieLitesRoutes.post("/", createMovieLite);
MovieLitesRoutes.put("/:id", updateMovieLite);

module.exports = MovieLitesRoutes;
