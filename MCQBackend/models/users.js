const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        unique:true,
        required:true
    },
    scores:
        {
            type:Number,
            default:0
        }
    
},{timestamps:true})

module.exports = mongoose.model('User',userSchema)