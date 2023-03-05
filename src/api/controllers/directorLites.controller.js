const DirectorLite = require("../models/directorLite.model");
const { deleteImgCloudinary } = require("../../middlewares/files.middleware");
const getAllDirectorLites = async (req, res, next) => {
  try {
    const directorLites = await DirectorLite.find();
    return res.status(200).json(directorLites);
  } catch (error) {
    return next(error);
  }
};
const createDirectorLite = async (req, res, next) => {
  try {
    const newDirectorLite = new DirectorLite({
      ...req.body,
      image: req.file ? req.file.path : "Not image found",
    });
    const createdDirectorLite = await newDirectorLite.save();
    return res.status(201).json(createdDirectorLite);
  } catch (error) {
    return next(error);
  }
};
const updateDirectorLite = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedDirectorLite = await DirectorLite.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    return res.status(200).json(updatedDirectorLite);
  } catch (error) {
    return next(error);
  }
};
const deleteDirectorLite = async (req, res, next) => {
  try {
    const { id } = req.params;
    const directorLite = await DirectorLite.findByIdAndDelete(id);
    if (directorLite.image) {
      deleteImgCloudinary(directorLite.image);
    }
    return res.status(200).json("Director borrado!");
  } catch (error) {
    return next(error);
  }
};
module.exports = {
  deleteDirectorLite,
  getAllDirectorLites,
  createDirectorLite,
  updateDirectorLite,
};
