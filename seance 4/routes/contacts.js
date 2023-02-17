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

router.get("/find/:id", function (req, res, next) {
    Contact.findById(req.params.id, (err, contacts) => {
      res.json(contacts);
    });
  });
// delete contact
router.get("/delete/:id", function (req, res, next) {
  Contact.findByIdAndDelete(req.params.id, (err, contacts) => {
    console.log(contacts);
 
    res.redirect("/contacts");
  });
});

// PUT (update) a contact
router.put('/:id', (req, res, next) => {
    const contactId = req.params.id;
    console.log('Updating contact with ID:', contactId);
    console.log('New contact data:', req.body);

    Contact.findByIdAndUpdate(contactId, { fullname: req.body.contactName, phone: req.body.contactPhone }, { new: true }, (err, updatedContact) => {
        if (err) {
            console.log('Error updating contact:', err);
            res.status(500).json({ error: 'Could not update contact.' });
        } else {
            console.log('Updated contact:', updatedContact);
            res.json(updatedContact);
        }
    });
});






module.exports = router;