var ensureAuthenticated = require('../helpers/auth.js').ensureAuthenticated;
var User = require('../models/user.js');

module.exports = function (app) {

  app.get('/debug/users', function (req, res) {
    User.find({}, function(err, users){
      var userMap = {};
      users.forEach(function(user){
        userMap[user.steamid] = user;
      })
      res.json(userMap);
    });
  });

  app.post('/debug/addmatch', function(req, res){
    var addMatchTo = req.body.addMatchTo;
    var addMatchUserSteamID = req.body.addMatchUserSteamID;
    console.log("addMatchTo: %s addMatchUserSteamID: %s", addMatchTo, addMatchUserSteamID);
    User.findOne(
      {steamid : addMatchUserSteamID},
      function(addMatchUser){
        console.log(addMatchUser);
        User.findOneAndUpdate(
          {'steamid': addMatchTo},
          {$push: {matches: addMatchUser._id}},
          {},
          function (err, user) {
            console.log(addMatchUser)
            if (err) {
              res.send(err);
            }
            if (user) {
              res.send(user);
            }
          }
        );

      }
    );
  });
};
