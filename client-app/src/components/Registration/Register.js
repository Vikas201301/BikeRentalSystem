import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import { toast } from 'react-toastify';


const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  

  //Handle input change


  const handleChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value 
  } );
  };


    // Handle submit form

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Registered all',formData);


    try{
      const response=await
      axios.post("http://localhost:5000/register",formData);
    
      toast.success("Register Successfully ")
      console.log(response)

    }
    catch
    (err)
    {
      toast.error("registeration failed")
      console.log(err);

    }
  };

  //adduser 

  

  return (
    <div className="container mt-5"
    style={{
      maxHeight:"350px",
      maxWidth:"500px"
    }}>
     
     <h1 className='text-center '>Register</h1>
      <form onSubmit={handleSubmit} className="w-50 mx-auto mb-500">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder='Enter your name  '
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            name="email" 
            placeholder='Enter E-mail '
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            placeholder='Enter passsword '
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
};

export default Register;
