//Import Schema for data entry validation
var Users = require('../models/user');

//Server-side controller to handle data between database and API
function clickHandler () {

  this.getClicks = function (req, res) {
    Users.findOne({ 'github.id': req.user.github.id }, { _id: false }).exec(function (err, result) {
      if (err) { 
        throw err;
      }

      res.json(result.nrbClicks);
    });
  };

  this.addClicks = function (req, res) {
    Users.findOneAndUpdate({ 'github.id': req.user.github.id }, { $inc: { 'nbrClicks.clicks': 1 }}).exec(function (err, result) {
      if (err) {
        throw err;
      }

      res.json(result.nbrClicks);
    });
  };

  this.resetClicks = function (req, res) {
    Clicks.findOneAndUpdate({ 'github.id': req.user.github.id }, { 'nbrClicks.clicks': 0 }).exec(function (err, result) {
      if (err) {
        throw err;
      }

      res.json(result.nbrClicks);
    });
  };
}

module.exports = clickHandler;