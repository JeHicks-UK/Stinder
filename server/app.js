var express = require('express')
  , http = require('http')
  , bodyParser = require('body-parser')
  , passport = require('passport')
  , util = require('util')
  , session = require('express-session')
  , SteamStrategy = require('passport-steam').Strategy
  , mongoose = require('mongoose')
  , MongoStore = require('connect-mongo')(session)
  , User = require('./models/user.js')
  , _ = require('underscore');

var steamAPIKey = process.env.STEAM_API_KEY;
var hostname = process.env.STINDER_HOST || 'localhost';
var port = process.env.STINDER_PORT || 9001;
var db = process.env.STINDER_DB || 'mongodb://localhost/passport';
var sessionSecret = process.env.EXPRESS_SECRET;

mongoose.connect(db);

passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

var getUserGames = function (steamid, callback) {
  var requestOptions = {
    host: 'api.steampowered.com',
    port: 80,
    path: '/IPlayerService/GetOwnedGames/v0001/?key=' + steamAPIKey +
    '&steamid=' + steamid +
    '&format=json' +
    '&include_appinfo=1'
  };
  http.get(requestOptions, function (res) {
    var body = '';
    res.on('data', function (chunk) {
      body += chunk;
    });

    res.on('end', function () {
      var ownedGames = JSON.parse(body).response.games;
      ownedGames = ownedGames.map(function (game) {
        delete game.has_community_visible_stats;
        return game;
      });
      callback(ownedGames);
    });
  }).on('error', function (e) {
    console.error("Error getting user's games");
  })
};

var mergeGamesArrays = function(existingGames, gamesFromSteam){
  var mergedGames = existingGames;
  var existingGameIDs = _.pluck(existingGames, 'appid');
  console.log(existingGameIDs);
  gamesFromSteam.forEach(function(game){
    if (!_.contains(existingGameIDs, game.appid.toString())){
      mergedGames.push(game);
    }
  });
  return mergedGames;
}

passport.use(new SteamStrategy({
    returnURL: 'http://' + hostname + ':' + port + '/auth/steam/return',
    realm: 'http://' + hostname + ':' + port + '/',
    apiKey: steamAPIKey
  },
  function (identifier, profile, done) {
    console.log("in steam strategy");
    process.nextTick(function () {
      console.log("in next tick");
      profile = profile._json;
      getUserGames(profile.steamid, function (newGamesList) {
        User.findOne({'steamid': profile.steamid},
          function (err, user) {
            if (err) {
              return done(err, false);
            }
            if (user) {
              console.log("Found user %s, updating.", user.personaname);
              user.steamid = profile.steamid;
              user.personaname = profile.personaname;
              user.avatarfull = profile.avatarfull;
              user.ownedGames = mergeGamesArrays(user.ownedGames, newGamesList);
            }
            else {
              console.log("User not found, creating new user for %s", profile.personaname);
              user = new User({
                steamid : profile.steamid,
                personaname : profile.personaname,
                avatarfull : profile.avatarfull,
                ownedGames : newGamesList
              });
            }
            user.save(function(err, user){
              if(err){
                return done(err, false);
              }
              if(user){
                return done(null, user);
              }
            })
          }
        );
      });
    });
  }
));

var sessionConfig = {
  secret: sessionSecret,
  name: 'sessionToken',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: false
  },
  store: new MongoStore({mongooseConnection: mongoose.connection})
};

var app = express();
app.use(express.static(__dirname + '/../web/'));
app.use(express.static(__dirname + '/../web/app'));
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json({ limit : "50mb" }));
require('./routes/user.js')(app);
require('./routes/matches.js')(app);
require('./routes/potentials.js')(app);
require('./helpers/debug.js')(app);

app.get('/auth/steam',
  passport.authenticate('steam'),
  function (req, res) {
    // Will never reach here because of steam redirect
  });

app.get('/auth/steam/return',
  passport.authenticate('steam', {failureRedirect: '/'}),
  function (req, res) {
    if (req.user.registrationComplete) {
      res.redirect('/#/home');
    }
    else {
      res.redirect('/#/register');
    }
  });

app.get('/logout',
  function(req, res) {
    req.session.destroy();
    res.redirect('/');
  }
);


app.listen(port);
