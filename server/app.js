var express = require('express')
  , http = require('http')
  , bodyParser = require('body-parser')
  , passport = require('passport')
  , util = require('util')
  , session = require('express-session')
  , SteamStrategy = require('passport-steam').Strategy
  , dbConfig = require('./db.js')
  , mongoose = require('mongoose')
  , MongoStore = require('connect-mongo')(session)
  , User = require('./models/user.js');

var steamAPIKey = process.env.STEAM_API_KEY;
//var hicksSteamID = '76561197961296772';

// Mongoose setup
mongoose.connect(dbConfig.url);

// Passport session setup.
passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

var getUserGames = function(steamid, callback){
  var requestOptions = {
    host: 'api.steampowered.com',
    port: 80,
    path: '/IPlayerService/GetOwnedGames/v0001/?key='+ steamAPIKey +
          '&steamid='+ steamid +
          '&format=json' +
          '&include_appinfo=1'
  }
  console.log(requestOptions);
  http.get(requestOptions, function(res){
     var body = '';
     res.on('data', function(chunk){
       body += chunk;
     });

     res.on('end', function(){
       var ownedGames = JSON.parse(body).response.games;
       ownedGames = ownedGames.map(function(game){
         delete game.has_community_visible_stats;
         return game;
       });
       callback(ownedGames);
     });
  }).on('error', function(e){
     console.error("Error getting user's games");
  })
}

// Use the SteamStrategy within Passport.
//   Strategies in passport require a `validate` function, which accept
//   credentials (in this case, an OpenID identifier and profile), and invoke a
//   callback with a user object.
passport.use(new SteamStrategy({
    returnURL: 'http://localhost:9001/auth/steam/return',
    realm: 'http://localhost:9001/',
    apiKey: steamAPIKey
  },
  function (identifier, profile, done) {
    console.log("in steam strategy");
    process.nextTick(function () {
      console.log("in next tick");
      profile = profile._json;
      console.log(profile);
      getUserGames(profile.steamid, function(ownedGames){
        User.findOneAndUpdate({'steamid': profile.steamid},
          {
            steamid: profile.steamid,
            personaname: profile.personaname,
            avatarfull: profile.avatarfull,
            ownedGames: ownedGames
          },
          {
            upsert: true
          },
          function (err, user) {
            if (err) {
              return done(err, false);
            }

            if (user) {
              console.log("User Found");
              return done(null, user);
            }
          }
        );
      });
    });
  }
));


var app = express();
app.use(express.static(__dirname + '/../web/'));
app.use(express.static(__dirname + '/../web/app'));

app.use(session({
  secret: process.env.EXPRESS_SECRET,
  name: 'sessionToken',
  resave: true,
  saveUninitialized: true,
  cookie: {
    expires: new Date(Date.now() + 60 * 10000),
    maxAge: 60 * 20000,
    httpOnly: false
  },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

// GET /auth/steam
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Steam authentication will involve redirecting
//   the user to steam.com.  After authenticating, Steam will redirect the
//   user back to this application at /auth/steam/return
app.get('/auth/steam',
  passport.authenticate('steam'),
  function (req, res) {
    // Will never reach here because of steam redirect
  });

// GET /auth/steam/return
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/steam/return',
  passport.authenticate('steam', {failureRedirect: '/'}),
  function (req, res) {
    if (req.user.registrationComplete){
      res.redirect('/#/home');
    }
    else{
      res.redirect('/#/register');
    }
  });

app.get('/user', ensureAuthenticated, function(req, res){
  if(req.user){
    console.log("/user: returning user");
    res.json(req.user);
  }
  else{
    console.log("/user: returning null");
    res.json({data: null});
  }
});

app.post('/user', ensureAuthenticated, function(req, res) {
  var authedUser = req.user;
  var user = req.body.user;
  if(user.steamid !== authedUser.steamid){
    res.status(403).send("Cannot update for a user that isn't you");
  }
  else{
    console.log(user);
    User.findOneAndUpdate(
      {steamid: authedUser.steamid} /*query:*/,
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

app.listen(9001);

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
  console.log("checking authentication for " + req.path)
  if (req.isAuthenticated()) {
    console.log("user is authenticated");
    return next();
  }
  else{
    console.log("sending error message");
    res.send(401, "Authentication Failed");
  }
}
