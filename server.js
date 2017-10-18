//Import express module to build server basing on the module
var express = require('express'); 
var routes = require('./app/routes/index');
var mongoose = require('mongoose');


//Start the express module
var app = express();

//Connect to database
mongoose.connect('mongodb://localhost:27017/clementinejs', { useMongoClient: true });

//mongoose Promise Middleware
mongoose.Promise = global.Promise;

//Static file Middleware
app.use('/public', express.static(process.cwd() + '/public'));
app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

routes(app);

//Server init
app.listen(8080, function () {
  console.log('Server running on port 8080!');
});



