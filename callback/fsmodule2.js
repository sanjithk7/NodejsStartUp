var fs = require('fs');

// fs.mkdir('fsModule2',(err)=>{
//     if(err)
//         console.log(err);
//     else{
//         fs.rmdir('fsModule2', (err)=>{
//             if(err)
//                 console.log(err);
//             else{
//                 console.log('File is deleted successfully');
//             }
//         });
//     }
// });

fs.readdir('example',(err,files)=>{
    if(err)
        console.log(err);
    else {
        console.log(files);
        for (let file of files){
             fs.unlink('./example/'+file, (err) => {
                if(err)
                    console.log(err);
                else
                    console.log('file is deleted successfully');
             });
        }
    }
});