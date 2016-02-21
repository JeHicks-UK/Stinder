var ensureAuthenticated = require('../helpers/auth.js').ensureAuthenticated;
var User = require('../models/user.js');

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
};
