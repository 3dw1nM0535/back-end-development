var ClickHandler= require(process.cwd() + '/app/controllers/clickHandler.server');


//Home route definition and api 

module.exports = function (app, db) {

  var clickHandler = new ClickHandler(db);

  app.route('/').get(function (req, res) {
    res.sendFile(process.cwd() + '/public/index.html');
  });

  app.route('/api/clicks').get(clickHandler.getClicks)
                          .post(clickHandler.addClicks)
                          .delete(clickHandler.resetClicks);
};