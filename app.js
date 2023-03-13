const express = require('express');
const app = express();

const middleware = (req,res,next) =>{
    console.log(`middleware running just fine`);
    next();
    
}
 middleware();


app.get('/' ,(req,res) =>{
    res.send(`hello from server side `);
});

app.get('/about' ,middleware, (req,res) =>{
    res.send(`hello from about side `);
});

app.get('/contact' ,(req,res) =>{
    res.send(`hello from contact side `);
});


app.listen(4000,()=>{
    console.log(`server is running on port 40000`)
})


console.log(`HI YOOOOO`);
