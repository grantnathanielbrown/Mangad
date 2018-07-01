const mongoose = require("../db/connection");

const ArtworkSchema = new mongoose.Schema({
  title: String,
  url: String,
  createdAt: { type: Date, default: Date.now },
  author: String
});
// consider adding comments schema

const Artwork = mongoose.model("Artwork", ArtworkSchema);

module.exports = Artwork;
