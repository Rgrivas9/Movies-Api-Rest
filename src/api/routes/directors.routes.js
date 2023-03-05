const express = require("express");
const { upload } = require("../../middlewares/files.middleware");
const DirectorsRoutes = express.Router();

const {
  getAllDirectors,
  getDirectorById,
  createDirector,
  deleteDirector,
} = require("../controllers/directors.controller");

DirectorsRoutes.get("/", getAllDirectors);
DirectorsRoutes.get("/:id", getDirectorById);
DirectorsRoutes.post("/", upload.single("image"), createDirector);
DirectorsRoutes.delete("/:id", deleteDirector);

module.exports = DirectorsRoutes;
