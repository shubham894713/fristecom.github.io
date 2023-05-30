// // const clc = require("cli-color");
// // const {register, login} = require('./intro');

// // console.log(clc.red("Text in red"));
// // console.log(clc.bold("Text in bold"));
// // console.log(clc.red.bgWhite.underline("Underlined red text on white background."));
// // console.log(clc.red("red " + clc.blue("blue") + " red"));
// // console.log(clc.red("red") + " plain " + clc.blue("blue"));
// // register('regex');
// // login('regex', '******');

// // const os = require('os');
// // console.log('os type =>',os.type());
// // console.log('os paltform =>',os.platform());
// // console.log('os architecture =>',os.arch());
// // console.log('cpu details =>',os.cpus());
// // console.log('free memory =>',os.freemem());
// // console.log('total memory =>',os.totalmem());
// // console.log('uptime =>',os.uptime());
// // console.log('os version=>',os.version());

// const path =require('path');
// // console.log('file name =>',path.dirname(__dirname));
// // console.log('file name =>',path.basename(__filename));
// // console.log('extension name =>',path.extname(__filename));
// // console.log('parse file =>',path.parse(__filename));
// // console.log('route the addresses =>',path.join(__dirname,'order','app.js'));

// // const Emitter = require('events');
// // const myEmitter = new Emitter();

// // myEmitter.on('holi', ()=>{
// //     console.log('we play with colours');
// // });

// // myEmitter.on('diwali', ()=>{
// //     console.log('we do rituals');
// // });c

// // myEmitter.on('diwali',()=>{
// //     console.log('we play with crackers');
// // });

// // myEmitter.emit('diwali');

// const fs = require('fs');
// // fs.mkdir(path.join(__dirname,'/test'),(err)=>{
// //     if(err){
// //         console.log('failed to created folder and reason is =>',err);
// //         return;
// //     }
// //     console.log('folder created successfully');
// //     return;
// // })
// // fs.writeFile(path.join(__dirname,'test','test.txt'),'delete hello from file',(err)=>{
// //     if(err){
// //         console.log('failed to write in file',err);
// //         return;
// //     }
// //     console.log('written successfully');
// //     return;
// // })
// // fs.appendFile(path.join(__dirname,'test','test.txt'),'file appended',(err)=>{
// //     if(err){
// //         console.log('failed to write in file',err);
// //         return;
// //     }
// //     console.log('written successfully');
// //     return;
// // })
// fs.readFile(path.join(__dirname,'test','test.txt'),'utf-8',(err,data)=>{
//     if(err) {
//         console.log('failed to read i file',err);
//         return;
//     }
//     console.log(data);
//     return;
// })

// const http = require('http');
// const app = http.createServer((req,res)=>{
//     console.log(req.url,req.url ==='/shubham', req.url =='/sandeep');
//     if (req.url ==='/shubham'){
//         return res.end('Welcome');
//     }
//     if(req.url =='/sandeep'){
//         return res.end('Welcome to sandeep');
//     }
//     return res.end('404 not found');
// })
// app.listen(3000,()=>{
//     console.log('listening to port on =>',3000)
// })

const express = require('express')
const app = express()

app.get('/sandeep', function (req,res){
    res.send('Welcome to sandeep')
})

app.get('/shubham',function (req,res){
    res.send('Welcome to Shubham')
})

app.listen(3000,(err)=>{
    if(err){
        console.log("error",err);
    }
    console.log('server running on port=>',3000);
})