// const{ spawn } = require('child_process');

// const ptn = spawn('python',['script.py','world'])

// ptn.stdout.on('data',(data) =>{
//     console.log(`output is : ${data.toString()}`);
    
// })
const{ spawn } = require('child_process');

const ptn = spawn('java',['one.java','world'])

ptn.stdout.on('data',(data) =>{
    console.log(`output is : ${data.toString()}`);
    
})