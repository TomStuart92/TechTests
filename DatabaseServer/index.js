var http = require('http');
var url = require('url');

this.server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/css'});
  res.end();
});

exports.listen = function () {
  this.server.listen.apply(this.server, arguments);
};

exports.close = function (callback) {
  this.server.close(callback);
};
