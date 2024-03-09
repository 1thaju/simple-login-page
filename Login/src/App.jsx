import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup"
import Login from "./Login";
import HomePage from "./HomePage";


function App() {

  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
