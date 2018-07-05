// require dependencies
const express = require("express");
const app = express();
const hbs = require("hbs");
const parser = require("body-parser");
const cookieParser = require("cookie-parser");
const method = require("method-override");
const passport = require("passport");
const session = require("express-session");
const flash = require("connect-flash");
const reload = require('reload');
const helpers = require('handlebars-helpers')({
  hbs: hbs
})
// const fileUpload = require('express-fileupload');
// const anime = require('animejs');
const sass = require('sass')
const compass = require('compass')
app.set("view engine", "hbs");

// app.use(fileUpload());
// app.use(anime());
app.use(cookieParser());
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json())
app.use(method("_method"));

app.use(
  session({
    secret: "Grant-Secret",
    resave: true,
    saveUninitialized: true
  })
);
app.use(flash());

require("./config/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  console.log(req.user);
  next();
});

const artworksController = require("./controllers/artworks");
const usersController = require("./controllers/users");

app.use("/artwork", artworksController);
// change to user
app.use("/", usersController);

app.use(express.static("public"));

// set view to hbs

const Artwork = require("./models/Artworks");

app.get("/", (req, res) => {
  Artwork.find({})
    .sort({ createdAt: -1 })
    .then(artworks => {
      res.render("index", { artworks });
    });
});
// added this
app.get("/new", (req, res) => {
  res.render("new");
});

app.get("/:id", (req, res) => {
  // if (req.isAuthenticated())
    Artwork.findOne({ _id: req.params.id }).then(artwork => {
      res.render("show", artwork);
    });
});

app.post("/newSubmit", (req, res) => {
  // console.log(req.body);
  Artwork.create(req.body).then(() => {
    console.log(req.body)
    res.redirect("/");
  });
});

app.post('/newUpload', function(req, res) {
  console.log("req.files is this " + req.files)
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;
 
  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('/somewhere/on/your/server/filename.jpg', function(err) {
    if (err)
      return res.status(500).send(err);
 
    res.send('File uploaded!');
  });
});

app.delete("/:id", (req, res) => {
  // console.log(req.params.id);
  Artwork.findOneAndRemove({ _id: req.params.id }).then(() => {
    res.redirect("/");
  });
});

app.put("/:id", (req, res) => {
  console.log("enter put request before findOneAndUpdate");
  console.log(JSON.stringify(req.body));
  Artwork.findOneAndUpdate({ _id: req.params.id }, req.body).then(artwork => {
    console.log(`req.params.id ${req.params.id}`);
    // if you can get it to work, do redirect to /:id
    res.redirect("/");
  });
});

// app.delete("/", (req, res) => {
//   console.log(req.body);
// });

// if you get a bunch of documents at once, it becomes an array. if you just get one, you can access it as if it were an object.
// if i want just one document to show up, use findone

// test server

app.set("port", process.env.PORT || 3003);

app.listen(app.get("port"), () => {
  console.log("Server is working! Get ready for some awesome manga artwork!");
});

// reload(app);
 
// app.listen(app.get('port'), function () {
//   console.log('Reload is working! ' + app.get('port'))
// })
// export function reveal(var relativeOffset = anime.timeline();
// relativeOffset.add({
//   targets: ".index-img",
//   delay: function(el, i) { return i * 1000 },
//   opacity: 1,
//   easing: 'linear',
// })