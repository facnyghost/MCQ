const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    question:{
        name:{type:String,trim:true},
        answer:[{type:String}],
        correct_answer:{type:String}
    }
},{timestamps:true})

module.exports = mongoose.model('Question',questionSchema)