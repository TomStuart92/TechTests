var server = require('../../index.js');
var request = require('request');
var url = "http://localhost:5000";

describe("retrieving_key_from_object", function() {

  beforeEach(function(next){
    server.listen(5000);
    request(url + '/set?name=tom', function(err, res, body){next()});
  });

  afterEach(function(){
    server.close();
  });

  it("should successfully return params data on /set path", function(next) {
    request(url + '/get?key=name', function(err, res, body){
      expect(body).toContain("tom");
      next();
    });
  });


});
