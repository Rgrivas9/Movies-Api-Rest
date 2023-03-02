const express = require("express");

const CrewsRoutes = express.Router();

const { getAllCrews, createCrew } = require("../controllers/crews.controller");

CrewsRoutes.get("/", getAllCrews);
CrewsRoutes.post("/", createCrew);

module.exports = CrewsRoutes;
