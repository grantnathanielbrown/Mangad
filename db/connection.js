const mongoose = require("mongoose");
// check this, see if u need separate database for users. sam didnt use one
mongoose.connect("mongodb://localhost/mangad");

mongoose.Promise = Promise;

module.exports = mongoose;
