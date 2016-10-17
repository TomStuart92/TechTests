var http = require('http');
var url = require('url');
var queryString = require('querystring');
var DataStorage = require('./lib/data_storage.js')

this.server = http.createServer(function (req, res) {
  var parsedURL = url.parse(req.url)
  var params = queryString.parse(parsedURL.query)
  var dataStorage = new DataStorage

  if (parsedURL.pathname == "/set" && req.method == 'GET') {
    res.writeHead(201, {'Content-Type': 'text/css'});
    console.log(params);
    res.end(parsedURL.query);
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
