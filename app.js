// require dependencies
const express = require("express");
const hbs = require("hbs");
const parser = require("body-parser");
const passport = require("passport");

const app = express();
// test server
app.listen(3000, (req, res) => {
  console.log("Server is working. Get ready for some sweet manga artwork!");
});
