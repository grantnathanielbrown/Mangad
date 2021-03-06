const express = require("express");
const router = express.Router();

// this gets the model. for some reason, can't do it by importing connection.js
const Artwork = require("../models/Artworks");

router.get("/", (req, res) => {
  Artwork.find({}).then(artworks => {
    res.render("index", { artworks });
  });
});

router.get("/new", (req, res) => {
  res.render("new");
});

// router.post("/new", (req, res) => {
//   console.log(req.body);
//   Artwork.create(req.body).then(() => {
//     res.render("/artwork");
//   });
// });
// router.post("/", (req, res) => {
//   console.log(req.body);
//   Artwork.create(req.body).then(artwork => {
//     console.log(artwork);
//     res.render("/artwork");
//   });
// });

module.exports = router;
