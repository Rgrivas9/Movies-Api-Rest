const express = require("express");

const DirectorsRoutes = express.Router();

const {
  getAllDirectors,
  getDirectorById,
  createDirector,
} = require("../controllers/directors.controller");

DirectorsRoutes.get("/", getAllDirectors);
DirectorsRoutes.get("/:id", getDirectorById);
DirectorsRoutes.post("/", createDirector);

module.exports = DirectorsRoutes;
