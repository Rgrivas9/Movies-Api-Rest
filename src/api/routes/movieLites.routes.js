const express = require("express");
const { upload } = require("../../middlewares/files.middleware");
const MovieLitesRoutes = express.Router();

const {
  getAllMovieLites,
  createMovieLite,
  updateMovieLite,
  deleteMovieLite,
  editPosterMovieLite,
} = require("../controllers/movieLites.controller");

MovieLitesRoutes.get("/", getAllMovieLites);
MovieLitesRoutes.post("/", upload.single("poster"), createMovieLite);
MovieLitesRoutes.put("/:id", updateMovieLite);
MovieLitesRoutes.delete("/:id", deleteMovieLite);
MovieLitesRoutes.put(
  "/poster/:id",
  upload.single("poster"),
  editPosterMovieLite
);

module.exports = MovieLitesRoutes;
