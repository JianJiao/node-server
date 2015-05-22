/*Define dependencies.*/

var express=require("express");
var bodyParser = require('body-parser');

var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

/*Handling routes.*/

app.post('/vistrails', function(req, res){
  console.log(req.body);
  res.end("post request to /vistrails received");
});

/*Run the server.*/
app.listen(9018,function(){
    console.log("Working on port 9018");
});