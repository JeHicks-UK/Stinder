module.exports = {
  ensureAuthenticated: function (req, res, next) {
    console.log("checking authentication for " + req.path)
    if (req.isAuthenticated()) {
      console.log("user is authenticated");
      return next();
    }
    else {
      console.log("sending error message");
      res.status(401).send("Authentication Failed");
    }
  }
};
