// require dependencies
const express = require("express");
const hbs = require("hbs");
const parser = require("body-parser");
const passport = require("passport");

const app = express();

app.use(express.static("public"));

// set view to hbs
app.set("view engine", "hbs");

const Artwork = require("./models/Artworks");

app.get("/", (req, res) => {
  Artwork.find({}).then(artworks => {
    res.render("index", { artworks });
  });
});
// if you get a bunch of documents at once, it becomes an array. if you just get one, you can access it as if it were an object.
// if i want just one document to show up, use findone

// test server
app.listen(3000, (req, res) => {
  console.log("Server is working. Get ready for some sweet manga artwork!");
});
