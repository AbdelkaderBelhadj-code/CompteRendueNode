const express = require('express');
const router = express.Router();
var Contact = require('../models/contact.js');

//router.get('/',(req,res,next)=>{
//    res.json({message :'Hello World'});
//});

router.get('/',(req,res,next)=>{
    
    Contact.find((err,contacts) => {
        if(err){
        console.log('error:',err);}
        else{
            res.json({titleMe :"les listes des contactes", contacts});
        }
    });
});

router.post('/',(req,res,next)=>{
    var contact = new Contact({fullName:req.body.contactName , phone:req.body.contactNumber})
    contact.save((err,newContact)=>{
        if(err){
            console.log('there is an error',err);
        }else{
            res.json(newContact);
        }
    });
});

//router.delete('/',(req,res,next)=>{

//})


module.exports = router;