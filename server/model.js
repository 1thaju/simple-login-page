const mongoose = require ("mongoose")
const userschema = mongoose.Schema(
    {
        name : {
            type: String,
            require:[true,"enter your name"]
        },
        email : {
            type: String,
            require:true
        },
        password : {
            type: String,
            require:true
        }
    },
    {timestamps:true}
)
const User = mongoose.model('User',userschema)
module.exports = User