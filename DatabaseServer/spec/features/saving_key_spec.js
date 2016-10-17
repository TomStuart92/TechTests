var Browser = require("zombie");
var browser = new Browser();
var server = require('../../index.js');
var url = "http://localhost:4000/";

describe("saving_key_to_object", function() {

  beforeEach(function(){
    server.listen(4000);
  });

  afterEach(function(){
    server.close();
  });

  it("should successfully visit site", function(next) {
      browser.visit(url, function(err) {
          expect(browser.success).toBe(true);
          expect(browser.html("body")).toContain("Welcome to the Database Server")
          next();
      })
  });
});
