const express = require("express");

const CrewsRoutes = express.Router();
const { upload } = require("../../middlewares/files.middleware");
const {
  getAllCrews,
  createCrew,
  deleteCrew,
  editCrew,
  editImageCrew,
} = require("../controllers/crews.controller");

CrewsRoutes.get("/", getAllCrews);
CrewsRoutes.post("/", upload.single("image"), createCrew);
CrewsRoutes.delete("/:id", deleteCrew);
CrewsRoutes.put("/:id", editCrew);
CrewsRoutes.put("/image/:id", upload.single("image"), editImageCrew);

module.exports = CrewsRoutes;
