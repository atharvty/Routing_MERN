const express = require('express');
const router = express.Router();
require('../db/conn');
const User = require("../model/userSchema");
router.get('/' ,(req,res) =>{
    res.send(`hello from router side `);
});


router.post('/signin', async (req,res)=>{
    try {
        const{email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({error:"Invalid"});

        }
        const userLogin = await User.findOne({email:email});
        console.log(userLogin);

        if(!userLogin){
            res.status(400).json({error:"user error"});
        }else{
            res.json({message:"user signin successfully"});
        }
        


        
    } catch (error) {
        console.log(err);
        
    }

})

router.post('/register' , async (req,res) =>{
    const {name , email , phone , work , password , cpassword} = req.body;
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:"Plz fill the req. fields properly "});

    }  

    try {
        const userExist = await User.findOne({email:email});

        if(userExist){
            return res.status(422).json({error:"Email already exist"});
        }
        
        const user = new User({name , email , phone , work , password, cpassword});
        const userRegister= await user.save();

        if(userRegister){
            res.status(201).json({message:"user registered successfuly"});

        }


        
             
            
        
    } catch (err) {
        console.log(err);
        
    }

    
    });

module.exports = router;