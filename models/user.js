const mongoose = require("../db/connection");
const bcrypt = require("bcrypt-nodejs");

var User = mongoose.Schema({
  local: {
    email: String,
    password: String
  }
});

module.exports = mongoose.model("User", User);
