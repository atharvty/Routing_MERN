const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();

dotenv.config({path: './config.env'});

const PORT = process.env.PORT;
const User  = require('./model/userSchema');
app.use(express.json());
app.use(require('./router/auth'));




// const middleware = (req,res,next) =>{
//     console.log(`middleware running just fine`);
//     next();
    
// }
//  middleware();
require('./db/conn');


app.get('/' ,(req,res) =>{
    res.send(`hello from server side `);
});

app.get('/about' , (req,res) =>{
    res.send(`hello from about side `);
});

app.get('/contact' ,(req,res) =>{
    res.send(`hello from contact side `);
});


app.listen(4000,()=>{
    console.log(`server is running on port ${PORT}`)
})


console.log(`HI YOOOOO`);
