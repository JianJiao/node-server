var request = require('request');
var files = require('./controllers/files');
var workflows = require('./controllers/workflows');

var routes = {};

routes.initialize = function(app) {
  app.post('/vistrails', workflows.run);
  app.post('/upload', files.save);
}


module.exports = routes;



