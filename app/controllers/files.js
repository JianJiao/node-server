var app = require('../../server');

var files = {
  save: function(req, res) {
    if (app.uploadDone == true) {
      console.log(req.files);
      res.end("File uploaded.");
    } else {
      res.end('Upload failed');
    }
  },
}

module.exports = files;