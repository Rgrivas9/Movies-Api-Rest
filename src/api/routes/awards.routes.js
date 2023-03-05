const express = require("express");

const AwardsRoutes = express.Router();

const {
  getAllAwards,
  createAward,
  deleteAward,
} = require("../controllers/awards.controller");

AwardsRoutes.get("/", getAllAwards);
AwardsRoutes.post("/", createAward);
AwardsRoutes.delete("/:id", deleteAward);

module.exports = AwardsRoutes;
