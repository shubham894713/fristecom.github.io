const mongoose  = require('mongoose');

async function connectDatabase(){
    try{
        console.log("connecting to database");
        await mongoose.connect('mongodb://127.0.0.1:27017/ecom');
        console.log("connected to database successfully");
    } catch(err){
        console.log(err);
    }
}

module.exports = {
    connectDatabase,
}