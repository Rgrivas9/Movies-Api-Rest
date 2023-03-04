const Director = require("../models/director.model");

const getAllDirectors = async (req, res, next) => {
  try {
    const directors = await Director.find().populate("filmography");
    return res.status(200).json(directors);
  } catch (error) {
    return next(error);
  }
};
const getDirectorById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const director = await Director.findById(id).populate("filmography");
    return res.status(200).json(director);
  } catch (error) {
    return next(error);
  }
};
const createDirector = async (req, res, next) => {
  try {
    const newDirector = new Director({
      ...req.body,
      image: req.file ? req.file.path : "Not image found",
    });
    const createdDirector = await newDirector.save();
    return res.status(201).json(createdDirector);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllDirectors,
  getDirectorById,
  createDirector,
};
