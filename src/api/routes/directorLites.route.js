const express = require("express");
const { upload } = require("../../middlewares/files.middleware");
const DirectorLitesRoutes = express.Router();

const {
  getAllDirectorLites,
  createDirectorLite,
  updateDirectorLite,
  deleteDirectorLite,
} = require("../controllers/directorLites.controller");

DirectorLitesRoutes.get("/", getAllDirectorLites);
DirectorLitesRoutes.post("/", upload.single("image"), createDirectorLite);
DirectorLitesRoutes.put("/:id", updateDirectorLite);
DirectorLitesRoutes.delete("/:id", deleteDirectorLite);

module.exports = DirectorLitesRoutes;
