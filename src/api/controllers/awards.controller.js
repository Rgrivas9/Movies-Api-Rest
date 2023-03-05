const Award = require("../models/award.model");
const getAllAwards = async (req, res, next) => {
  try {
    const awards = await Award.find();
    return res.status(200).json(awards);
  } catch (error) {
    return next(error);
  }
};
const createAward = async (req, res, next) => {
  try {
    const newAward = new Award(req.body);
    const createdAward = await newAward.save();
    return res.status(201).json(createdAward);
  } catch (error) {
    return next(error);
  }
};
const deleteAward = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Award.findByIdAndDelete(id);
    return res.status(200).json("Premio borrado!");
  } catch (error) {
    return next(error);
  }
};
const editAward = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedAward = await Award.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updatedAward);
  } catch (error) {
    return next(error);
  }
};
module.exports = {
  editAward,
  deleteAward,
  getAllAwards,
  createAward,
};
