var path = process.cwd();

var ClickHandler= require(path + '/app/controllers/clickHandler.server');


module.exports = function (app, passport) {

  function isLoggedIn (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect('/login');
    }
  }

  var clickHandler = new ClickHandler();

  //default route
  app.route('/').get(isLoggedIn, function (req, res) {
    res.sendFile(path + '/public/index.html');
  });

    //login route
  app.route('/login').get(function (req, res) {
    res.sendFile(path + '/public/login.html');
  });

  //logout route
  app.route('/logout').get(function (req, res) {
    req.logout();
    res.redirect('/login');
  });

  //user profile route
  app.route('/profile').get(isLoggedIn, function (req, res) {
    res.sendFile(path + '/public/profile.html');
  });

  //user api route
  app.route('/api/:id').get(isLoggedIn, function (req, res) {
    res.json(req.user.github);
  });

  //authenticate route
  app.route('/auth/github').get(passport.authenticate('github'));

  //callback authenticate url
  app.route('/auth/github/callback').get(passport.authenticate('github', {
    successRedirect: '/',
    failureRedirect: '/login'
  }));

  //api route handler
  app.route('/api/:id/clicks').get(isLoggedIn, clickHandler.getClicks)
                              .post(isLoggedIn, clickHandler.addClicks)
                              .delete(isLoggedIn, clickHandler.resetClicks);
};