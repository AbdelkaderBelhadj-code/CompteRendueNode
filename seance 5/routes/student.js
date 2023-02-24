const express = require("express");
const router = express.Router();
var Student = require("../models/student.js");
const { getStudent, saveStudent , deleteStudent , updateStudent , searchStudent ,searchStudentByName,displayAge,displayStudent} = require("../services/student.js");

router.get('/',getStudent);
router.post('/',saveStudent);
router.delete('/delete/:id',deleteStudent);
router.put('/:id',updateStudent);
// router.get('/find/:id',searchStudent);
router.get('/find/:name',searchStudentByName);
router.get('/getage',displayAge);
router.post('/filterStudent',displayStudent);






module.exports = router