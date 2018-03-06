const mongoose = require("../db/connection");
const bcrypt = require("bcrypt-nodejs");

var User = mongoose.Schema({
  local: {
    email: String,
    password: String
  }
});

User.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

module.exports = mongoose.model("User", User);
