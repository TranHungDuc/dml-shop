
import cross from '../images/cross.svg';
import watch from '../images/watch.jpg';

import React from 'react'

const WishlistCard = () => {
  return <>
    <div className="col-3">
        <div className="wishlist-card position-relative">
            <img 
                src={ cross } 
                alt="cross"
                className='position-absolute cross img-fluid' 
            />
            <div className="wishlist-card-image">
                <img 
                    src={ watch } 
                    className='img-fluid w-100' 
                    alt="watch" 
                />
            </div>
            <div className="px-3 py-3">
                <h5 className='title'>Something</h5>
                <h6 className='price'>Expensive</h6>
            </div>
        </div>
    </div>
  </>;
}

export default WishlistCard
