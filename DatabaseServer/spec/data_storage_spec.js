var DataStorage = require("../lib/data_storage.js")

describe("Data Storage Module", function() {

  beforeEach(function(){
    dataStorage = new DataStorage();
  });

  it("is initialized with an empty state", function() {
    expect(dataStorage._state).toEqual({});
  });

  it("can add items to state", function() {
    dataStorage.addToState("name","tom")
    expect(dataStorage._state).toEqual({"name": "tom"});
  });

  it("can retrieve items from state", function() {
    dataStorage.addToState("name","tom")
    expect(dataStorage.retrieveValue("name")).toEqual("tom");
  });
});
