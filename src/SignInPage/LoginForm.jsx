import React, { useEffect } from 'react'
import { Login } from './UserSlice'
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {useNavigate} from "react-router-dom"
import { Box, Button, Container, TextField, Typography } from '@mui/material';
const LoginForm = () => {
    const {isAuthentication}=useSelector((state)=>state.Auth)
    const dispatch=useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
      const auth=localStorage.getItem('isAuthentication');
      if(auth==='true'){
        dispatch(Login({
          email:localStorage.getItem('email'),
          password:localStorage.getItem('password')
        }))
      }
    },[dispatch]);

    const validationSchema=Yup.object({
      email:Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
      password:Yup.string()
      .min(8,'Password must be at least 8 characters ')
      .required('Password is required'),
    });
const handleSubmit = (values,{setSubmitting})=>{
  if(values.email === 'admin@123' && values.password === '12345678')
{
  localStorage.setItem('isAuthentication','true')
  localStorage.setItem('email',values.email)
  localStorage.setItem('password',values.password)
  dispatch(Login(values))
  navigate('/home');
}
else
{
  alert('Invalid Email or Password');
}
setSubmitting(false)
};
  return (
    <div> 
     <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          SignIn
        </Typography>
        <Box
          sx={{
            mt: 1,
            p: 3,
            border: '1px solid #ccc',
            borderRadius: 1,
            width: '100%',
          }}
        >
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            validateOnBlur={true}
            validateOnChange={true}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, touched, errors }) => (
              <Form>
                <Field
                  as={TextField}
                  variant="outlined"
                  margin="normal"
                  // required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  error={touched.email && !!errors.email}
                  helperText={touched.email && <ErrorMessage name="email" />}
                />
                <Field
                  as={TextField}
                  variant="outlined"
                  margin="normal"
                  // required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={touched.password && !!errors.password}
                  helperText={touched.password && <ErrorMessage name="password" />}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={isSubmitting}
                >
                  Sign In
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Container>
      
    </div>
  )
}

export default LoginForm
