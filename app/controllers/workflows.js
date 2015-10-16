var request = require('request');

var restAPI = require('../../config/rest_api');


var workflows = {
  run: function(req, res) {
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
        var result = body1.toString();
        res.end(result);
      }
    });
  },
}

module.exports = workflows;

