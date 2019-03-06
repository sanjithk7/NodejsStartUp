const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    if(req.url === '/') {
        res.write('from nodejs');
    } else {
        res.write('from some other domain');
    }
    // res.write('Hello world from node js');
    res.end();
});

server.listen(3000);