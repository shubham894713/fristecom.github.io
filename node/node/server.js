const express = require('express');
const app = express();
const productRoutes = require('./module/product/product.routes');
const userRoutes = require('./module/user/user.routes');
const { connectDatabase } = require('./database/mongodb');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

connectDatabase();
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/products',productRoutes);
app.use('/users', userRoutes);



app.listen(5000,(err)=>{
    if(err){
        console.log("error",err);
    }
    console.log('server running on port =>',5000);
})
