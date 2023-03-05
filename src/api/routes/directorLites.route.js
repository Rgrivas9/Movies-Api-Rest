const express = require("express");
const { upload } = require("../../middlewares/files.middleware");
const DirectorLitesRoutes = express.Router();

const {
  getAllDirectorLites,
  createDirectorLite,
  updateDirectorLite,
  deleteDirectorLite,
  editImageDirectorLite,
} = require("../controllers/directorLites.controller");

DirectorLitesRoutes.get("/", getAllDirectorLites);
DirectorLitesRoutes.post("/", upload.single("image"), createDirectorLite);
DirectorLitesRoutes.put("/:id", updateDirectorLite);
DirectorLitesRoutes.delete("/:id", deleteDirectorLite);
DirectorLitesRoutes.put(
  "/image/:id",
  upload.single("image"),
  editImageDirectorLite
);

module.exports = DirectorLitesRoutes;
