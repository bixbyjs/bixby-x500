exports = module.exports = function(IoC, logger) {
  var Parser = require('../lib/parser');
  
  
  var parser = new Parser();
  
  return Promise.resolve(parser)
    .then(function(parser) {
      var components = IoC.components('http://i.bixbyjs.org/x500/Class');
    
      return Promise.all(components.map(function(comp) { return comp.create(); } ))
        .then(function(clazzes) {
          clazzes.forEach(function(clazz, i) {
            var name = components[i].a['@name'];
            logger.info('Loaded X.500 class: ' + name);
            parser.class(name, clazz);
          });
        })
        .then(function() {
          return parser;
        });
    })
    .then(function(parser) {
      return parser;
    });
};

exports['@singleton'] = true;
exports['@require'] = [
  '!container',
  'http://i.bixbyjs.org/Logger'
];
