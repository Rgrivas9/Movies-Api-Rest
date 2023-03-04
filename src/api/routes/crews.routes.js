const express = require("express");

const CrewsRoutes = express.Router();
const { upload } = require("../../middlewares/files.middleware");
const { getAllCrews, createCrew } = require("../controllers/crews.controller");

CrewsRoutes.get("/", getAllCrews);
CrewsRoutes.post("/", upload.single("image"), createCrew);

module.exports = CrewsRoutes;
