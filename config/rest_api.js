var host_url = process.env.REST_API_URL || "http://0.0.0.0:9018";

var RestAPI = {
  'vistrails' : host_url + '/vistrails'
};

// RestAPI.update_user = function(userName){
// 	  return host_url + '/user/' + userName; 
// 	}



module.exports = RestAPI;
