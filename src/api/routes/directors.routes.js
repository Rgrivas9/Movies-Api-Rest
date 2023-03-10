const express = require("express");
const { upload } = require("../../middlewares/files.middleware");
const DirectorsRoutes = express.Router();

const {
  getAllDirectors,
  getDirectorById,
  createDirector,
  deleteDirector,
  editDirector,
  editImageDirector,
  edidFilmography,
} = require("../controllers/directors.controller");

DirectorsRoutes.get("/", getAllDirectors);
DirectorsRoutes.get("/:id", getDirectorById);
DirectorsRoutes.post("/", upload.single("image"), createDirector);
DirectorsRoutes.delete("/:id", deleteDirector);
DirectorsRoutes.put("/:id", editDirector);
DirectorsRoutes.put("/image/:id", upload.single("image"), editImageDirector);
DirectorsRoutes.put("/filmography/:id", edidFilmography);

module.exports = DirectorsRoutes;
