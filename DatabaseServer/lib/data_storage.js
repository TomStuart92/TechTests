function DataStorage (){
  this._state = {}
}

DataStorage.prototype =  {
  addToState: function(obj, callback) {
    for(var key in obj) {
      if (obj[key] === '') {
        return callback('{"message":"Incorrect Request Format"}', null)
      }
        Object.assign(this._state, obj)
        callback(null, obj)
    }
  },

  retrieveValue: function(obj, callback) {
    var key = obj["key"]
    if (this._state[key])
      callback(null, this._state[key])
    else {
      callback('{"message":"Resource Not Found"}', null)
    }
  }
};

module.exports = DataStorage;
