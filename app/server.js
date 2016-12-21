
/* INCLUDE PRACKAGES */
var path = require('path');
var debug = require('debug')('node-rest:server');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;
var INDEX_ROUTES = require('./routes/index.js');
var DATA_ROUTES = require('./routes/data.js');


var express = require('express');
var app = express();
mongoose.connect('localhost:27017/home_page')

// view engine setup
app.set('views', path.join(__dirname, '../public/views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '/../public')));
console.log("__dirname = %s", path.resolve(__dirname+'/../public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/*
 *	SET RESPONSE params
*/
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/save', DATA_ROUTES);
app.use('/', INDEX_ROUTES);

var http = require('http');
var server = http.createServer(app);
server.listen(PORT);

server.on('error', onError);
server.on('listening', onListening);



/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
