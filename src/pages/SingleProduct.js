

import React, { useState } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import ProductCard from '../components/ProductCard'
import ReactStars from 'react-rating-stars-component'
import ReactImageZoom from 'react-image-zoom'
import Color from '../components/Color'
import { Link } from 'react-router-dom'
import { AiOutlineHeart, AiOutlineTruck } from 'react-icons/ai'
import { HiArrowPath } from "react-icons/hi2"
import Container from '../components/Container'

const SingleProduct = () => {
    const props = { 
        width: 400, 
        height: 500, 
        zoomWidth: 500, 
        img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
    };
    const [ orderedProduct, setOrderedProduct ] = useState(true);
    const copyToClipboard = (text) => {
        console.log("text", text);
        var textField = document.createElement("textarea");
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand("copy");
        textField.remove()
    }

    const closeModal = () => {};

    return <>
        <Meta title={"The Product"} />
        <BreadCrumb title="The Product" />
        <Container class1="main-product-wrapper py-5 home-wrapper-2">
                <div className="row py-3 bg-white">
                    <div className="col-6">
                        <div className="main-product-image">
                            <div>
                                {/* <ReactImageZoom {...props} /> */}
                                <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                        </div>
                        <div className="other-product-image d-flex flex-wrap gap-15">
                            <div>
                                <img 
                                    className='img-fluid'
                                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                    alt="" 
                                />
                            </div>
                            <div>
                                <img 
                                    className='img-fluid'
                                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                    alt="" 
                                />
                            </div>
                            <div>
                                <img 
                                    className='img-fluid'
                                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                    alt="" 
                                />
                            </div>
                            <div>
                                <img 
                                    className='img-fluid'
                                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                    alt="" 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="main-product-detail">
                            <div className="border-bottom">
                                <h3 className="title">
                                    Magnificent mechanical watch instead of a technical one :3
                                </h3>
                            </div>
                            <div className="border-bottom py-3">
                                <p className="price"> $100.00 </p>
                                <div className="d-flex align-items-center gap-10">
                                    <ReactStars 
                                        count={5} 
                                        size={24} 
                                        value='3' 
                                        edit={false} 
                                        activeColor='#ffd700' 
                                    />
                                    <p className="mb-0">(2 reviews)</p>
                                </div>
                                <a href="#review" className='underline-link text-secondary'>Write a review</a>
                            </div>
                            <div className="py-3">
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h5 className='product-detail-heading'>Detail 123:</h5>
                                    <p className='product-detail-data'>Info abc</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h5 className='product-detail-heading'>Detail 123:</h5>
                                    <p className='product-detail-data'>Info abc</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h5 className='product-detail-heading'>Detail 123:</h5>
                                    <p className='product-detail-data'>Info abc</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h5 className='product-detail-heading'>Detail 123:</h5>
                                    <p className='product-detail-data'>Info abc</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h5 className='product-detail-heading'>Detail 123:</h5>
                                    <p className='product-detail-data'>Info abc</p>
                                </div>
                                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                    <h5 className='product-detail-heading'>Size:</h5>
                                    <div className="d-flex flex-wrap gap-15">
                                        <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">XXL</span>
                                    </div>
                                </div>
                                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                    <h5 className='product-detail-heading'>Color:</h5>
                                    <div>
                                        <Color />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between gap-10 flex-row mt-2 mb-3">
                                    <div className="d-flex align-items-center gap-10 flex-row">
                                        <h5 className='product-detail-heading'>Quantity:</h5>
                                        <div className="">
                                            <input 
                                                type="number" 
                                                name="" 
                                                min={1} 
                                                max={999} 
                                                style={{ width: "75px" }}
                                                className='form-control'    
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center gap-15 align-items-center">
                                        <button className="button border-0">Add to Cart</button>
                                        <Link className="button signup">Buy Now</Link>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <div>
                                        <a href="" className='d-flex align-items-center underline-link'>
                                            <HiArrowPath className='mx-1 fs-5'/>
                                            Add to Compare
                                        </a>
                                    </div>
                                    <div>
                                        <a href="" className='d-flex align-items-center underline-link'> 
                                            <AiOutlineHeart className='mx-1 fs-5'/>
                                            Add to Wishlist
                                        </a>
                                    </div>
                                </div>
                                <div className="d-flex gap-10 align-items-center mt-4 mb-3">
                                    <h3 className="policy mb-0"> Product Link: </h3>
                                    <a 
                                        className='underline-link'
                                        href="javascript:void(0);"
                                        onClick={() => copyToClipboard("fake link")}
                                        > Copy link </a>
                                </div>
                                <div className="d-flex gap-10 flex-column my-3">
                                    <a 
                                        className="policy" 
                                        data-bs-toggle="collapse" 
                                        href="#collapseExample" 
                                        role="button" 
                                        aria-expanded="false" 
                                        aria-controls="collapseExample"
                                    >
                                        <AiOutlineTruck className='mx-1 fs-5'/>
                                        Delivery & Return Policy 
                                    </a>
                                    <div class="collapse" id="collapseExample">
                                        <p class="product-detail-data">
                                            Something about delivery days <br />
                                            Something about return policy, and this info is <b>special</b>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Container>
        <Container class1="description-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="bg-white p-3">
                            <h4>Description</h4>
                            <p>
                            Vestibulum ornare odio sem, eget tempus purus sodales eu. Duis ac odio ac magna luctus auctor vel at neque. Ut lacinia volutpat aliquet. Quisque placerat non felis a posuere. In ac consectetur dui, vitae lobortis massa. Nullam eget condimentum ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer accumsan nibh sit amet sapien sodales finibus. Proin ornare at dolor nec congue. Mauris et gravida purus.
                            </p>
                        </div>
                    </div>
                </div>
        </Container>
        <Container id='review' class1="review-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-12">
                    <div className="review-inner-wrapper">
                        <div className="review-head d-flex justify-content-between align-items-end">
                            <div>
                                <h3 className='mb-2'>Customers' reviews</h3>
                                <div className='d-flex align-items-center gap-10'>
                                    <ReactStars 
                                        count={5} 
                                        size={36} 
                                        value='4' 
                                        edit={false} 
                                        activeColor='#ffd700' 
                                    />
                                    <p className="mb-0">Based on 2 reviews</p>
                                </div>
                            </div>
                            { orderedProduct && (
                                <div>
                                    <a className='text-decoration-underline text-secondary' href="">Write a review</a>
                                </div>    
                            )}
                        </div>
                        <div className="review-form">
                        <form action="" className='d-flex flex-column gap-15 mt-4'>
                            <h5>Your review</h5>
                            <div>
                                <input type="text" className="form-control" placeholder='Name' />
                            </div>
                            <div>
                                <input type="text" className="form-control" placeholder='Email' />
                            </div>
                            <div className='review-detail'>
                                <div className="d-flex flex-row gap-10">
                                    <h6 className='my-2'>Rating: </h6>
                                    <ReactStars 
                                        className="my-2"
                                        count={5} 
                                        size={24} 
                                        value='0' 
                                        edit={true} 
                                        activeColor='#ffd700' 
                                    />
                                </div>
                                <div className="my-3">
                                    <input type="text" className="form-control" placeholder='Review title'/>
                                </div>
                                <div className="my-3">
                                    <textarea 
                                        name="" 
                                        id="" 
                                        className='w-100 form-control' 
                                        cols="30" 
                                        rows="10"
                                        style={{ height: 150 }}
                                        placeholder='Write your review here'
                                    />
                                </div>
                                <div className="my-3 review-submit-button">
                                    <button className="button border-0">Submit</button>
                                </div>
                            </div>
                        </form>
                        </div>
                        <div className="reviews mt-4">
                            <div className="review">
                                <div className="d-flex gap-10 align-items-center">
                                    <h6 className="mb-0"> DX Canh </h6>
                                    <ReactStars 
                                        count={5} 
                                        size={24} 
                                        value='4' 
                                        edit={false} 
                                        activeColor='#ffd700' 
                                    />
                                </div>
                                <p className="mt-3">
                                    This is a sincere and authentic review, not a fake one. This product has not been purchased but I've been paid to promote this
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        <Container class1="popular-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-12">
                    <h3 className="section-heading">
                    Products you may like
                    </h3>
                </div>
            </div>
            <div className="row">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </Container>

        <div 
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby='staticBackdropLabel'
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header py-0 border-0">
                        <button
                            type="button"
                            className='btn-close'
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body py-0">
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1 w-50">
                                <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                    alt="product"
                                    className='img-fluid'
                                />
                            </div>
                            <div className="d-flex flex-column flex-grow-1 w-50">
                                <h6 className="mb-3">Someproduct</h6>
                                <p className="mb-1">Quantity: X</p>
                                <p className="mb-1">Color: unknown</p>
                                <p className="mb-1">Size: unknown</p>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer border-0 py-0 justify-content-center gap-30">
                        <button type="button" className='button' data-bs-dismiss="modal">
                            View My Cart
                        </button>
                        <button type="button" className='button signup'>
                            Checkout
                        </button>
                    </div>
                    <div className="d-flex justify-content-center py-3">
                        <Link
                            className='text-dark'
                            to='/product'
                            onClick={() => {
                                closeModal();
                            }}
                        >
                            Continue to Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default SingleProduct
