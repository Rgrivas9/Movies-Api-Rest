const express = require("express");

const AwardsRoutes = express.Router();

const {
  getAllAwards,
  createAward,
  deleteAward,
  editAward,
} = require("../controllers/awards.controller");

AwardsRoutes.get("/", getAllAwards);
AwardsRoutes.post("/", createAward);
AwardsRoutes.delete("/:id", deleteAward);
AwardsRoutes.put("/:id", editAward);

module.exports = AwardsRoutes;
