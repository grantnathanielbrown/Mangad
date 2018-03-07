// had all this
const mongoose = require("../db/connection");
const bcrypt = require("bcrypt-nodejs");

const User = mongoose.Schema({
  local: {
    email: String,
    password: String
  }
});

User.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

User.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model("User", User);
