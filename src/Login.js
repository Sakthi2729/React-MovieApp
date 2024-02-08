import React from 'react'
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as yup from "yup";
import { Link } from 'react-router-dom';



export default function Login() {
    const loginvalidationschema = yup.object({
    email: yup.string().required(),
    password: yup.string().required()
        
      });
    
      const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
         
        },
        validationSchema: loginvalidationschema,
        onSubmit: (values) => {
          console.log("Form Values:", values)
        }
      });
  return (
    <div className='add-form'>
      <h1>Login Page</h1>
      <TextField
        id="outlined"
        label="email"
        variant="outlined"
        value={formik.values.email}
        onChange={formik.handleChange}
        name="name"
        onBlur={formik.handleBlur}
        error={formik.touched.email && formik.errors.email}
        helperText={formik.touched.email && formik.errors.email ? formik.errors.email :null}
      /> 
      <TextField
        id="outlined-basic"
        label="passsword"
        variant="outlined"
        value={formik.values.password}
        onChange={formik.handleChange}
        name="poster"
        onBlur={formik.handleBlur}
        error={formik.touched.password && formik.errors.password}
        helperText={formik.touched.password && formik.errors.password ? formik.errors.password :null}
      />
      <Button variant="contained" type="submit">
        Login
      </Button>
      <h4>
                    Don't have an account ? Click here
                    <Link to={"/register"}> Register</Link>
                </h4>
        </div>
  )
}
