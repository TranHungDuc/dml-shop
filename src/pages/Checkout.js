
import watch from '../images/watch.jpg';

import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineArrowBackIos } from "react-icons/md";
import Container from '../components/Container';

const Checkout = () => {
  return (
    <>
    <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
            <div className="col-7">
                <div className="checkout-left-data">
                    <h3 className="website-name">
                        Devs Area
                    </h3>
                    <nav style={{"--bs-breadcrumb-divider": "'>'"}} aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/cart" className='text-dark underline-link'>Cart</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">Information</li>
                        </ol>
                    </nav>
                    <h4 className="title">
                        Contact Information
                    </h4>
                    <p className="user-detail">Name (name@email.com)</p>
                    <form action="" className='d-flex gap-15 flex-wrap justify-content-between'>
                        <div className='w-100'>
                            <select className='form-control form-select' id="">
                                <option value="" selected disabled>Select Country</option>
                            </select>
                        </div>
                        <div className='flex-grow-1'> 
                            <input type="text" className="form-control" placeholder='First name'/>
                        </div>
                        <div className='flex-grow-1'> 
                            <input type="text" className="form-control" placeholder='Last name'/>
                        </div>
                        <div className='w-100'> 
                            <input type="text" className="form-control" placeholder='Address'/>
                        </div>
                        <div className='w-100'> 
                            <input type="text" className="form-control" placeholder='Apartment, Suite, etc. (optional)'/>
                        </div>
                        <div className='flex-grow-1'> 
                            <input type="text" className="form-control" placeholder='City'/>
                        </div>
                        <div className='flex-grow-1'>
                            <select className='form-control form-select' id="">
                                <option value="" selected disabled>Select Province</option>
                            </select>
                        </div>
                        <div className='flex-grow-1'> 
                            <input type="text" className="form-control" placeholder='Zipcode'/>
                        </div>
                        <div className="w-100">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className='d-flex align-items-center'>
                                    <MdOutlineArrowBackIos className='mx-2'/>
                                    <Link to='/cart' className='text-dark underline-link'>Return to Cart</Link>
                                </div>
                                <Link to='/cart' className='button'>Continue shopping</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-5">
                <div className="border-bottom py-4"> 
                    <div className="d-flex gap-10 align-items-center">
                        <div className='w-75 d-flex gap-10'>
                            <div className='w-25 position-relative'>
                                <span 
                                    className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                                    style={{ top: "-10px", right: "0px" }}
                                >
                                    1
                                </span>
                                <img src={ watch } alt="prod" className='img-fluid' />
                            </div>
                            <div>
                                <h5 className="title">Something</h5>
                                <p className='mb-0'> Size / Color </p>
                            </div>
                        </div>
                        <div className='flex-grow-1'>
                            <h5>$ 100</h5>
                        </div>
                    </div>
                </div>
                <div className="border-bottom py-4">
                    <div className='d-flex justify-content-between align-items-center'>
                        <p>Subtotal</p>
                        <p>$ 10000</p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='mb-0'>Shipping</p>
                        <p className='mb-0'>$ 10000</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                    <h4>Total</h4>
                    <h5>$20000</h5>
                </div>
            </div>
        </div>
    </Container>
    </>
  )
}

export default Checkout
