var DataStorage = require("../lib/data_storage.js")

describe("Data Storage Module", function() {

  beforeEach(function(){
    dataStorage = new DataStorage();
  });

  it("is initialized with an empty state", function() {
    expect(dataStorage._state).toEqual({});
  });

  it("can add items to state", function() {
    dataStorage.addToState({ name: 'tom' }, function(err, success){})
    expect(dataStorage._state).toEqual({"name": "tom"});
  });

  it("can handle errors on set", function() {
    dataStorage.addToState({ name: '' }, function(err, success){})
    expect(dataStorage._state).toEqual({});
  });

  it("can retrieve items from state", function(next) {
    dataStorage.addToState({ name: 'tom' }, function(err, success){})
    dataStorage.retrieveValue({ key: 'name' }, function(err, success){
      expect(err).toEqual(null);
      next();
    })
  });

  it("can handle errors on get", function(next) {
    dataStorage.addToState({ name: 'tom' }, function(err, success){})
    dataStorage.retrieveValue({ key: 'prenom' }, function(err, success){
      expect(err).toEqual('{"message":"Resource Not Found"}');
      next();
    })
  });

});
