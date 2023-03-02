const DirectorLite = require("../models/directorLite.model");

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
    const newDirectorLite = new DirectorLite(req.body);
    const createdDirectorLite = await newDirectorLite.save();
    return res.status(201).json(createdDirectorLite);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllDirectorLites,
  createDirectorLite,
};
