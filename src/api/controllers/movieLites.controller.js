const MovieLite = require("../models/movieLite.model");

const getAllMovieLites = async (req, res, next) => {
  try {
    const movieLites = await MovieLite.find();
    return res.status(200).json(movieLites);
  } catch (error) {
    return next(error);
  }
};
const createMovieLite = async (req, res, next) => {
  try {
    const newMovieLite = new MovieLite(req.body);
    const createdMovieLite = await newMovieLite.save();
    return res.status(201).json(createdMovieLite);
  } catch (error) {
    return next(error);
  }
};
const updateMovieLite = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedMovieLite = await MovieLite.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updatedMovieLite);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllMovieLites,
  createMovieLite,
  updateMovieLite,
};
