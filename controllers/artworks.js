const express = require("express");
const router = express.Router();

const Artwork = require("../models/Artworks");

router.get("/", (req, res) => {
  console.log("hello");
});

module.exports = router;
