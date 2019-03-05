const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  var a = [10,20,30,40],  b = [20,10,50,100,10], c = [...a,...b];
  function removeDuplicates(arr) {
      var i = 0, len=arr.length, ansArray=[], finalObj={}; 
      while (i<len) {
          finalObj[arr[i]]=0;
          i++;
      }
      for (val in finalObj) {
          ansArray.push(parseInt(val));
      }
      return ansArray;
  }
  var result = removeDuplicates(c);
  res.end(result.toString());
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});