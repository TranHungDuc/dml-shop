
import cross from '../images/cross.svg';
import watch from '../images/watch.jpg';

import React from 'react'
import Color from './Color'

const ProductCompareCard = () => {
  return <>
    <div className="col-3">
        <div className="compare-product-card position-relative">
            <img 
                src={ cross } 
                alt="cross"
                className='position-absolute cross img-fluid' 
            />
            <div className="product-card-image">
                <img src={ watch } alt="watch" />
            </div>
            <div className="compare-product-detail">
                <h5 className="title">Something</h5>
                <h6 className="price mb-3 mt-3">Expensive</h6>
                <div>
                    <div className="product-detail">
                        <h5>Brand:</h5>
                        <p>Samsung</p>
                    </div>
                    <div className="product-detail">
                        <h5>Type:</h5>
                        <p>Watch</p>
                    </div>
                    <div className="product-detail">
                        <h5>Availability:</h5>
                        <p>In stock</p>
                    </div>
                    <div className="product-detail">
                        <h5>Color:</h5>
                        <Color />
                    </div>
                    <div className="product-detail">
                        <h5>Size:</h5>
                        <div className="d-flex gap-10">
                            <p>S</p>
                            <p>M</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
}

export default ProductCompareCard
