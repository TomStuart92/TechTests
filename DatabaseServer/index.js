var http = require('http');
var url = require('url');
var queryString = require('querystring');
var DataStorage = require('./lib/data_storage.js')
var dataStorage = new DataStorage

this.server = http.createServer(function (req, res) {
  var parsedURL = url.parse(req.url);
  var params = queryString.parse(parsedURL.query);

  var send_set_response = function(err, success){
    if (err) {
      res.writeHead(400, {'Content-Type': 'JSON'});
      res.end(err);
    }
    else {
      res.writeHead(201, {'Content-Type': 'JSON'});
      res.end(JSON.stringify(params));
    }
  };

  var send_get_response = function (err, success) {
    if (err) {
      res.writeHead(400, {'Content-Type': 'JSON'});
      res.end(err);
    }
    else {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.end(success);
    }
  }

  if (parsedURL.pathname == "/set" && req.method == 'GET') {
    dataStorage.addToState(params, send_set_response)
  }
  else if (parsedURL.pathname == "/get" && req.method == 'GET') {
    dataStorage.retrieveValue(params, send_get_response)
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
