function DataStorage (){
  this._state = {}
}

DataStorage.prototype =  {
  addToState: function(object) {
    Object.assign(this._state, object)
  },
  retrieveValue: function(key) {
    return this._state[key]
  }
};

module.exports = DataStorage;
