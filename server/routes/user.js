var ensureAuthenticated = require('../helpers/auth.js').ensureAuthenticated;
var User = require('../models/user.js');

module.exports = function (app) {

  app.get('/user', ensureAuthenticated, function (req, res) {
    if (req.user) {
      console.log("/user: returning user");
      res.json(req.user);
    }
    else {
      console.log("/user: returning null");
      res.json({data: null});
    }
  });

  app.post('/user', ensureAuthenticated, function (req, res) {
    var authedUser = req.user;
    var user = req.body.user;
    if (user.steamid !== authedUser.steamid) {
      res.status(403).send("Cannot update for a user that isn't you");
    }
    else {
      console.log(user);
      user.registrationComplete = true;
      User.findOneAndUpdate(
        { steamid: authedUser.steamid } /*query:*/,
        user /*doc*/,
        {} /*options*/,
        function (err, doc) { /*callback*/
          if (err) {
            res.status(500).send("Error updating user object");
          }
          else if (!doc) {
            res.status(500).send("No user object found");
          }
          else {
            res.status(200).send("User saved");
          }
        })
    }
  });
};
