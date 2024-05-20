import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import WishList from './pages/Wishlist';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import DeliveryPolicy from './pages/DeliveryPolicy';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="product" element={<OurStore />}/>
          <Route path="blog" element={<Blog />}/>
          <Route path="cart" element={<Cart />}/>
          <Route path="checkout" element={<Checkout />}/>
          <Route path="blog/:id" element={<SingleBlog />}/>
          <Route path="product/:id" element={<SingleProduct />}/>
          <Route path="compare" element={<CompareProduct />}/>
          <Route path="wishlist" element={<WishList />}/>
          <Route path="login" element={<Login />}/>
          <Route path="forgotpassword" element={<ForgotPassword />}/>
          <Route path="reset-password" element={<ResetPassword />}/>
          <Route path="signup" element={<Signup />}/>
          <Route path="privacy-policy" element={<PrivacyPolicy />}/>
          <Route path="refund-policy" element={<RefundPolicy />}/>
          <Route path="delivery-policy" element={<DeliveryPolicy />}/>
          <Route path="terms-and-conditions" element={<TermsAndConditions />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
