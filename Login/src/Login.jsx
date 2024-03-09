import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Login() {
  const navigate = useNavigate()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const handleForm =(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/login",{email,password})
    .then(result => {
      console.log(result)
      if(result.data === "Success"){
        navigate('/home')
      }
    }).catch(err=>{
      console.log(err)
    })
  }
  return (
    <div>
      <form on onSubmit={handleForm}>
    <div className="email">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
      onChange={(e)=>{
        setEmail(e.target.value)
      }}/>
  
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1"
      onChange={(e)=>{
        setPassword(e.target.value)
      }}/>
    </div>
    <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  )
}

export default Login
