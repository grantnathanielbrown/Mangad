const mongoose = require("../db/connection");

const ArtworkSchema = new mongoose.Schema({
  title: String,
  url: String
  // consider adding createdAt and user
});
// consider adding comments schema

const Artwork = mongoose.model("Artwork", ArtworkSchema);

module.exports = Artwork;
