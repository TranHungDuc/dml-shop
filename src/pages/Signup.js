

import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const Signup = () => {
    return <>
    <Meta title='Register'></Meta>
    <BreadCrumb title='Create Account' />
    <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
            <div className="col-12">
                <div className="auth-card">
                    <h3 className='text-center mb-3'>Create your account</h3>
                    <form action="" className='d-flex flex-column gap-15'>
                        <CustomInput 
                            type="text" 
                            name='name' 
                            placeholder='Name'
                        />
                        <CustomInput 
                            type="email" 
                            name='lastname' 
                            placeholder='Email'
                        />
                        <CustomInput 
                            type="tel" 
                            name='mobile' 
                            placeholder='Mobile Number'
                        />
                        <CustomInput 
                            className="mt-1"
                            type="password" 
                            name='password' 
                            placeholder='Password'
                        />
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
