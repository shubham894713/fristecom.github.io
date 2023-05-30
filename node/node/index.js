// // const  clc = require("cli-color");
// // const { register, login } = require('./intro');

// // console.log(clc.red("Text in red"));
// // register('regex');
// // login('regex','*****');


// // const os = require('os');
// // console.log('os type => ', os.type());
// // console.log('os plantform =>', os.platform());
// // console.log('os architure =>', os.arch());
// // console.log('cpu details =>',os.cpus());
// // console.log('free memory =>', os.freemem());
// // console.log('total memory=>',os.totalmem());
// // console.log('uptime =>',os.uptime());
// // console.log('os version=>',os.version());

// //const path = require('path');
// // console.log('file name =>',path.dirname(__filename));
// // console.log('file name=>',path.basename(__filename));
// // console.log('extension name =>', path.extname(__filename));
// // console.log('parse file =>',path.parse(__filename));
// // console.log('route the addresses =>', path.join(__dirname,'order','app.js'));

// // const Emitter = require('events');
// // const myEmitter =  new Emitter();

// // myEmitter.on('holi', ()=>{
// //     console.log('we play with colours');
// // })

// // myEmitter.on('diwali',()=>{
// //     console.log('we do rituals');
// // });

// // myEmitter.on('diwali',()=>{
// //     console.log('we play with crackers');
// // });

// // myEmitter.emit('diwali');
// //const fs =  require('fs');
// // fs.mkdir(path.join(__dirname,'/test'),(err)=>{
// //     if(err){
// //         console.log('failed to created folder and reason is =>', err);
// //         return;
// //     }
// //     console.log('folder created successfully');
// //     return;
// // })
// // fs.writeFile(path.join(__dirname,'test','test.txt'),'delete hello from file',(err)=>{
// //     if(err){
// //         console.log('failed to write in file', err);
// //         return;
// //     }
// //     console.log('written successfully');
// //     return;
// // })
// // fs.appendFile(path.join(__dirname,'test','test.txt'),' file appended',(err)=>{
// //     if(err){
// //         console.log('failed to write in file', err);
// //         return;
// //    }
// //    console.log('written successfully');
// //    return;
// // })
// // fs.readFile(path.join(__dirname,'test','test.txt'),'utf-8',(err,data)=>{
// //     if(err) {
// //         console.log('failed to read in file', err);
// //         return; 
// //     }
// //     console.log(data);
// //     return;
// // }

// // const http = require('http');
// // const app = http.createServer((req,res)=>{
// //     console.log(req.url,req.url ==='/shubham', req.url =='/arpit');
// //     if(req.url ==='/shubham'){
// //         return res.end('welcome');
// //     }
// //     if(req.url =='/arpit'){
// //         return res.end('welcome to arpit');
// //     }
// //     return res.end('404 not found');
// // })
// // app.listen(3000,()=>{
// //     console.log('listenging to port on =>',3000);
// // })
// const express = require('express')
// const app = express()

// app.get('/arpit', function (req, res) {
//   res.send('welcome to arpit')
// })

// app.get('/shubham', function (req, res) {
//     res.send('welcome to shubham')
// })

// app.listen(2000,(err)=>{
//     if(err){
//         console.log("error",err);
//     }
//     console.log('server running on port =>',2001);
// })
// // 