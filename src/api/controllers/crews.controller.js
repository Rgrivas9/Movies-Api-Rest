const Crew = require("../models/crew.model");
const { deleteImgCloudinary } = require("../../middlewares/files.middleware");
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
    const newCrew = new Crew({
      ...req.body,
      image: req.file ? req.file.path : "Not image found",
    });
    const createdCrew = await newCrew.save();
    return res.status(201).json(createdCrew);
  } catch (error) {
    return next(error);
  }
};
const deleteCrew = async (req, res, next) => {
  try {
    const { id } = req.params;
    const crew = await Crew.findByIdAndDelete(id);
    if (crew.image) {
      deleteImgCloudinary(crew.image);
    }
    return res.status(200).json("Crew borrado!");
  } catch (error) {
    return next(error);
  }
};
const editCrew = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedCrew = await Crew.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updatedCrew);
  } catch (error) {
    return next(error);
  }
};
const editImageCrew = async (req, res, next) => {
  try {
    const { id } = req.params;
    const crew = await Crew.findById(id);
    if (crew.image) {
      deleteImgCloudinary(crew.image);
    }
    const image = req.file ? req.file.path : "Not image found";
    const updatedCrew = await Crew.findByIdAndUpdate(
      id,
      { image: image },
      {
        new: true,
      }
    );
    return res.status(200).json(updatedCrew);
  } catch (error) {
    return next(error);
  }
};
module.exports = {
  editImageCrew,
  editCrew,
  deleteCrew,
  getAllCrews,
  createCrew,
};
