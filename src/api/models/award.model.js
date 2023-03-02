const mongoose = require("mongoose");

const AwardSchema = mongoose.Schema({
  award: { type: String, required: true, trim: true },
  category: { type: String, required: true, trim: true },
  year: { type: Number, trim: true, required: true },
  winner: { type: String, trim: true, required: true },
  oponents: [{ type: String, trim: true }],
});

const Award = mongoose.model("Award", AwardSchema);
module.exports = Award;
