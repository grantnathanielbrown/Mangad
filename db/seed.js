const Artwork = require("../models/Artworks");
const data = require("./seeds.json");
console.log(data);
Artwork.remove({}).then(() => {
  return Artwork.collection.insert(data);
});
