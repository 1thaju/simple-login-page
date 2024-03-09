import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


function Signup() {
  const navigate = useNavigate()
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:3001/signup",{name,email,password})
    navigate("/login");

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className="name">
    <label for="exampleInputName" class="form-name">Full Name</label>
    <input type="name" class="form-control" id="exampleInputName"
    onChange={(e)=>{
      setName(e.target.value)
    }}
    />
  </div>
  <div className="email">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
     onChange={(e)=>{
      setEmail(e.target.value)
    }}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"
     onChange={(e)=>{
      setPassword(e.target.value)
    }}/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Signup
