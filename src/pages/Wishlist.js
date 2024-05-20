

import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import WishlistCard from '../components/WishlistCard';
import Container from '../components/Container';

const Wishlist = () => {
  return <>
    <Meta title='Wishlist'></Meta>
    <BreadCrumb title='Wishlist' />
    <Container class1="wishlist-wrapper py-5 home-wrapper-2">
        <div className="row">
            <WishlistCard />
            <WishlistCard />
            <WishlistCard />
            <WishlistCard />
        </div>
    </Container>
  </>
}

export default Wishlist
