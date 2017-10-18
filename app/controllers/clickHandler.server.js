//Import Schema for data entry validation
var Clicks = require('../models/clicks');

//Server-side controller to handle data between database and API
function clickHandler () {

  this.getClicks = function (req, res) {
    Clicks.findOne({}, { _id: false }).exec(function (err, result) {
      if (err) { 
        throw err;
      }

      if (result) {
        res.json(result);
      } else {
        var newDoc = new Clicks({ 'clicks': 0 });
        newDoc.save(function (err, doc) {
          if (err) {
            throw err;
          }

          res.json(doc);
        });
      }
    });
  };

  this.addClicks = function (req, res) {

    Clicks.findAndModify({}, { _id: 1 }, { $inc: { 'clicks': 1 } }, function (err, result) {
      if (err) {
        throw err;
      }

      res.json(result);
    });
  };

  this.resetClicks = function (req, res) {
    clicks.update({}, { 'clicks': 0 }, function (err, result) {
      if (err) {
        throw err;
      }

      res.json(result);
    });
  };
}

module.exports = clickHandler;