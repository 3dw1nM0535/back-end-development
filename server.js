//Import express module to build server basing on the module
var express = require('express'); 
var routes = require('./app/routes/index');
var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/clementinejs';

//Start the express module
var app = express();

mongo.connect(url, function (err, db) {
  if(err) {
    throw new Error('Database failed to connect!');
  } else {
    console.log('Coonection to databse was successfull!');
  }

  //Static file Middleware
  app.use('/public', express.static(process.cwd() + '/public'));
  app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

  routes(app, db);
  
  //Server init
  app.listen(8080, function () {
    console.log('Server running on port 8080!');
  });
  
});

