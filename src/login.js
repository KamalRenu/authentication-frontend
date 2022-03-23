import { useFormik } from 'formik';
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            name: ''
        },
        onSubmit: async (values) => {
            try {
                let loginData = await axios.post("http://localhost:3001/login",values)
                window.localStorage.setItem("my_token",loginData.data.token)
                navigate("/dashboard")
            } catch (error) {
                console.log(error)
            }
        },
    });
  return (
      <div>
          <form onSubmit={formik.handleSubmit}>
              <label>E-Mail</label>
              <input name='email' type='email' onChange={formik.handleChange} value={formik.values.email} />
              <label>Password</label>
              <input name='password' type='password' onChange={formik.handleChange} value={formik.values.password} />
              <input className='btn btn-primary' type="submit" />
          </form>
      </div>
  )
}

export default Login;
