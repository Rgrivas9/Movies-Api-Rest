const express = require("express");

const DirectorLitesRoutes = express.Router();

const {
  getAllDirectorLites,
  createDirectorLite,
  updateDirectorLite,
} = require("../controllers/directorLites.controller");

DirectorLitesRoutes.get("/", getAllDirectorLites);
DirectorLitesRoutes.post("/", createDirectorLite);
DirectorLitesRoutes.put("/:id", updateDirectorLite);

module.exports = DirectorLitesRoutes;
