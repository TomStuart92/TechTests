function DataStorage (){
  this._state = {}
}

DataStorage.prototype =  {
  addToState: function(obj, callback) {
    for(var key in obj) {
      if (obj[key] === '') {
        callback('{"message":"Incorrect Request Format"}', null)
      }
      else {
        Object.assign(this._state, obj)
        callback(null, obj)
      }
    }
  },

  retrieveValue: function(object) {
    var key = object["key"]
    return this._state[key]
  }
};

module.exports = DataStorage;
