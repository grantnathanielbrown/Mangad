const mongoose = require("mongoose");
// check this, see if u need separate database for users. sam didnt use one
if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL);
} else {
  mongoose.connect("mongodb://localhost/mangad");
}

mongoose.Promise = Promise;

module.exports = mongoose;
