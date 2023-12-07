import React, {useEffect, useState} from 'react';
import {Routes, Route, useNavigate} from "react-router-dom";
import './index.css';
import Login from './containers/Pages/Login/Login';
import Register from './containers/Pages/Register/Register';
import Account from './containers/Pages/Account/Account';
import Password from './containers/Pages/Password/Password';
import Order from './containers/Pages/Order/Order'

import About from './containers/Pages/About/About';
import Product from './containers/Pages/Product/Product';
import Home from './containers/Pages/Home/Home';
import Contact from './containers/Pages/Contact/Contact';
import Service from './containers/Pages/Service/Service';
import Cart from './containers/Pages/Cart/CartPage';
import Payment from './containers/Pages/Payment/Payment';
import New from './containers/Pages/New/New';
import Article from './containers/Pages/New/Article';
import Article1000002 from './containers/Pages/New/Article-1000002';
import Article1000003 from './containers/Pages/New/Article-1000003';
import Article1000004 from './containers/Pages/New/Article-1000004';

import ProductDetail from './containers/Pages/ProductDetail/ProductDetail';
/*import AdminMember from './containers/Admin/Member';
import AdminComment from './containers/Admin/Comment';
import AdminContact from './containers/Admin/Contact';
import AdminNews from './containers/Admin/News';
import AdminProduct from './containers/Admin/Product';
import AdminService from './containers/Admin/Service';
import AdminInformation from './containers/Admin/Information';
import AdminHome from './containers/Admin/Home';*/

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

import {jwtClient} from './utilities/JWTClient'
import AdminPage from "./containers/Admin/AdminPage";

library.add(fas, faTwitter, faFontAwesome)

export default function App() {
  const navigate = useNavigate();
  const [tokenExpired, setTokenExpired] = useState(false);

  useEffect(() => {
    if (tokenExpired) {
      navigate("/login");
    }
  }, [tokenExpired]);

  useEffect(() => {
    jwtClient.setOnRefreshTokenFailedCallback(() => setTokenExpired(true));
  }, []);

  return (
      <Routes>
        <Route path="/" element={<Home tokenExpired={tokenExpired}/>} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="account" element={<Account tokenExpired={tokenExpired}/>} />
        <Route path="password" element={<Password tokenExpired={tokenExpired}/>} />
        <Route path="order" element={<Order tokenExpired={tokenExpired}/>} />
        <Route path="about" element={<About tokenExpired={tokenExpired}/>} />
        <Route path="product" element={<Product tokenExpired={tokenExpired}/>} />
        <Route path="home" element={<Home tokenExpired={tokenExpired}/>} />
        <Route path="contact" element={<Contact tokenExpired={tokenExpired}/>} />
        <Route path="cart" element={<Cart tokenExpired={tokenExpired}/>} />
        <Route path="payment" element={<Payment tokenExpired={tokenExpired}/>} />
        <Route path="service" element={<Service tokenExpired={tokenExpired}/>} />
        <Route path="new" element={<New tokenExpired={tokenExpired}/>} />
        <Route path="article/id=1000001" element={<Article tokenExpired={tokenExpired}/>} />
        <Route path="article/id=1000002" element={<Article1000002 tokenExpired={tokenExpired}/>} />
        <Route path="article/id=1000003" element={<Article1000003 tokenExpired={tokenExpired}/>} />
        <Route path="article/id=1000004" element={<Article1000004 tokenExpired={tokenExpired}/>} />
        <Route path="/detail/:id" element={<ProductDetail tokenExpired={tokenExpired}/>} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
  );
}