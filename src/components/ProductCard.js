
import addcart from '../images/add-cart.svg';
import prodcompare from '../images/prodcompare.svg';
import view from '../images/view.svg';
import watch from '../images/watch.jpg';
import watch1 from '../images/watch-1.jpg';
import wish from '../images/wish.svg';

import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();
    return (
    <>
        <div className={ `${
            location.pathname == "/product" ? `gr-${grid}` : "col-3"
        }`}
        >
            <Link to='/product/:id' className="product-card position-relative"
            >
                <div className="wishlist-icon position-absolute">
                    <Link>
                        <img src={ wish } alt="wishlist" />
                    </Link>
                </div>
                <div className="product-image">
                    <img src={ watch } className='img-fluid' alt="product" />
                    <img src={ watch1 } className='img-fluid' alt="product" />
                </div>
                <div className="product-detail">
                    <h6 className="brand">Samsung</h6>
                    <h5 className="product-title">
                        Stylish and high-quality watches with reasonable price
                    </h5>
                    <ReactStars count={5} size={24} value='3' edit={false} activeColor='#ffd700' />
                    <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                        It's guaranteed that this watch is affordable, 
                        stylish, full of features that you will never know of.
                        This sentence is added to check line break and not semantic.
                    </p>
                    <p className="price">$100.00</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                        <Link>
                            <img src={ prodcompare } alt="compare" />
                        </Link>
                        <Link>
                            <img src={ view } alt="view" />
                        </Link>
                        <Link>
                            <img src={ addcart } alt="addcart" />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    </>
    );
}

export default ProductCard
