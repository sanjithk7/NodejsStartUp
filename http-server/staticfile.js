const http = require("http");
const fs = require("fs");
var server = http.createServer((req, res) => {
    var readStream = fs.createReadStream('./static/index.html');
    
});
server.listen(3000);