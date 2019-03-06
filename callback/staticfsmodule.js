const http = require('http');
const fs = require('fs');
var server = http.createServer((req,res)=>{
    const readStream = fs.createReadStream('index.json');
    res.writeHead(200, {'Content-type' : 'application/json'});
    readStream.pipe(res);
    // res.end();
}).listen(3000);