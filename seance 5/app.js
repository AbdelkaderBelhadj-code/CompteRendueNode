const express = require("express");
const createError = require("http-errors");
const app = express();

const mongoose = require("mongoose");
const dbConfig = require("./database/mongodb.json");
const studentRouter = require("./routes/student.js");

const logger = require("morgan");

app.subscribe(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/student',studentRouter);
app.use((req,res,next)=>{
    next(createError(404));
});

mongoose.connect(dbConfig.mongo.uri , {useNewUrlParser : true , useUnifiedTopology:true},()=>console.log("connected to DataBase 🚀"));


module.exports = app 