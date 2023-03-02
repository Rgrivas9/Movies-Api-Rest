const mongoose = require("mongoose");

const CrewSchema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  role: { type: String, required: true, trim: true },
  country: { type: String, trim: true },
  image: { type: String, trim: true },
});

const Crew = mongoose.model("Crew", CrewSchema);
module.exports = Crew;
