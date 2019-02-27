const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  var myCallback = function(data) {
    res.end('Added data: '+data);
  };
  
  var addition = function(callback) {
      var arr = [1,2,3,4,5];
      var data = 0;
      for (var i =0 ; i < arr.length; i++) {
          data = data + arr[i];
      }
    callback(data.toString());
  };

  addition(myCallback);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});