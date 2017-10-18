//Model schema for clicks
 
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClickSchema = new Schema(
  { clicks: Number},
  { versionKey: false}
);

module.exports = mongoose.model('Click', ClickSchema);