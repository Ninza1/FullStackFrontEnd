import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../styles/Home.css"

export const Home = () => {
  const [produtData, setProductData] = useState()
  const [err, setErr] = useState("")
  const [toggleModel, setToggleModel] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [formData, setFormData] = useState({ title: "", price: "", category: "" })

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/`)
      if (response.status === 200) {
        setProductData(response.data.data)

      }
      else {
        setErr("Failed to fetch product data");
      }
    } catch (err) {
      setErr(`Err while fetching:${err}`)
    }
  }

  useEffect(() => {
    fetchProduct();

  }, [])

  // Delte product 
  const handleDelete = async (productId) => {
    const token = localStorage.getItem("token")
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setProductData(produtData.filter(prod => prod.id !== productId))
    } catch (err) {
      setErr(`Err on deletion: ${err}`)
    }
  }

  const userId = localStorage.getItem("userId");

  //update product
  // const handleInputValue = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // }

  const openUpdateModal = (product) => {
    setProductData(product);
    setFormData({ title: product.title, price: product.price, category: product.category })
    setToggleModel(true)
  };

  const handleUpdate = async(e) => {
    e.preventDefault();
   
  }


  return (
    <>
      <div className="home">
        <div className="container">

          {err && <h4 className='text-danger mb-3'>{err}</h4>}
{/* modal code */}
{/* <div className="create-product">
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
                

              <div className="d-flex justify-content-between align-items-center gap-3">
                <button type="submit" className="btn btn-danger px-4 fw-medium" onClick={()=> setToggleModel(false)}>Create</button>
                <button type="submit" className="btn btn-info px-4 fw-medium" onClick={() => openUpdateModal(elem)}>Update</button>
                </div>                
            </form>
       
   </div> */}
{/* end modal code */}
          <div className=" py-5 d-flex flex-wrap align-items-center justify-content-between gap-3  ">
            {produtData ? produtData.map((elem) => (
              <div className="" key={elem._id} style={{ width: "32%" }}>
                <div class="card" >
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body text-start">
                    <h5 class="card-title">Title: {elem.title}</h5>
                    <p className='mb-2'>Price: {elem.price}</p>
                    <p>category: {elem.category}</p>
                    {userId === elem.seller._id &&
                      <div className="d-flex justify-content-between align-items-center">
                        <button className='btn btn-primary ' onClick={() => openUpdateModal(elem)}>update</button>
                        <button className='btn btn-danger ' onClick={() => handleDelete(elem._id)} >Delete</button>
                      </div>}
                  </div>
                </div>
              </div>
              
            ))
            :
            <p>No Blogs there, Plz create one</p>
          }
            
         



          </div>
        </div>
      </div>

    </>
  )

}



