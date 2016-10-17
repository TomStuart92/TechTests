var http = require('http');
var url = require('url');

this.server = http.createServer(function (req, res) {

  if (req.url == "/" && req.method == 'GET') {
    res.writeHead(200, {'Content-Type': 'text/css'});
    res.write("Welcome to the Database Server")
    res.end();
  }


});


exports.listen = function () {
  this.server.listen.apply(this.server, arguments);
};

exports.close = function (callback) {
  this.server.close(callback);
};
