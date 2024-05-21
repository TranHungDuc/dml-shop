

import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { registerUser } from '../features/user/userSlice'
import { useDispatch } from 'react-redux'

const signUpSchema = yup.object({
    firstname: yup.string().required('First Name is Required'),
    lastname: yup.string().required('Last Name is Required'),
    email: yup.string().nullable().email('Email Should be Valid'),
    mobile: yup.string().required('Mobile No is Required'),
    password: yup.string().required('Password is Required')
  });

const Signup = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
          firstname: '',
          lastname: '',
          email: '',
          mobile: '',
          password: '',
        },
        validationSchema: signUpSchema,
        onSubmit: values => {
          dispatch(registerUser(values))
        },
      });
       
    return <>
    <Meta title='Register'></Meta>
    <BreadCrumb title='Create Account' />
    <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
            <div className="col-12">
                <div className="auth-card">
                    <h3 className='text-center mb-3'>Create your account</h3>
                    <form action="" onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                        <CustomInput 
                            type="text" 
                            name='firstname' 
                            placeholder='First Name'
                            values={formik.values.firstname}
                            onChange={formik.handleChange('firstname')}
                            onBlur={formik.handleBlur('firstname')}
                        />
                        <div className='error'>
                            {formik.touched.firstname && formik.errors.firstname}
                        </div>
                        <CustomInput 
                            type="text" 
                            name='lastname' 
                            placeholder='Last Name'
                            values={formik.values.lastname}
                            onChange={formik.handleChange('lastname')}
                            onBlur={formik.handleBlur('lastname')}
                        />
                        <div className='error'>
                            {formik.touched.lastname && formik.errors.lastname}
                        </div>
                        <CustomInput 
                            type="email" 
                            name='email' 
                            placeholder='Email'
                            values={formik.values.email}
                            onChange={formik.handleChange('email')}
                            onBlur={formik.handleBlur('email')}
                        />
                        <div className='error'>
                            {formik.touched.email && formik.errors.email}
                        </div>
                        <CustomInput 
                            type="tel" 
                            name='mobile'
                            placeholder='Mobile Number'
                            values={formik.values.mobile}
                            onChange={formik.handleChange('mobile')}
                            onBlur={formik.handleBlur('mobile')}
                        />
                        <div className='error'>
                            {formik.touched.mobile && formik.errors.mobile}
                        </div>
                        <CustomInput 
                            className="mt-1"
                            type="password" 
                            name='password' 
                            placeholder='Password'
                            values={formik.values.password}
                            onChange={formik.handleChange('password')}
                            onBlur={formik.handleBlur('password')}
                        />
                        <div className='error'>
                            {formik.touched.password && formik.errors.password}
                        </div>
                        <div>
                            <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                <button className="button border-0">Create</button>
                                <Link className="button signup">Cancel</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Container>
  </>
}

export default Signup
