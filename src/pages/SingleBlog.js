

import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { BsFacebook, BsPinterest, BsTwitter } from 'react-icons/bs'
import blog from '../images/blog-1.jpg'
import Container from '../components/Container'

const SingleBlog = () => {

    return <>
        <Meta title='Blog title'></Meta>
        <BreadCrumb title='A specific blog' />
        <Container class1="blog-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-3">
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Shop By Categories
                            </h3>
                            <div>
                                <ul className='ps-0'>
                                    <li>Watch</li>
                                    <li>TV</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="single-blog-card">
                            <h3 className="title mb-3">New era with Apple Vision Pro</h3>
                            <img 
                                src={blog}
                                className='img-fluid w-100' 
                                alt="blog" 
                            />
                            <p className='detail mt-3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel semper neque. 
                                Donec convallis augue ut suscipit porta. Nunc lobortis tellus tellus, id dictum purus scelerisque vel. 
                                Phasellus ac tristique augue, ut efficitur ex. Vivamus sed orci sed urna porttitor fermentum. Nullam sed libero arcu. 
                                Ut ultrices auctor accumsan. Vestibulum dictum dolor at arcu dictum, sed accumsan ipsum sollicitudin. 
                                Sed porttitor felis arcu, a iaculis lorem sodales eget.
                            </p>
                            <div className='d-flex flex-row nav-bar justify-content-between mt-4 py-3'>
                                <Link to='/blog' className='d-flex align-items-center gap-10 back-blog'>
                                    <HiOutlineArrowLeft className='fs-4'/> 
                                    <p className='mb-0 underline-link'>Back to blog page</p>
                                </Link>
                                <div className="d-flex align-items-center gap-30">    
                                    <a href='#'>
                                        <BsFacebook />
                                    </a>
                                    <a href='#'>
                                        <BsTwitter />
                                    </a>
                                    <a href='#'>
                                        <BsPinterest />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Container>        
    </>
}

export default SingleBlog
