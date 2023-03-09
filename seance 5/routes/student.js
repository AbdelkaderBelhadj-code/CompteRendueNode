const express = require("express");
const router = express.Router();
const { getStudent, saveStudent , deleteStudent , updateStudent ,studentsNoteSorted,updateStudentNoteWithNameA,searchStudent,deleteStudentName ,searchStudentByName,displayAge,displayStudent} = require("../services/student.js");

router.get('/',getStudent);
router.post('/',saveStudent);
//router.delete('/delete/:id',deleteStudent);
router.put('/update',updateStudent);
//router.put('/:id',updateStudent);
// router.get('/find/:id',searchStudent);
router.get('/find/:name',searchStudentByName);
router.get('/getage',displayAge);
//router.put('/filterStudent',displayStudent);
router.delete('/delete/:name',deleteStudentName);
router.get('/studentsNoteSorted',studentsNoteSorted);
router.put('/updateStudentNoteWithNameA',updateStudentNoteWithNameA);








module.exports = router 