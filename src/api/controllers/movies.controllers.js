const Movie = require("../models/movie.model");

const getAllMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find()
      .populate("directed_by")
      .populate("written_by")
      .populate("produced_by")
      .populate("music_by")
      .populate("cast")
      .populate("awards");
    return res.status(200).json(movies);
  } catch (error) {
    return next(error);
  }
};
const getMovieById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id)
      .populate("directed_by")
      .populate("written_by")
      .populate("produced_by")
      .populate("music_by")
      .populate("cast")
      .populate("awards");
    return res.status(200).json(movie);
  } catch (error) {
    return next(error);
  }
};
const createMovie = async (req, res, next) => {
  try {
    const newMovie = new Movie({
      ...req.body,
      poster: req.file ? req.file.path : "Not image found",
    });
    const createdMovie = await newMovie.save();
    return res.status(201).json(createdMovie);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
};
