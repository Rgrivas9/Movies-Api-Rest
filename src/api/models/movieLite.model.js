const mongoose = require("mongoose");

const MovieLiteSchema = mongoose.Schema({
  title: { type: String, required: true, trim: true },
  year: { type: String, trim: true },
  poster: { type: String, trim: true },
  detail: { type: String, trim: true },
});

const MovieLite = mongoose.model("MovieLite", MovieLiteSchema);
module.exports = MovieLite;
