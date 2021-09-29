const mongoose = require('mongoose');

// JWT Token user should login
// User can create blog

// creating schema for user

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
        
    },
    email:{
        type:String,
        required:false

    },
    dob:{
        type:Date,
        required:true

    }
})


const User = mongoose.model('User', userSchema);

module.exports = userSchema;
