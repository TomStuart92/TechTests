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
    request(url + '/set?name=tom', function(err, res, body){
      expect(body).toContain("name=tom")
      next();
    })
  });


});
