const express = require("express");
const { upload } = require("../../middlewares/files.middleware");
const MoviesRoutes = express.Router();

const {
  getAllMovies,
  getMovieById,
  createMovie,
  deleteMovie,
} = require("../controllers/movies.controllers");

MoviesRoutes.get("/", getAllMovies);
MoviesRoutes.get("/:id", getMovieById);
MoviesRoutes.post("/", upload.single("poster"), createMovie);
MoviesRoutes.delete("/:id", deleteMovie);

module.exports = MoviesRoutes;
