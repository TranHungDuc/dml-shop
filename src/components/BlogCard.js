

import blog1 from '../images/blog-1.jpg';
import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className="blog-card">
        <div className="card-image">
            <img src={ blog1 } className='img-fluid w-100' alt="blog" />
        </div>
        <div className="blog-content">
            <p className='date'>
                22 Mar, 2024
            </p>
            <h5 className='title'> 
                New era with Apple Vision Pro
            </h5>
            <p className="desc">
                This is about Apple Vision Pro - a computer within your vision.
            </p>
            <Link className='button' to='/blog/:id'>
                READ MORE
            </Link>
        </div>
    </div>
  )
}

export default BlogCard
