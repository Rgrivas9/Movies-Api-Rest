const express = require("express");

const DirectorLitesRoutes = express.Router();

const {
  getAllDirectorLites,
  createDirectorLite,
} = require("../controllers/directorLites.controller");

DirectorLitesRoutes.get("/", getAllDirectorLites);
DirectorLitesRoutes.post("/", createDirectorLite);

module.exports = DirectorLitesRoutes;
