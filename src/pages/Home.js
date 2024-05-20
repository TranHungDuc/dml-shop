
import camera from '../images/camera.jpg';
import catbanner01 from '../images/catbanner-01.jpg';
import catbanner02 from '../images/catbanner-02.jpg';
import catbanner03 from '../images/catbanner-03.jpg';
import catbanner04 from '../images/catbanner-04.jpg';
import famous01 from '../images/famous-01.png';
import famous02 from '../images/famous-02.png';
import famous03 from '../images/famous-03.png';
import famous04 from '../images/famous-04.png';
import headphone from '../images/headphone.jpg';
import mainbanner1 from '../images/main-banner-1.jpg';
import speaker from '../images/speaker.jpg';
import tv from '../images/tv.jpg';

import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'
import Meta from '../components/Meta'
import Container from '../components/Container'
import { services } from '../utils/Data'

const Home = () => {
  return <>
    <Meta title='UET E-Commerce'></Meta>
    <Container class1='home-wrapper-1 py-5'>
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img 
                src={ mainbanner1 } 
                className='img-fluid rounded-3' 
                alt="main banner" 
              />
              <div className="main-banner-content position-absolute ">
                <h4>SUPERCHARGE FOR PROs.</h4>
                <h5>iPhone 15 Pro</h5>
                <p>From $999.00 <br/> or $41.62/mo. for 24 mo.</p>
                <Link className='button'>BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
              <div className="small-banner position-relative">
                <img 
                  src={ catbanner01 } 
                  className='img-fluid rounded-3' 
                  alt="main banner" 
                />
                <div className="small-banner-content position-absolute ">
                  <h4>BEST SELLER</h4>
                  <h5>Xiaomi Pro X</h5>
                  <p>From $1016.16 <br/> or $42.35/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img 
                  src={ catbanner02 } 
                  className='img-fluid rounded-3' 
                  alt="main banner" 
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEWEST PRODUCT</h4>
                  <h5>Apple Watch 2</h5>
                  <p>Browse to update <br /> latest styles and colors</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img 
                  src={ catbanner03 } 
                  className='img-fluid rounded-3' 
                  alt="main banner" 
                />
                <div className="small-banner-content position-absolute ">
                  <h4>ON SALE</h4>
                  <h5>iPad Pro</h5>
                  <p>From $799 <br/> or $46.40/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img 
                  src={ catbanner04 } 
                  className='img-fluid rounded-3' 
                  alt="main banner" 
                />
                <div className="small-banner-content position-absolute ">
                  <h4>SPECIAL DEAL</h4>
                  <h5>AirPods Max</h5>
                  <p>Free engraving for <br /> high-fidelity headphones</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Container>
    <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {/* <div className='d-flex align-items-center gap-15'>
                <img src="" alt="services" />
                <div>
                  <h6></h6>
                  <p className='mb-0'></p>
                </div>
              </div> */}
              {services?.map((i, j) => {
                return (
                  <div className='d-flex align-items-center gap-15' key={j}>
                    <img src="i.image" alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className='mb-0'>{i.tagline}</p>
                    </div>
                  </div>
                )
              })
              
              }
            </div>
          </div>
        </div>
    </Container>
    <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between align-items-center flex-wrap">
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src={ camera } alt="camera" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart TVs</h6>
                  <p>10 Items</p>
                </div>
                <img src={ tv } alt="camera" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Speakers</h6>
                  <p>10 Items</p>
                </div>
                <img src={ speaker } alt="camera" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Accesories</h6>
                  <p>10 Items</p>
                </div>
                <img src={ headphone } alt="camera" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src={ camera } alt="camera" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart TVs</h6>
                  <p>10 Items</p>
                </div>
                <img src={ tv } alt="camera" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart watches</h6>
                  <p>10 Items</p>
                </div>
                <img src={ speaker } alt="camera" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Accesories</h6>
                  <p>10 Items</p>
                </div>
                <img src={ headphone } alt="camera" />
              </div>
            </div>
          </div>
        </div>
    </Container>
    <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">
              Featured Collection
            </h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
    </Container>
    <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={ famous01 } className='img-fluid' alt="famous" />
              <div className="famous-content position-absolute">
                <h5>Big screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399 or $16.62/mo. for 24 mo.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={ famous02 } className='img-fluid' alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>Smart speaker</h5>
                <h6 className='text-dark'>HomePod mini</h6>
                <p className='text-dark'>From $99 only</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={ famous03 } className='img-fluid' alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>Studio display</h5>
                <h6 className='text-dark'>Macbook Air 2022</h6>
                <p className='text-dark'>From $1099 or $45.80/mo. for 24 mo. </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src={ famous04 } className='img-fluid' alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>Excellent performance</h5>
                <h6 className='text-dark'>iPhone 15 Pro</h6>
                <p className='text-dark'>From $999 or $41.62/mo. for 24 mo. </p>
              </div>
            </div>
          </div>
        </div>
    </Container>
    <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
    </Container>
    <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">
              Bestsellers
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
    <Container class1="marquee-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner card-wrapper">
              {/* <marquee width="60%" direction="right" height="100px">
                This is a sample scrolling text that has scrolls in the righter direction.
              </marquee> */}
            </div>
          </div>
        </div>
    </Container>
    <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">
              Latest Blogs
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
    </Container>
  </>
}

export default Home
