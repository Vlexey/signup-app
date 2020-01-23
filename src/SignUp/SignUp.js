import { Formik, Form } from "formik";

import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import FormHelperText from "@material-ui/core/FormHelperText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

import * as Yup from "yup";

import React from 'react'
import './SignUp.css'
import { withRouter, Redirect } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
   formControl: {
     margin: theme.spacing(1),
     minWidth: 120
   },
   selectEmpty: {
     marginTop: theme.spacing(2)
   }
 }));


 
 const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

function SignUp(props, {isLogin}) {
   const classes = useStyles();  
   
    if(isLogin){ 
       return <Redirect to="/" />
       }
 
   return (
      <div className="container">
      <Formik   initialValues={{
                    firstName: '',
                    lastName: '',                    
                    userName: '',                    
                    email: '',           
                    phone: '',                    
                    age: '',                    
                    password: '' ,
                    city: ''            
                }}
                validationSchema={Yup.object().shape({
                  firstName: Yup.string()
                    .min(2, "Name field should be longer then 2 characters")
                    .max(20, "Name field should be shorter then 20 characters")
                    .required("Name field is required"),
                  lastName: Yup.string()
                    .min(3, "Last name should be longer then 3 characters")
                    .max(20, "Last name should be shorter then 20 characters")
                    .required("Last name is required"),
                  userName: Yup.string()
                    .min(4, "Username name should be longer then 4 characters")
                    .max(20, "Username name should be shorter then 20 characters")
                    .required("Username name is required"),
                  email: Yup.string().email('Invalid email address').required('Email is required'),
                  phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone is required'),
                  city: Yup.string()
                    .min(3, "You should choose your city")                    
                    .required("City field is required"),
                  age: Yup.number()
                    .positive()
                    .integer()  
                    .min(12)
                    .max(80)                                      
                    .required("Phone is required"),
                  password: Yup.string().required('No password provided.') 
                     .min(6, 'Password is too short - should be more then 6 char.')
                     .matches(/[a-zA-Z]/, 'Password should contain only Latin letters.')
                })}                
                onSubmit={(values, {setSubmitting , resetForm}) => {
                  props.onSignUp()
                  setSubmitting(true)
                  resetForm() 
                  props.history.push('/')                 
                  console.log(values)
                  
                }}>

                {({ errors, touched, values, dirty, handleChange, handleBlur, isSubmiting, handleSubmit }) => (
                  <Form className="CreateTodoForm">
                  <h2>SignUp page</h2>

                  <div className="textInput">
                    <TextField
                      id="firstName"
                      name="firstName"
                      label="Your name"
                      placeholder="Type your name"
                      value={values.firstName}
                      helperText={errors.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.firstName && errors.firstName}
                      fullWidth
                    />
                  </div>
                  <div className="textInput">
                    <TextField
                      id="lastName"
                      name="lastName"
                      label="Last name"
                      placeholder="Type your lastname"
                      value={values.lastName}
                      helperText={errors.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.lastName && errors.lastName}
                      fullWidth
                    />
                  </div>
                  <div className="textInput">
                    <TextField
                      id="userName"
                      name="userName"
                      label="Username"
                      placeholder="username"
                      value={values.userName}
                      helperText={errors.userName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.userName && errors.userName}
                      fullWidth
                    />
                  </div>
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
                      id="phone"
                      name="phone"
                      type="tel"
                      label="Your phone"
                      placeholder="+38 (___) ___ __ __"
                      value={values.phone}
                      helperText={errors.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.phone && errors.phone}                      
                      fullWidth                     
                    />
                  </div>
                  <div className="textInput">
                    <TextField
                      id="age"
                      name="age"
                      type="text"
                      label="Age"
                      placeholder="type your age"
                      value={values.age}
                      helperText={errors.age}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.age && errors.age}
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

            
                  <FormControl className={classes.formControl}>
                    <Select
                      value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      displayEmpty
                      name="city"
                    >
                      <MenuItem value="" disabled>
                        Choose your city
                      </MenuItem>
                      <MenuItem value="Kiyv">Kiyv</MenuItem>
                      <MenuItem value="Moscow">Moscow</MenuItem>
                      <MenuItem value="New York">Ner York</MenuItem>
                      <MenuItem value="London">London</MenuItem>
                      <MenuItem value="Washington">Washington</MenuItem>
                      <MenuItem value="California">California</MenuItem>
                    </Select>
                    <FormHelperText>
                      {errors.city ? errors.city : null}
                    </FormHelperText>
                  </FormControl>
                  <div>
                     <Button 
                        type="submit"
                        color="primary"
                        variant="contained"
                        disabled={ 
                           errors.name ||
                            errors.lastName ||
                            errors.userName ||
                            errors.city ||
                            errors.email ||
                            errors.phone || 
                            errors.age ||
                            errors.password ||
                            !dirty ||
                            isSubmiting } 
                     >SignUp</Button>
                  </div>
                </Form>
                )}
            </Formik>
          </div>
    )
}
export default withRouter( SignUp )