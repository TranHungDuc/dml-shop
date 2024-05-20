
import gr from '../images/gr.svg';
import gr2 from '../images/gr2.svg';
import gr3 from '../images/gr3.svg';
import gr4 from '../images/gr4.svg';
import watch from '../images/watch.jpg';

import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from 'react-rating-stars-component';
import ProductCard from '../components/ProductCard';
import Color from '../components/Color';
import Container from '../components/Container';

const OurStore = () => {
    const [ grid, setGrid ] = useState(3);

    return <>
        <Meta title='Our Store'></Meta>
        <BreadCrumb title='Our Store' />
        <Container class1='store-wrapper py-5 home-wrapper-2'>
            <div className="row">
                <div className="col-3">
                    <div className="filter-card mb-3">
                        <h3 className="filter-title">
                            Categories
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
                    <div className="filter-card mb-3">
                        <h3 className="filter-title">
                            Filter
                        </h3>
                        <div>
                            <h5 className="sub-title">Availability</h5>
                            <div className="form-check">
                                <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    value="" 
                                    id="" 
                                />
                                <label className="form-check-label" htmlFor=""> 
                                    In stock
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id=""
                                />
                                <label className="form-check-label" htmlFor=""> 
                                    Out of stock
                                </label>
                            </div>
                            <h5 className="sub-title">Price</h5>
                            <div className='d-flex align-items-center gap-10'>
                                <div class="form-floating">
                                    <input 
                                        type="email" 
                                        class="form-control" 
                                        id="floatingInput" 
                                        placeholder="From"
                                    />
                                    <label for="floatingInput">From</label>
                                </div>
                                <div class="form-floating">
                                    <input 
                                        type="email" 
                                        class="form-control" 
                                        id="floatingInput1" 
                                        placeholder="To"
                                    />
                                    <label for="floatingInput1">To</label>
                                </div>
                            </div>
                            <h5 className="sub-title">Color</h5>
                            <div>
                                <Color />
                            </div>
                            <h5 className="sub-title">Size</h5>
                            <div className="form-check">
                                <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    value="" 
                                    id="color-1" 
                                />
                                <label className="form-check-label" htmlFor="color-1"> 
                                    S
                                </label>
                            </div>
                            <div className="form-check">
                                <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    value="" 
                                    id="color-1" 
                                />
                                <label className="form-check-label" htmlFor="color-1"> 
                                    M
                                </label>
                            </div>
                            <div className="form-check">
                                <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    value="" 
                                    id="color-1" 
                                />
                                <label className="form-check-label" htmlFor="color-1"> 
                                    L
                                </label>
                            </div>
                            <div className="form-check">
                                <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    value="" 
                                    id="color-1" 
                                />
                                <label className="form-check-label" htmlFor="color-1"> 
                                    XL
                                </label>
                            </div>
                            <div className="form-check">
                                <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    value="" 
                                    id="color-1" 
                                />
                                <label className="form-check-label" htmlFor="color-1"> 
                                    XXL
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="filter-card mb-3">
                        <h3 className="filter-title">
                            Product tags
                        </h3>
                        <div>
                            <div className="product-tag d-flex flex-wrap align-items-center gap-10">
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphone</span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Smartphone</span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Tablet</span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Speaker</span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Camera</span>
                            </div>
                        </div>
                    </div>
                    <div className="filter-card mb-3">
                        <h3 className="filter-title">
                            Recommendation
                        </h3>
                        <div>
                            <div className="random-product d-flex mb-3">
                                <div style={{ width: "40%" }}>
                                    <img src={ watch } className='img-fluid' alt="watch" />
                                </div>
                                <div style={{ width: "60%" }}>
                                    <h5>
                                        A great watch to buy, not to have
                                    </h5>
                                    <ReactStars count={5} size={24} value='3' edit={false} activeColor='#ffd700' />
                                    <p>$100</p>
                                </div>
                            </div>
                            <div className="random-product d-flex">
                                <div style={{ width: "40%" }}>
                                    <img src={ watch } className='img-fluid' alt="watch" />
                                </div>
                                <div style={{ width: "60%" }}>
                                    <h5>
                                        A great watch to buy, not to have
                                    </h5>
                                    <ReactStars count={5} size={24} value='3' edit={false} activeColor='#ffd700' />
                                    <p>$100</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <div className="filter-sort-grid mb-3">
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className="d-flex align-items-center gap-10">
                                <span className="mb-0 d-block" style={{ width: "80px" }}>Sort by:</span>
                                <select
                                    className="form-select form-control"
                                    name=""
                                    id=""
                                >
                                    <option value="manual">Default</option>
                                    <option value="best-selling">Best sold</option>
                                    <option value="A">Alphabetical order (A to Z)</option>
                                    <option value="Z">Alphabetical order (Z to A)</option>
                                    <option value="cheap">Price (low to high)</option>
                                    <option value="expensive">Price (high to low)</option>
                                    <option value="earliest">Date (old to new)</option>
                                    <option value="latest">Date (new to old)</option>
                                </select>
                            </div>
                            <div className="d-flex align-items-center gap-10">
                                <p className="total-product mb-0 text-secondary">21 products</p>
                                <div className="d-flex align-items-center gap-5p grid">
                                    <img 
                                        src={ gr4 } 
                                        className='d-block img-fluid' 
                                        alt="grid"
                                        onClick={() => {
                                            setGrid(3);
                                        }} />
                                    <img 
                                        src={ gr3 } 
                                        className='d-block img-fluid' 
                                        alt="grid"
                                        onClick={() => {
                                            setGrid(4);
                                        }} />
                                    <img 
                                        src={ gr2 } 
                                        className='d-block img-fluid' 
                                        alt="grid"
                                        onClick={() => {
                                            setGrid(6);
                                        }} />
                                    <img 
                                        src={ gr } 
                                        className='d-block img-fluid' 
                                        alt="grid"
                                        onClick={() => {
                                            setGrid(12);
                                        }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-list pb-5">
                        <div className="d-flex gap-10 flex-wrap">
                            <ProductCard grid={grid}/>
                            <ProductCard grid={grid}/>
                            <ProductCard grid={grid}/>
                            <ProductCard grid={grid}/>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </>
}

export default OurStore
