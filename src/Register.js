import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from "yup";
import { Link } from 'react-router-dom';


export default function Login() {
    const loginValidationSchema = yup.object({
        email: yup.string().required(),
        password: yup.string().required().min(8),
    })
    const formik = useFormik({
        initialValues: {
            name : "",
            email : "",
            password : "",
        },
        validationSchema: loginValidationSchema,
        
        onSubmit: (values) => {
            console.log(values);
        }
    })
    return (
        <div className='add-form'>
            <h1>Login</h1>
            <TextField 
                id="outlined-basic" 
                label="Name" 
                variant="outlined" 
                placeholder='Name'
                value={formik.values.name}
                onChange={formik.handleChange}
                name="name"
                onBlur={formik.handleBlur}
                error={formik.touched.name && formik.errors.name}
                helperText={formik.touched.name && formik.errors.name?formik.errors.name : null}
            />
            <TextField 
                id="outlined-basic" 
                label="Email" 
                variant="outlined" 
                placeholder='Email'
                value={formik.values.email}
                onChange={formik.handleChange}
                name="email"
                onBlur={formik.handleBlur}
                error={formik.touched.name && formik.errors.email}
                helperText={formik.touched.name && formik.errors.email?formik.errors.name : null}
            />
            <TextField 
                id="outlined-basic" 
                label="Password" 
                variant="outlined" 
                placeholder='Password'
                value={formik.values.password}
                onChange={formik.handleChange}
                name='password'
                onBlur={formik.handleBlur}
                error={formik.touched.name && formik.errors.password}
                helperText={formik.touched.name && formik.errors.password?formik.errors.name : null}
            />
            <Button variant="contained" type='submit'>Submit</Button>
            <h4>
                Already have an account ? Click here
                <Link to={"/"}> Login</Link>
            </h4>
        </div>
  )
}