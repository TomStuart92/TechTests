function DataStorage (){
  this._state = {}
}

DataStorage.prototype =  {
  addToState: function(object) {
    Object.assign(this._state, object)
  },
  retrieveValue: function(object) {
    var key = object["key"]
    return this._state[key]
  }
};

module.exports = DataStorage;
