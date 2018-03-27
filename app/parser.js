exports = module.exports = function(IoC, logger) {
  var Parser = require('../lib/parser');
  
  
  var parser = new Parser();
  
  return Promise.resolve(parser)
    .then(function(parser) {
      var components = IoC.components('http://i.bixbyjs.org/x500/Class');
    
      return Promise.all(components.map(function(comp) { return comp.create(); } ))
        .then(function(prompts) {
          prompts.forEach(function(prompt, i) {
            var name = components[i].a['@name'];
            logger.info('Loaded X.500 class: ' + name);
            //dispatcher.use(name, prompt.begin, prompt.resume, prompt.finish);
          });
        })
        .then(function() {
          return dispatcher;
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
