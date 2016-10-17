var Browser = require("zombie");
var browser = new Browser();
var server = require('../../index.js');
var url = "http://localhost:4000";

describe("retrieving_key_from_object", function() {

  beforeEach(function(){
    server.listen(4000);
  });

  afterEach(function(){
    server.close();
  });

  it("should successfully return params data on /set path", function(next) {
    browser.visit(url + '/set?name=tom', function(err) {
      browser.visit(url + '/get?key=name', function(err) {
        expect(browser.html("body")).toContain("Value retrieved - tom")
        next();
      })
    });
  });


});
