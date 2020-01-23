import { Formik, Form } from "formik";

import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

import * as Yup from "yup";

import React from 'react'
import './Login.css'

import { Redirect, withRouter } from 'react-router-dom';


function Login(props, {isLogin}) {

  if(isLogin){
    return <Redirect to="/" /> 
  }
  
  return (
      <div className="container">
       
      <Formik   initialValues={{    
                    email: '',   
                    password: ''                             
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string().email('Invalid email address').required('Email is required'),                 
                  password: Yup.string().required('No password provided.') 
                     .min(6, 'Password is too short - should be more then 6 char.')
                     .matches(/[a-zA-Z]/, 'Password should contain only Latin letters.')
                })}                
                onSubmit={(values, {setSubmitting , resetForm}) => {
                  props.onSignUp()
                  setSubmitting(true)
                  resetForm()
                  props.history.push('/')   
                }}>

                {({ errors, touched, values, dirty, handleChange, handleBlur, isSubmiting, handleSubmit }) => (
                  <Form className="CreateTodoForm">
                  <h2>Login page</h2>
                 
                  <div className="textInput">
                    <TextField
                      id="email"
                      name="email"
                      type="email"
                      label="Email"
                      placeholder="Your email"
                      value={values.email}
                      helperText={errors.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && errors.email}
                      fullWidth
                    />
                  </div>
                
                  <div className="textInput">
                    <TextField
                      id="password"
                      name="password"
                      type="password"
                      label="Password"
                      placeholder="type your password"
                      value={values.password}
                      helperText={errors.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.password && errors.password}
                      fullWidth
                    />
                  </div>            
                 
                  <div>
                     <Button 
                        type="submit"
                        color="primary"
                        variant="contained"
                        disabled={ 
                            errors.email ||                           
                            errors.password ||
                            !dirty ||
                            isSubmiting } 
                     >Login</Button>
                  </div>
                </Form>
                )}
            </Formik>
          </div>
    )
}
export default withRouter(Login)