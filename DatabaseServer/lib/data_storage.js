function DataStorage (){
  this._state = {}
}

DataStorage.prototype =  {
  addToState: function(string, callback) {
    var obj = this._parseURI(string)
    if (!obj) {
      return callback('{"message":"Incorrect Request Format"}', null)
    }
    Object.assign(this._state, obj);
    callback(null, JSON.stringify(obj))
  },

  retrieveValue: function(string, callback) {
    var key = (this._parseURI(string) || {})['key']
    if (this._state[key]) {
      callback(null, JSON.stringify({requested_value: this._state[key]}))
    }
    else {
      callback('{"message":"Resource Not Found"}', null)
    }
  },

  _parseURI: function(str){
    var stringMatch = (str || "").match(/(\w+)=(\w+)/);
    if (!stringMatch) { return null }
    else {
      var results = {}
      results[stringMatch[1]] = stringMatch[2]
      return results;
    }
  }
};

module.exports = DataStorage;
