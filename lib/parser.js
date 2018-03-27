var merge = require('deep-extend');


function Parser() {
  this._classes = [];
}

Parser.prototype.class = function(name, clazz) {
  this._classes[name] = clazz;
}

Parser.prototype.parse = function(entry) {
  var ocs = entry.objectClass
    , obj = {}
    , clazz, po, i, len;
    
  obj.dn = entry.dn;
  
  for (i = 0, len = ocs.length; i < len; ++i) {
    clazz = this._classes[ocs[i]];
    if (clazz) {
      po = clazz.parse(entry);
      merge(obj, po);
    }
  }
  
  return obj;
}


module.exports = Parser;
