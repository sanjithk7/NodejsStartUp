const fs = require('fs');
const readStream = fs.createReadStream('./example.txt','utf8');
const writeSteam = fs.createWriteStream('example2.txt');
readStream.on('data',(chunk)=>{
    writeSteam.write(chunk);
});