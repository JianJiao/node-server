/*Define dependencies.*/

var express=require("express");
var multer  = require('multer');
var bodyParser = require('body-parser');
var request = require('request');
var restAPI = require('./config/rest_api');

var app=express();
var done=false;

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
  done=true;
}
}));

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

/*Handling routes.*/

// app.get('/',function(req,res){
//       res.sendfile("index.html");
// });

app.post('/vistrails', function(req, res){
  console.log(req.body);
  var options = {
    url: restAPI.vistrails
    ,body: req.body
    ,json:true
  };
  request.post(options, function(err1, res1, body1){
    if(err1){
      console.log(err1);
      res.end(err1);
    }else{
      console.log(body1);
      res.end(body1);
    }
  })
  //res.end("request to /vistrails received");

});

  // var options = {
  //     url : rest_api.start_measurement,
  //     json: true
  // };
  // request.post(options, function(err, res, body){
  //   if(err){
  //     callback(err, null);
  //     return;
  //   }
  //   else{
  //     console.log("Memory Measurement Started");
  //     console.log(body);
  //     callback(null, null);
  //     return;
  //     }
  // });

app.post('/upload',function(req,res){
  if(done==true){
    console.log(req.files);
    res.end("File uploaded.");
  }
});

/*Run the server.*/
app.listen(9016,function(){
    console.log("Working on port 9016");
});