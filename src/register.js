import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            name: ''
        },
        onSubmit: async (values) => {
            try {
                await axios.post("http://localhost:3001/register",values)
                navigate("/login")
            } catch (error) {
                console.log(error)
            }
        },
    });
  return (
      <div>
          <form onSubmit={formik.handleSubmit}>
          <label>Name</label>
          <input type="text" name='name' className='form-control' onChange={formik.handleChange} value={formik.values.name} />
          <label>E-Mail</label>
          <input type="email" name='email' className='form-control' onChange={formik.handleChange} value={formik.values.email} />
          <label>Password</label>
          <input type="password" name='password' className='form-control' onChange={formik.handleChange} value={formik.values.password}/>
          <label>Phone</label>
          <input type="number" name='phone' className='form-control' onChange={formik.handleChange} value={formik.values.phone} />
          <label>Age</label>
          <input type="age" name='age' className='form-control' onChange={formik.handleChange} value={formik.values.age} />
          <input className="btn btn-primary" type="submit"/>
          </form>
      </div>
  )
}

export default Register;
