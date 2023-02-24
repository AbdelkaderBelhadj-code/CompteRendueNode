const Student = require("../models/student.js");
const getStudent = (req, res, next) => {
  Student.find((err, students) => {
    if (err) {
      console.log("error:", err);
    } else {
      res.json({ titleMe: "les listes des student", students });
    }
  });
};

const saveStudent = (req, res, next) => {
   Student.findOne( {name: req.body.name}, (err, std)=> {
    // std === null => save() && "already exist"
    res.json({foundedStd: std});
   } );
};

const deleteStudent = (req, res, next) => {
  const id = req.params.id;
  Student.findByIdAndDelete(id, (err, students) => {
    console.log(students);

    res.redirect("/student");
  });
};

const updateStudent = (req, res, next) => {
  const studentId = req.params.id;
  console.log("Updating contact with ID:", studentId);
  console.log("New contact data:", req.body);

  Student.findByIdAndUpdate(
    studentId,
    { Name: req.body.name, Age: req.body.age },
    { new: true },
    (err, updateStudent) => {
      if (err) {
        console.log("Error updating student:", err);
        res.status(500).json({ error: "Could not update student." });
      } else {
        console.log("Updated contact:", updateStudent);
        res.json(updateStudent);
      }
    }
  );
};

const searchStudent = (req, res, next) => {
  Student.findById(req.params.id, (err, students) => {
    res.json(students);
  });
};

const searchStudentByName = (req, res, next) => {
  console.log("detail", req.params.name);
  Student.find({ Name: req.params.name }, (err, students) => {
    res.json(students);
  });
};

 const displayAge = (req,res,next) => {
   Student.find({age:{$gt:18}},(err,students)=>{
    if(err)console.log("error:"+err);
    else{
      res.json(students);
    }
   });

 }

 const displayStudent = (req,res,next) => {
  Student.find({age:{$gt:18}}&&{name:{$regex:"^A"}},(err,students)=>{
    if(err)console.log("error:"+err);
    else{
      res.json(students);
    };
  })
 }

 


module.exports = {
  getStudent,
  saveStudent,
  deleteStudent,
  updateStudent,
  searchStudent,
  searchStudentByName,
  displayAge,
  displayStudent
};
