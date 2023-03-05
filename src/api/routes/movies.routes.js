const express = require("express");
const { upload } = require("../../middlewares/files.middleware");
const MoviesRoutes = express.Router();

const {
  getAllMovies,
  getMovieById,
  createMovie,
  deleteMovie,
  editMovie,
  editPoster,
} = require("../controllers/movies.controllers");

MoviesRoutes.get("/", getAllMovies);
MoviesRoutes.get("/:id", getMovieById);
MoviesRoutes.post("/", upload.single("poster"), createMovie);
MoviesRoutes.delete("/:id", deleteMovie);
MoviesRoutes.put("/:id", editMovie);
MoviesRoutes.put("/poster/:id", upload.single("poster"), editPoster);

module.exports = MoviesRoutes;
