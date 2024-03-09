const express = require("express")
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://thajulniyas100:1234567890@cluster1.tcsbo59.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1").then(()=>{
    console.log("connected to mongo db server")
}).catch(()=>{
    console.log("error occured")
})
var cors = require("cors")
const User = require("./model")
var app = express()
app.use(express.json())
app.use(cors())


app.post('/signup',async(req,res)=>{
    try {
        const user = await User.create(req.body)
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
    }
})
app.post('/login',async(req,res)=>{
    try {
        const {email,password} = req.body;
        User.findOne({email: email})
        .then(user =>{
            if(user){
                if(user.password === password){
                    res.json("Success")
                }
                else{
                    res.json("password failed")
                }
            }
            else{
                res.json("no user Existed")
            }
        })
    } catch (error) {
        console.log(error)
    }
})


app.listen(3001,()=>{
    console.log("server running succesfully")
})

