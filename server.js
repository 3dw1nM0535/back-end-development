//Import express module to build server basing on the module
var express = require('express'); 

//Start the express module
var app = express();

//Get home route
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/index.html' );
});

//Server init
app.listen(8080, function () {
  console.log('Server running on port 8080!');
});