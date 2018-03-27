function Parser() {
  this._classes = [];
}

Parser.prototype.class = function(name, clazz) {
  this._classes[name] = clazz;
}

Parser.prototype.parse = function(entry) {
  /*
  var protos = this._protos
    , proto, ctx, i, len;
  for (i = 0, len = protos.length; i < len; ++i) {
    proto = protos[i];
    if (proto.canHandle(options)) {
      return proto.createConnection(options, readyListener);
    }
  }
  
  // TODO: only show protocol, host here
  throw new Error('Unsupported message service: ' + options.url);
  */
}


module.exports = Parser;
