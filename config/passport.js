// was blank
var LocalStrategy = require("passport-local").Strategy;
var User = require("../models/user");

module.exports = function(passport) {
  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      function(req, email, password, callback) {
        // Find a user with this e-mail
        User.findOne({ "local.email": email }, function(err, user) {
          if (err) return callback(err);

          // If there already is a user with this email
          if (user) {
            return callback(
              null,
              false,
              req.flash("signupMessage", "This email is already used.")
            );
          } else {
            // There is no email registered with this emai
            // Create a new user
            var newUser = new User();
            newUser.local.email = email;
            newUser.local.password = newUser.encrypt(password);

            newUser.save(function(err) {
              if (err) throw err;
              return callback(null, newUser);
            });
          }
        });
      }
    )
  );
};
