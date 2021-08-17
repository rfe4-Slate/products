var express = require('express');
var db = require('./db');
var app = express();
var morgan = require('morgan');// Middleware
var router = require('./routes.js');// Router
app.set('port', 3000); // port
// Logging and parsing
app.use(morgan('dev'));
app.use(express.json());

// Set up our routes
app.use('/', router);

// Serve the client files
app.use(express.static(__dirname + '/../client'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}



module.exports.app = app;