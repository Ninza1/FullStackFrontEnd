import React, { useState } from 'react'
import "../styles/Login.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Login = () => {
const[loginData, setLoginData] = useState({email:"", password:""})
const[err, setErr] = useState("")
const navigate = useNavigate()

const handleInputValue = (e) =>{
    const{name, value} = e.target;
    setLoginData({...loginData, [name]:value})
}

const handleLogin = async(event) =>{
    event.preventDefault();
    try{
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, loginData)
      if(response.status ===200){
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("userId", response.data.userId)
     
        alert("You are successfully logned");
        navigate("/create-product")
      }
    }catch(err){
      setErr(`login failed, Plz try again ${err}`)
    }
}
  return (
    <div className="login">
        <h3 className='mb-4'>Login</h3>
        {err&& <p className='mb-3 text-danger'>{err}</p>}
   <form className=''>
 
  <div className="mb-3 text-start">
    <label for="exampleInputEmail1" className="form-label text-left fw-medium">Email address</label>
    <input type="email" className="form-control" name="email"  placeholder='example@gmail.com' onChange={handleInputValue}/>
  </div>
 
  <div className="mb-3 text-start">
    <label for="exampleInputPassword1" className="form-label fw-medium">Password</label>
    <input type="password" className="form-control" name="password" placeholder='******' onChange={handleInputValue}/>
  </div>
  
  
  <button type="submit" className="btn btn-info px-4 fw-medium" onClick={handleLogin}>Login</button>

  <p className='mt-3 fs-6 '>If you an account! go to : <Link to="/signup">Singup</Link></p>
</form>
    </div>
  )
}
