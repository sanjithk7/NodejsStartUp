const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();
// const readStream = fs.createReadStream('./example.txt','utf8');
// const writeSteam = fs.createWriteStream('example2.txt.gz');

const readStream1 = fs.createReadStream('./example2.txt.gz');
const writeSteam1 = fs.createWriteStream('uncompressed.txt');
// readStream.on('data',(chunk)=>{
//     writeSteam.write(chunk);
// });

// Pipe example
// readStream.pipe(gzip).pipe(writeSteam);
readStream1.pipe(gunzip).pipe(writeSteam1);