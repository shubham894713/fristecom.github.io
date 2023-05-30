const mongoose = require('mongoose');

async function connectDatabase(){
    try{
        console.log("connecting to database");
        await mongoose.connect('mongodb://127.0.0.1:27017/vscode');
        console.log("connected to database succesfully");
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    connectDatabase
}