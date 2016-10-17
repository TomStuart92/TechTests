function DataStorage (){
  this._state = {}
}

DataStorage.prototype =  {
  addToState: function(key, value) {
    this._state[key] = value;
  },
  retrieveValue: function(key) {
    return this._state[key]
  }
};

module.exports = DataStorage;
