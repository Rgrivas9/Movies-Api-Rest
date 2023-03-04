const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema(
  {
    title: { type: String, trim: true, required: true },
    poster: { type: String, trim: true },
    release_Date: {
      type: Date,
      required: false,
      trim: true,
      validate: {
        validator: (v) =>
          v instanceof Date &&
          v.getFullYear() >= 1900 &&
          v.getFullYear() <= 2100,
        message: "Year between 1900 & 2100",
      },
    },
    genre: { type: String, trim: true },
    language: { type: String, trim: true },
    distributed_by: { type: String, trim: true },
    budget: { type: Number, trim: true },
    box_Office: { type: Number, trim: true },
    minutes: { type: Number, trim: true },
    produced_by: [{ type: mongoose.Schema.Types.ObjectId, ref: "Crew" }],
    directed_by: [
      { type: mongoose.Schema.Types.ObjectId, ref: "DirectorLite" },
    ],
    written_by: [{ type: mongoose.Schema.Types.ObjectId, ref: "Crew" }],
    music_by: [{ type: mongoose.Schema.Types.ObjectId, ref: "Crew" }],
    cast: [{ type: mongoose.Schema.Types.ObjectId, ref: "Crew" }],
    awards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Award" }],
  },
  {
    timestamps: true,
  }
);
const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;
