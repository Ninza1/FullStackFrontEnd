import React, { useState } from 'react'
import "../styles/Login.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


export const Signup = () => {
    const[singupData, setSingupData] = useState({name:"", email:"", password:"", role:""})
    const[err, setErr] = useState("")
    const navigate = useNavigate()


    const handleInputValue = (e) =>{
       const{name, value} = e.target;
       setSingupData({...singupData, [name]:value} )
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();

        try{
           
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/signup`, singupData)
            
            if(response.status === 201) {
                alert("You have registered successfully!")
                navigate("/login")

            }
        }catch(err){
            setErr("Registration Failed!")
        }
    }
    return (
        <div className="singup">
            <h3 className='mb-4 '>Signup</h3>
            {err && <p className='mb-3 text-danger'>{err}</p>}
            <form className=''>
                <div className="mb-3 text-start">
                    <label for="" className="form-label text-left fw-medium">Name</label>
                    <input type="text" className="form-control" name="name" id="name"  placeholder='Enter Name' onChange={handleInputValue} />
                </div>
                <div className="mb-3 text-start">
                    <label for="exampleInputEmail1" className="form-label text-left fw-medium">Email address</label>
                    <input type="email" className="form-control" name="email"  placeholder='example@gmail.com' onChange={handleInputValue} />
                </div>

                <div className="mb-3 text-start">
                    <label for="exampleInputPassword1" className="form-label fw-medium">Password</label>
                    <input type="password" className="form-control" name="password" placeholder='******' onChange={handleInputValue} />
                </div>
                <div className="mb-3 text-start">
                    <label for="exampleInputPassword1" className="form-label fw-medium">Role</label>
                    <select class="form-select" name="role"  onChange={handleInputValue}>
                        <option defaultValue>Select</option>
                        <option value="admin">Admin</option>
                        <option value="seller">Seller</option>
                        <option value="buyer">Buyer</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-info px-4 fw-medium" onClick={handleSubmit}>Signup</button>
                <p className='mt-3 fs-6 '>If you don't have an account! go to : <Link to="/login">Login</Link></p>
            </form>
        </div>
    )
}
