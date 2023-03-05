const MovieLite = require("../models/movieLite.model");
const { deleteImgCloudinary } = require("../../middlewares/files.middleware");
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
    const newMovieLite = new MovieLite({
      ...req.body,
      poster: req.file ? req.file.path : "Not image found",
    });
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
const deleteMovieLite = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movieLite = await MovieLite.findByIdAndDelete(id);
    if (movieLite.poster) {
      deleteImgCloudinary(movieLite.poster);
    }
    return res.status(200).json("Película borrada");
  } catch (error) {
    return next(error);
  }
};
const editPosterMovieLite = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movieLite = await MovieLite.findById(id);
    if (movieLite.poster) {
      deleteImgCloudinary(movieLite.poster);
    }
    const poster = req.file ? req.file.path : "Not image found";
    const updatedMovie = await MovieLite.findByIdAndUpdate(
      id,
      { poster: poster },
      {
        new: true,
      }
    );
    return res.status(200).json(updatedMovie);
  } catch (error) {
    return next(error);
  }
};
module.exports = {
  editPosterMovieLite,
  deleteMovieLite,
  getAllMovieLites,
  createMovieLite,
  updateMovieLite,
};
