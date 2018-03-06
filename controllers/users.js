// had all this
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var passport = require("passport");
// passport local?

// GET /signup
router.get("/signup", (req, res) => {
  res.render("signup");
});
// POST /signup
router.post("/signup", (req, res) => {
  var signupStrategy = passport.authenticate("local-signup", {
    successRedirect: "/",
    failureRedirect: "/signup",
    failureFlash: true
  });

  return signupStrategy(req, res);
});
// GET /login
router.get("/login", (req, res) => {
  res.render("login");
});
// POST /login
// GET /logout

module.exports = router;
