const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);

var answer = num1 + num2;

rl.question(`what is sum of ${ num1 } + ${ num2 } \n`, (userIp)=>{
    if(userIp.trim() == answer)
        rl.close();
    else {
        rl.setPrompt('Incorrect answer try again \n');
        rl.prompt();
        rl.on('line', (userIp)=> {
            if(userIp.trim() == answer)
                rl.close();
            else {
                rl.setPrompt(`Your answer ${ userIp } is incorrect. Try again \n`);
                rl.prompt();
            }
        });
    }
});

rl.on('close',function(){
    console.log('Correct answer!!!!!');
});