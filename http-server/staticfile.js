const http = require("http");
const fs = require("fs");
var server = http.createServer((req, res) => {
    var readStream = fs.createReadStream('./static/example.json');
    res.writeHead(200, {'Content-type' : 'application/json' });
    readStream.pipe(res);
});
server.listen(3000);