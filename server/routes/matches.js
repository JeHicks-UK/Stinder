var ensureAuthenticated = require('../helpers/auth.js').ensureAuthenticated;
var User = require('../models/user.js');

module.exports = function (app) {

  app.get('/matches', ensureAuthenticated, function (req, res) {
    console.log(req.user);
  });
};
