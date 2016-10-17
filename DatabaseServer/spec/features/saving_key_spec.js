var server = require('../../index.js');
var request = require('request');
var url = "http://localhost:5000";

describe("saving_key_to_object", function() {

  beforeEach(function(){
    server.listen(5000);
  });

  afterEach(function(){
    server.close();
  });

  it("should successfully return params data on /set path", function(next) {
    request(url + '/set?name=tom', function(error, response, body){
      expect(response.statusCode).toEqual(201);
      expect(body).toEqual('{"name":"tom"}');
      next();
    })
  });

  it("should return error on incorrect format", function(next) {
    request(url + '/set?nametom', function(error, response, body){
      expect(response.statusCode).toEqual(400);
      expect(body).toEqual('{"message":"Incorrect Request Format"}');
      next();
    })
  });

  it("should return error on no params", function(next) {
    request(url + '/set', function(error, response, body){
      expect(response.statusCode).toEqual(400);
      expect(body).toEqual('{"message":"Incorrect Request Format"}');
      next();
    })
  });
});
