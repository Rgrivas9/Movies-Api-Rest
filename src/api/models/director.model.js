const mongoose = require("mongoose");

const DirectorSchema = mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    country: { type: String, trim: true },
    born: {
      type: Number,
      trim: true,
      validate: {
        validator: (v) => v >= 1800 && v <= 2023,
        message: "Year between 1800 & 2023",
      },
    },
    best_Director_Academy_Award: { type: Number, trim: true },
    filmography: [{ type: mongoose.Schema.Types.ObjectId, ref: "MovieLite" }],
  },
  {
    timestamps: true,
  }
);

const Director = mongoose.model("Director", DirectorSchema);
module.exports = Director;
