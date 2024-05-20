

import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const Login = () => {
  return <>
    <Meta title='Log In'></Meta>
    <BreadCrumb title='Account' />
    <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
            <div className="col-12">
                <div className="auth-card">
                    <h3 className='text-center mb-3'>Log In</h3>
                    <form action="" className='d-flex flex-column gap-15'>
                        <CustomInput 
                            type="email" 
                            name='email' 
                            placeholder='Email'
                        />
                        <CustomInput 
                            className="mt-1"
                            type="password" 
                            name='password' 
                            placeholder='Password'
                        />
                        <div>
                            <Link to='../forgotpassword' className='underline-link'>Forgot password? </Link>
                            <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                <button className="button border-0">Log In</button>
                                <Link to='../signup' className="button signup">Sign Up</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Container>
  </>
}

export default Login
