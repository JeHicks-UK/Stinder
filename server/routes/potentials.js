var ensureAuthenticated = require('../helpers/auth.js').ensureAuthenticated;
var User = require('../models/user.js');
var _ = require('underscore');

module.exports = function (app) {

  app.get('/potential/next', ensureAuthenticated, function(req, res){
    // console.log(req.user.matches);
    var pluckUserID = function(user){return user._user.toString()};
    var matches = req.user.matches.map(pluckUserID);
    var accepts = req.user.accepted.map(pluckUserID);
    var rejects = req.user.rejected.map(pluckUserID);
    var dontShowIDs = _.union(matches, accepts, rejects, [req.user._id]);
    console.log("excluding following IDs: %S", dontShowIDs);
    User.find()
      .nin('_id', dontShowIDs)
      .limit(1)
      .lean(true) //don't need mongoose wrapper functions
      .select('-matches -accepted -rejected -registrationComplete')
      .exec(function(err, potentialMatch){
        if (err){
          res.status(500).send('Error finding potential match');
        }
        else if (!potentialMatch){
          res.status(500).send('No potential match found');
        }
        else{
          potentialMatch.ownedGames = _.filter(potentialMatch.ownedGames, function(game){
            return game.advertise;
          });
          res.json(potentialMatch);
        }
      })
  });

  app.post('/potential/accept', ensureAuthenticated, function (req, res) {
    var steamUserToAdd = req.body._id;
    var currentUser = req.user;
    // Find full user object of person to be accepted
    User.findOne({_id: steamUserToAdd}, function (err, steamUser) {
      console.log('Adding %s (%s) to %s (%s)', steamUser.personaname, steamUser._id, currentUser.personaname, currentUser._id);
      // if the current user is already in the others 'accepted' list it's a match
      var steamUserAcceptedIDs = _.map(steamUser.accepted, function(acceptedUser){
        return acceptedUser._user.toString();
      });
      var currentUserIndex = steamUserAcceptedIDs.indexOf(currentUser._id.toString());
      if (currentUserIndex >= 0) {
        console.log("!!MATCH!!");
        steamUser.accepted.splice(currentUserIndex, 1);
        steamUser.matches.push({_user: currentUser._id});
        console.log("steamUser.matches: %s steamUser.accepted: %s", JSON.stringify(steamUser.matches), JSON.stringify(steamUser.accepted));
        steamUser.save();
        currentUser.matches.push({_user: steamUser._id});
        res.status(200).json({ message: "match" });
      } else {
        currentUser.accepted.push({_user: steamUser._id});
        res.status(200).send();
      }
      currentUser.save();
    })
  });

  app.post('/potential/reject', ensureAuthenticated, function (req, res) {
    // Lose hope all ye who enter here
    var steamUserToCrush = req.body._id;
    var currentUser = req.user;
    console.log('Rejecting ' + steamUserToCrush + ' from ' + currentUser);
    // Find full user object of person to be nuked from orbit emotionally
    currentUser.rejected.push({_user: steamUserToCrush._id});
    res.status(200).send();
  });

};
