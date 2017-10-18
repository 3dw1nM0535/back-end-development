//Import express module to build server basing on the module
var express = require('express'); 
var routes = require('./app/routes/index');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');


//Start the express module
var app = express();

require('dotenv').load();
require('./app/config/passport')(passport);

//session Middleware
app.use(session({
  secret: 'secretEdwin',
  resave: false,
  saveUninitialized: true
}));

//passport initialize Middleware
app.use(passport.initialize());
app.use(passport.session());


//Connect to database
mongoose.connect(process.env.MONGO_URI, { useMongoClient: true });

//mongoose Promise Middleware
mongoose.Promise = global.Promise;

//Static file Middleware
app.use('/public', express.static(process.cwd() + '/public'));
app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/common', express.static(process.cwd() + '/app/common'));

routes(app, passport);

//Port definition
var port = process.env.PORT || 8080;

//Server init
app.listen(8080, function () {
  console.log('Server listening on port ' + port + '!');
});

