var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
  steamid: String,
  personaname: String
});
