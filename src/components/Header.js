

import React from 'react'
import { NavLink, Link } from "react-router-dom"
import { BsSearch } from "react-icons/bs"
import compare from '../images/compare.svg'
import wishlist from '../images/wishlist.svg'
import user from '../images/user.svg'
import cart from '../images/cart.svg'
import menu from '../images/menu.svg'

const Header = () => {
  return (
    <>
        <header className='header-top-strip py-3'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-6'>
                        <p className='text-white mb-0'>
                            Innovative Thinking for the Future
                        </p>
                    </div>
                    <div className='col-6'>
                        <p className='text-end text-white mb-0'>
                            Hotline:&nbsp;
                            <a className='text-white' href='tel:+84 888901609'>
                                +84 888901609
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </header>
        <header className="header-upper py-3">
            <div className="container-xxl">
                <div className="row align-items-center">
                    <div className="col-2">
                        <h2>
                            <Link to='/' className='text-white'>
                                Devs' Area
                            </Link>
                        </h2>
                    </div>
                    <div className="col-5">
                        <div class="input-group">
                            <input 
                                type="text" 
                                class="form-control py-2" 
                                placeholder="Search your desirable product here..." 
                                aria-label="Search your desirable product here..." 
                                aria-describedby="basic-addon2"
                            />
                            <button class="input-group-text p-3" id="basic-addon2">
                                <BsSearch className='fs-4'/>
                            </button>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="header-upper-link d-flex align-items-center justify-content-between">
                            <div>
                                <Link to='/compare' className='d-flex align-items-center gap-10 text-white headertag'>
                                    <img src={compare} alt="compare"/>
                                    <p className='mb-0'>
                                        Compare <br /> products
                                    </p>
                                </Link>
                            </div>
                            <div>
                                <Link to='/wishlist' className='d-flex align-items-center gap-10 text-white headertag'>
                                    <img src={wishlist} alt="wishlist"/>
                                    <p className='mb-0'>
                                        Favourite <br /> wishlist
                                    </p>
                                </Link>
                            </div>
                            <div>
                                <Link to='/login' className='d-flex align-items-center gap-10 text-white headertag'>
                                    <img src={user} alt="user"/>
                                    <p className='mb-0'>
                                        Log in <br /> my account
                                    </p>
                                </Link>
                            </div>
                            <div>
                                <Link to='/cart' className='d-flex align-items-center gap-10 text-white headertag'>
                                    <img src={cart} alt="cart"/>
                                    <div className="d-flex flex-column gap-10">
                                        <span className="badge bg-white text-dark">0</span>
                                        <p className='mb-0'>$500</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <header className="header-bottom py-3">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="menu-bottom d-flex align-items-center gap-30">
                        <div >
                            <div className="dropdown">
                                <button 
                                    className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" 
                                    type="button" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                >
                                    <img src={menu} alt=''/>
                                    <span className='me-5 d-inline-block'>Shop categories</span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item text-white" to="">
                                            Action
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item text-white" to="">
                                            Another action
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item text-white" to="">
                                            Something else here
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                            <div className='menu-links'>
                                <div className="d-flex align-items-center gap-15">
                                    <NavLink to='/' className='headertag'>Home</NavLink>
                                    <NavLink to='/product' className='headertag'>Our Store</NavLink>
                                    <NavLink to='/blog' className='headertag'>Blogs</NavLink>
                                    <NavLink to='/contact' className='headertag'>Contact</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header
