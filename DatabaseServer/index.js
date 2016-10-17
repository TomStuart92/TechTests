var http = require('http');
var url = require('url');
var queryString = require('querystring');
var DataStorage = require('./lib/data_storage.js')
var dataStorage = new DataStorage

this.server = http.createServer(function (req, res) {
  var parsedURL = url.parse(req.url)
  var params = queryString.parse(parsedURL.query)


  if (parsedURL.pathname == "/set" && req.method == 'GET') {
    dataStorage.addToState(params)
    res.writeHead(201, {'Content-Type': 'text/css'});
    res.end(parsedURL.query + " Added to Database");
  }

  else if (parsedURL.pathname == "/get" && req.method == 'GET') {
    var item = dataStorage.retrieveValue(params)
    res.writeHead(200, {'Content-Type': 'text/css'});
    res.end("Value retrieved - " + item);
  }

  else {
    res.writeHead(404, {'Content-Type': 'text/css'});
    res.end("Resource Not Found");
  }

});

exports.listen = function () {
  this.server.listen.apply(this.server, arguments);
};

exports.close = function (callback) {
  this.server.close(callback);
};
