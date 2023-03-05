const express = require("express");
const { upload } = require("../../middlewares/files.middleware");
const MovieLitesRoutes = express.Router();

const {
  getAllMovieLites,
  createMovieLite,
  updateMovieLite,
  deleteMovieLite,
} = require("../controllers/movieLites.controller");

MovieLitesRoutes.get("/", getAllMovieLites);
MovieLitesRoutes.post("/", upload.single("poster"), createMovieLite);
MovieLitesRoutes.put("/:id", updateMovieLite);
MovieLitesRoutes.delete("/:id", deleteMovieLite);

module.exports = MovieLitesRoutes;
