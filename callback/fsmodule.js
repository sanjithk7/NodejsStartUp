const fs = require('fs');
// Create a file
fs.writeFile('example.txt', 'This is example file', (err)=>{
    if(err)
        console.log(err);
    else {
        console.log('File successfully created');
        fs.readFile('./example.txt', 'utf8', (err, file) => {
            if(err)
                console.log(err);
            else
                console.log(file);
        })
    }
});

// fs.rename('./example.txt', 'renamed.txt', (err) => {
//     if(err)
//         console.log(err);
//     else
//         console.log('Rename is successful');
// });

// fs.appendFile('renamed.txt', '\n New data is appended', (err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('Appending is successful');
// });

// fs.unlink('renamed.txt', (err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('File is deleted');
// });