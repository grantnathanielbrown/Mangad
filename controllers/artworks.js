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
  res.render("CRUD/new");
});

module.exports = router;
