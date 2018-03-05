const Artwork = require("../models/Artworks");
const data = require("./seeds.json");

Artwork.remove({}).then(() => {
  return Artwork.collection.insert(data);
});
