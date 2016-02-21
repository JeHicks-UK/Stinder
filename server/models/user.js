var mongoose = require('mongoose');

var GameSchema = new mongoose.Schema({
  appid:            String,
  name:             String,
  img_icon_url:     String,
  img_logo_url:     String,
  playtime_2weeks:  String,
  playtime_forever: String,
  advertise:        Boolean //not from steam
});

var UserSchema = new mongoose.Schema({
  steamid:      String, //from steam
  personaname:  String, //from steam
  avatarfull:   String, //from steam
  displayName:  String,
  dob:          Date,
  languages:    [String],
  aboutMe:      String,
  ownedGames:   [GameSchema],
  registrationComplete: Boolean,
  matches: [
    {_user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}}
  ],
  accepted: [
    {_user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}}
  ],
  rejected: [
    {_user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}}
  ]
});
//http://stackoverflow.com/questions/16028942/is-it-possible-to-populate-a-self-reference-in-a-mongoosejs-schema

module.exports = mongoose.model('User', UserSchema);
