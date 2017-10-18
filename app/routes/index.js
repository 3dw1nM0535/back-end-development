var path = process.cwd();

var ClickHandler= require(path + '/app/controllers/clickHandler.server');

//Home route definition and api 

module.exports = function (app) {

  var clickHandler = new ClickHandler();

  app.route('/').get(function (req, res) {
    res.sendFile(path + '/public/index.html');
  });

  app.route('/api/clicks').get(clickHandler.getClicks)
                          .post(clickHandler.addClicks)
                          .delete(clickHandler.resetClicks);
};