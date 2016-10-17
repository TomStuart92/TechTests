var DataStorage = require("../lib/data_storage.js")

describe("Data Storage Module", function() {

  beforeEach(function(){
    dataStorage = new DataStorage();
  });

  it("is initialized with an empty state", function() {
    expect(dataStorage._state).toEqual({});
  });

  it("can add items to state", function(next) {
    dataStorage.addToState("name=tom", function(err, success){
      expect(success).toEqual('{"name":"tom"}');
      next();
    });
  });

  it("can handle errors on set", function(next) {
    dataStorage.addToState("nametom", function(err, success){
      expect(err).toEqual('{"message":"Incorrect Request Format"}');
      next();
    });
  });

  it("can handle nil params", function(next) {
    dataStorage.addToState("", function(err, success){
      expect(err).toEqual('{"message":"Incorrect Request Format"}');
      next();
    });
  });

  it("can retrieve items from state", function(next) {
    dataStorage.addToState("name=tom", function(err, success){})
    dataStorage.retrieveValue("key=name", function(err, success){
      expect(err).toEqual(null);
      next();
    })
  });

  it("can handle errors on get", function(next) {
    dataStorage.addToState("name=tom", function(err, success){})
    dataStorage.retrieveValue("key=prenom", function(err, success){
      expect(err).toEqual('{"message":"Resource Not Found"}');
      next();
    })
  });

  it("can handle no params on get", function(next) {
    dataStorage.addToState("name=tom", function(err, success){})
    dataStorage.retrieveValue("", function(err, success){
      expect(err).toEqual('{"message":"Resource Not Found"}');
      next();
    })
  });
});
