const http = require('http');
const server = http.createServer((req, res) =>{
    if(req.url == '/') {
        res.write('hello from node js server');
    } else {
        res.write('hello from some other domain');
    }
    res.end();
});

server.listen(3000);