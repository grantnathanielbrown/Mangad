const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mangad");

mongoose.Promise = Promise;

module.exports = mongoose;
