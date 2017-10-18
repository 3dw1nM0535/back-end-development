//Server-side controller to handle data between database and API
function clickHandler (db) {
  var clicks = db.collection('clicks');

  this.getClicks = function (req, res) {
    var clickProjection = { _id: false };

    clicks.findOne({}, clickProjection, function (err, result) {
      if (err) {
        throw err;
      }

      if (result) {
        res.json(result);
      } else {
        clicks.insert({ clicks: 0 }, function (err) {
          if (err) { 
            throw err;
          }

          clicks.findOne({}, clickProjection, function (err, docs) {
            if (err) {
              throw err;
            }

            res.json(docs);
          });
        });
      }
    });
  };
}

module.exports = clickHandler;