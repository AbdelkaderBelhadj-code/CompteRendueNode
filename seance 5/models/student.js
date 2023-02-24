const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Student = new Schema ({
    Name : String,
    Age : Number,
    Note : Number
});

module.exports = mongoose.model('students',Student);