const mongoose = require("mongoose");

const DirectorLiteSchema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  country: { type: String, trim: true },
  image: { type: String, trim: true },
  detail: { type: String, trim: true },
});

const DirectorLite = mongoose.model("DirectorLite", DirectorLiteSchema);
module.exports = DirectorLite;
