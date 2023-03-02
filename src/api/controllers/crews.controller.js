const Crew = require("../models/crew.model");

const getAllCrews = async (req, res, next) => {
  try {
    const crews = await Crew.find();
    return res.status(200).json(crews);
  } catch (error) {
    return next(error);
  }
};
const createCrew = async (req, res, next) => {
  try {
    const newCrew = new Crew(req.body);
    const createdCrew = await newCrew.save();
    return res.status(201).json(createdCrew);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllCrews,
  createCrew,
};
