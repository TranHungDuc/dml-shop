

import React from 'react'
import Breadcrumb from "../components/BreadCrumb";
import Meta from "../components/Meta"; 
import Color from '../components/Color';
import ProductCompareCard from '../components/ProductCompareCard';
import Container from '../components/Container';

const CompareProduct = () => {
  return <>
    <Meta title={"Compare Products"} />
    <Breadcrumb title="Compare Products" />
    <Container class1='compare-product-wrapper py-5 home-wrapper-2'>
      <div className="row">
          <ProductCompareCard />
          <ProductCompareCard />
          <ProductCompareCard />
          <ProductCompareCard />
      </div>
    </Container>
  </>
}

export default CompareProduct

