var express = require('express')
  , passport = require('passport')
  , util = require('util')
  , session = require('express-session')
  , SteamStrategy = require('passport-steam').Strategy
  , dbConfig = require('./db.js')
  , mongoose = require('mongoose')
  , MongoStore = require('connect-mongo')(session)
  , User = require('./models/user.js');


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

// Use the SteamStrategy within Passport.
//   Strategies in passport require a `validate` function, which accept
//   credentials (in this case, an OpenID identifier and profile), and invoke a
//   callback with a user object.
passport.use(new SteamStrategy({
    returnURL: 'http://localhost:9001/auth/steam/return',
    realm: 'http://localhost:9001/',
    apiKey: process.env.STEAM_API_KEY
  },
  function (identifier, profile, done) {
    process.nextTick(function () {
      profile = profile._json;
      console.log(profile);
      User.findOneAndUpdate({'steamid': profile.steamid},
        {
          steamid: profile.steamid,
          personaname: profile.personaname
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
    res.redirect('/omq');
  });

app.get('/omq',
  function (req, res) {
    //console.log(res.cookie());
    //res.json(req.session);
  });

app.listen(9001);

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}
