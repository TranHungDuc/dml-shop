

import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram, BsTwitter } from "react-icons/bs";
import newsletter from '../images/newsletter.png'

const Footer = () => {
  return <>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-5">
            <div className="footer-top-data d-flex gap-30 align-items-center">
              <img src={newsletter} alt="newsletter" />
              <h2 className='mb-0 text-white'>Sign up for Newsletter</h2>
            </div>
          </div>
          <div className="col-7">
            <div class="input-group">
              <input 
                  type="text" 
                  class="form-control py-1" 
                  placeholder="Your email address..." 
                  aria-label="Your email address..." 
                  aria-describedby="basic-addon2"
              />
              <Link class="input-group-text p-2" id="basic-addon2">
                  Subscribe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-4">
            <h4 className='text-white mb-4'>Contact Us</h4>
            <div className='footer-links d-flex flex-column'>
              <address className='text-white fs-6'>
                DXC Store <br/>
                No. 144 Xuan Thuy, Cau Giay, 11300 <br/>
                Hanoi, Vietnam 
              </address>
              <a 
                href="tel:+84 888901609" 
                className="mt-3 d-block mb-1 text-white"
              >
                +84 888901609
              </a>
              <a 
                href="mailto:dxcanh@gmail.com" 
                className="mt-2 d-block mb-0 text-white"
              >
                dxcanh@gmail.com
              </a>
              <div className="social_icons d-flex align-items-center gap-30 mt-4">
                <a className='text-white' href="#">
                  <BsLinkedin className='fs-4'/>
                </a>
                <a className='text-white' href="#">
                  <BsInstagram className='fs-4'/>
                </a>
                <a className='text-white' href="#">
                  <BsYoutube className='fs-4'/>
                </a>
                <a className='text-white' href="#">
                  <BsGithub className='fs-4' />
                </a>
                <a className='text-white' href="#">
                  <BsTwitter className='fs-4' />
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <h4 className='text-white mb-4'>Information</h4>
            <div className='footer-links d-flex flex-column'>
              <Link to='privacy-policy' className='text-white py-2 mb-1 underline-link'>Privacy policy</Link>
              <Link to='refund-policy' className='text-white py-2 mb-1 underline-link'>Refund policy</Link>
              <Link to='delivery-policy' className='text-white py-2 mb-1 underline-link'>Delivery policy</Link>
              <Link to='terms-and-conditions' className='text-white py-2 mb-1 underline-link'>Terms & Conditions</Link>
              <Link to='blog' className='text-white py-2 mb-1 underline-link'>Blogs</Link>
            </div>
          </div>
          <div className="col-3">
            <h4 className='text-white mb-4'>Accounts</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1 underline-link'>About us</Link>
              <Link className='text-white py-2 mb-1 underline-link'>FAQs</Link>
              <Link className='text-white py-2 mb-1 underline-link'>Contacts</Link>
            </div>
          </div>
          <div className="col-2">
            <h4 className='text-white mb-4'>Quick Links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1 underline-link'>Laptops</Link>
              <Link className='text-white py-2 mb-1 underline-link'>Smartphones</Link>
              <Link className='text-white py-2 mb-1 underline-link'>Tablets</Link>
              <Link className='text-white py-2 mb-1 underline-link'>Headphones</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 text-white">
              &copy; { new Date().getFullYear() }; Powered by Devs' Area
            </p>
          </div>
        </div>
      </div>
    </footer>
  </>
}

export default Footer
