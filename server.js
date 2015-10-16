/*Define dependencies.*/

var express = require("express");
var multer  = require('multer');
var bodyParser = require('body-parser');
// var request = require('request');
// var restAPI = require('./config/rest_api');

var app = express();
var routes = require('./app/routes');

app.uploadDone = false;

/*Configure the multer.*/

app.use(multer({ dest: './uploads/',
  rename: function (fieldname, filename) {
    return filename+Date.now();
  },
  onFileUploadStart: function (file) {
    console.log(file.originalname + ' is starting ...')
  },
  onFileUploadComplete: function (file) {
    console.log(file.fieldname + ' uploaded to  ' + file.path)
    app.uploadDone = true;
  }
}));

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

/*Handling routes.*/
routes.initialize(app);

/*Run the server.*/
app.listen(9016,function(){
    console.log("Working on port 9016");
});

module.exports = app;
