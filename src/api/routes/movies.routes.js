const express = require("express");

const MoviesRoutes = express.Router();

const {
  getAllMovies,
  getMovieById,
  createMovie,
} = require("../controllers/movies.controllers");

MoviesRoutes.get("/", getAllMovies);
MoviesRoutes.get("/:id", getMovieById);
MoviesRoutes.post("/", createMovie);

module.exports = MoviesRoutes;
