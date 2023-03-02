const express = require("express");

const AwardsRoutes = express.Router();

const {
  getAllAwards,
  createAward,
} = require("../controllers/awards.controller");

AwardsRoutes.get("/", getAllAwards);
AwardsRoutes.post("/", createAward);

module.exports = AwardsRoutes;
