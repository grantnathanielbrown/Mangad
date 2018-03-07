// had all this
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var passport = require("passport");
// passport local?

// GET /signup
router.get("/signup", (req, res) => {
  var flashMessage = req.flash("signupMessage");
  // console.log(flashMessage);
  res.render("signup", { message: flashMessage });
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
  res.render("login", { message: req.flash("loginMessage") });
});
// POST /login
router.post("/login", (req, res) => {
  var loginProperty = passport.authenticate("local-login", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
  });

  return loginProperty(req, res);
});
// GET /logout

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});
module.exports = router;
