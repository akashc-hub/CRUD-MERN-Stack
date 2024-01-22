const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        unique : true,
        required : true,
    },
    age : {
        type : Number,

    },
});