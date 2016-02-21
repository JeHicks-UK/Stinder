var ensureAuthenticated = require('../helpers/auth.js').ensureAuthenticated;
var User = require('../models/user.js');
var _ = require('underscore');

module.exports = function (app) {

  app.get('/matches', ensureAuthenticated, function (req, res) {
    User.populate(req.user, {path: "matches._user"}, function(err, user){
      if (err){
        res.status(500).send('Failed to populate user');
      }
      else if (!user){
        res.status(500).send('Error finding current user');
      }
      else{
        res.json(user.matches);
      }
    })
  });

  app.get('/potential/next', ensureAuthenticated, function(req, res){
    console.log(req.user.matches);
    var matches = req.user.matches.map(function(match){
      return match._user;
    });
    var accepts = req.user.accepted.map(function(accepted){
      return accepted._user;
    });
    var rejects = req.user.rejected.map(function(rejected){
      return rejeceted._user;
    });
    console.log(matches);
    console.log(accepts);
    console.log(rejects);
    User.find()
      .nin('steamid', matches.concat(accepts).concat(rejects).concat([req.user.steamid]))
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
          })
          res.json(potentialMatch);
        }
      })
  });

};
