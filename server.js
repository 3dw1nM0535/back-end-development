//Import express module to build server basing on the module
var express = require('express'); 

//Start the express module
var app = express();

//Get home route
app.get('/', function (req, res) {
  res.send('Hello world!');
});

//Server init
app.listen(8080, function () {
  console.log('Server running on port 8080!');
});