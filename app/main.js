exports = module.exports = function(parser) {
  var api = {};
  
  api.parse = function(entry) {
    return parser.parse(entry);
  };
  
  return api;
};

exports['@implements'] = 'http://i.bixbyjs.org/x500';
exports['@singleton'] = true;
exports['@require'] = [
  './parser'
];
