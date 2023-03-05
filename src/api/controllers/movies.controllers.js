const Movie = require("../models/movie.model");
const { deleteImgCloudinary } = require("../../middlewares/files.middleware");
const getAllMovies = async (req, res, next) => {
  try {
    if (req.query.page && !isNaN(parseInt(req.query.page))) {
      const numMovies = await Movie.countDocuments();
      let page = parseInt(req.query.page);
      let limit = req.query.limit ? parseInt(req.query.limit) : 1;
      let numPages =
        numMovies % limit > 0 ? numMovies / limit + 1 : numMovies / limit;
      if (page > numPages || page < 1) {
        page = 1;
      }
      const skip = (page - 1) * limit;
      const movies = await Movie.find()
        .skip(skip)
        .limit(limit)
        .populate("directed_by")
        .populate("written_by")
        .populate("produced_by")
        .populate("music_by")
        .populate("cast")
        .populate("awards");
      return res.status(200).json({
        info: {
          total: numMovies,
          page: page,
          limit: limit,
          next:
            numPages >= page + 1
              ? `http://localhost:8080/api/v1/movies?page=${
                  page + 1
                }&limit=${limit}`
              : null,
          prev:
            page != 1
              ? `http://localhost:8080/api/v1/movies?page=${
                  page - 1
                }&limit=${limit}`
              : null,
        },
        results: movies,
      });
    } else {
      const movies = await Movie.find()
        .limit(1)
        .populate("directed_by")
        .populate("written_by")
        .populate("produced_by")
        .populate("music_by")
        .populate("cast")
        .populate("awards");
      const numMovies = await Movie.countDocuments();

      return res.status(200).json({
        info: {
          total: numMovies,
          page: 1,
          limit: 1,
          next:
            numMovies > 1
              ? `http://localhost:8080/api/v1/movies?page=2&limit=1`
              : null,
          prev: null,
        },
        results: movies,
      });
    }
  } catch (error) {
    return next("Cannot find movies", error);
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
const deleteMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByIdAndDelete(id);
    if (movie.poster) {
      deleteImgCloudinary(movie.poster);
    }
    return res.status(200).json("Película borrada");
  } catch (error) {
    return next(error);
  }
};
const editMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedMovie = await Movie.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updatedMovie);
  } catch (error) {
    return next(error);
  }
};
const editPoster = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    if (movie.poster) {
      deleteImgCloudinary(movie.poster);
    }
    const poster = req.file ? req.file.path : "Not image found";
    const updatedMovie = await Movie.findByIdAndUpdate(
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
  editPoster,
  editMovie,
  deleteMovie,
  getAllMovies,
  getMovieById,
  createMovie,
};
