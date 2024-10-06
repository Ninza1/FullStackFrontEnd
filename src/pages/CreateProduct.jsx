import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export const CreateProduct = () => {
const[createProduct, setCreateProduct] = useState({
  title:"",
  price:"",
  category:""
})
const[err, setErr] = useState("");
const navigate = useNavigate()

const handleInputValue = (e) =>{
  const{name, value} = e.target;
  setCreateProduct({...createProduct, [name]:value})
}


const handleCreate = async(event) =>{
  event.preventDefault();
  const token = localStorage.getItem("token")
  try{
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/products/`, createProduct, {
      headers:{
        Authorization: `Bearer ${token}`
      }
    })

    if(response.status === 200){
      alert("Product created successfully");
      navigate("/")
    }

  }catch(err){
    setErr(`Err while creating porduct: ${err}`)
  }
}
  return (
   <div className="create-product">
            <h3 className='mb-4'>Create Product</h3>
            {err && <p className='mb-3 text-danger'>{err}</p>}
            <form className=''>
                <div className="mb-3 text-start">
                    <label for="" className="form-label text-left fw-medium">Title*</label>
                    <input type="text" className="form-control" name="title" id="name"  placeholder='Type product title' onChange={handleInputValue} required/>
                </div>
                <div className="mb-3 text-start">
                    <label for="exampleInputEmail1" className="form-label text-left fw-medium">Price*</label>
                    <input type="number" className="form-control" name="price"  placeholder='Type price of product' onChange={handleInputValue} required />
                </div>

                <div className="mb-3 text-start">
                    <label for="exampleInputPassword1" className="form-label fw-medium">Category*</label>
                    <input type="text" className="form-control" name="category" placeholder='choths, electornics, health' onChange={handleInputValue}  required/>
                </div>
                

                <button type="submit" className="btn btn-info px-4 fw-medium" onClick={handleCreate}>Create</button>
                
            </form>
       
   </div>
  )
}
