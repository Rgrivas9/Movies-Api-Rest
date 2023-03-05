const Director = require("../models/director.model");
const { deleteImgCloudinary } = require("../../middlewares/files.middleware");
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
const deleteDirector = async (req, res, next) => {
  try {
    const { id } = req.params;
    const director = await Director.findByIdAndDelete(id);
    if (director.image) {
      deleteImgCloudinary(director.image);
    }
    return res.status(200).json("Director borrado!");
  } catch (error) {
    return next(error);
  }
};
const editDirector = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedDirector = await Director.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updatedDirector);
  } catch (error) {
    return next(error);
  }
};
const editImageDirector = async (req, res, next) => {
  try {
    const { id } = req.params;
    const director = await Director.findById(id);
    if (director.image) {
      deleteImgCloudinary(director.image);
    }
    const image = req.file ? req.file.path : "Not image found";
    const updatedDirector = await Director.findByIdAndUpdate(
      id,
      { image: image },
      {
        new: true,
      }
    );
    return res.status(200).json(updatedDirector);
  } catch (error) {
    return next(error);
  }
};
const edidFilmography = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { mode } = req.body;
    const { movieId } = req.body;
    if (mode == "push") {
      const updatedDirector = await Director.findByIdAndUpdate(
        id,
        { $push: { filmography: movieId } },
        { new: true }
      );
      return res.status(200).json(updatedDirector);
    }
    if (mode == "remove") {
      const director = await Director.findById(id);
      const newFilmography = [];
      for (const movie of director.filmography) {
        if (movie != movieId) {
          newFilmography.push(movie);
        }
      }
      const updatedDirector = await Director.findByIdAndUpdate(
        id,
        { filmography: newFilmography },
        {
          new: true,
        }
      );
      return res.status(200).json(updatedDirector);
    }
  } catch (error) {
    return next(error);
  }
};
module.exports = {
  edidFilmography,
  editImageDirector,
  editDirector,
  deleteDirector,
  getAllDirectors,
  getDirectorById,
  createDirector,
};
