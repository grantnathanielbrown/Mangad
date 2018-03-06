// require dependencies
const express = require("express");
const app = express();
const hbs = require("hbs");
const parser = require("body-parser");
const method = require("method-override");
const passport = require("passport");
const session = require("express-session");
const flash = require("connect-flash");

require("./config/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use(
  session({
    secret: "Grant-Secret"
  })
);
app.use(flash());

const artworksController = require("./controllers/artworks");
const usersController = require("./controllers/users");

app.use(express.static("public"));

app.use("/artwork", artworksController);
app.use("/", usersController);
// set view to hbs
app.set("view engine", "hbs");

app.use(parser.urlencoded({ extended: true }));
app.use(method("_method"));

const Artwork = require("./models/Artworks");

app.get("/", (req, res) => {
  Artwork.find({}).then(artworks => {
    res.render("index", { artworks });
  });
});

app.get("/:id", (req, res) => {
  Artwork.findOne({ _id: req.params.id }).then(artwork => {
    res.render("show", artwork);
  });
});

app.post("/", (req, res) => {
  console.log(req.body);
  Artwork.create(req.body).then(() => {
    res.redirect("/");
  });
});

// app.delete("/", (req, res) => {
//   console.log(req.body);
// });

// if you get a bunch of documents at once, it becomes an array. if you just get one, you can access it as if it were an object.
// if i want just one document to show up, use findone

// test server
//
app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log("Server is working! Get ready for some awesome manga artwork!");
});
