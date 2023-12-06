import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import './index.css';
import Login from './containers/Pages/Login/Login';
import Register from './containers/Pages/Register/Register';
import Account from './containers/Pages/Account/Account';
import Password from './containers/Pages/Password/Password';
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
import AdminMember from './containers/Admin/Member';
import AdminComment from './containers/Admin/Comment';
import AdminContact from './containers/Admin/Contact';
import AdminNews from './containers/Admin/News';
import AdminProduct from './containers/Admin/Product';
import AdminService from './containers/Admin/Service';
import AdminInformation from './containers/Admin/Information';
import AdminHome from './containers/Admin/Home';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter, faFontAwesome)

export default function App() {
  const navigate = useNavigate();
  const [tokenExpired, setTokenExpired] = useState(false);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    if (tokenExpired) {
      navigate("/login");
    }
  }, [tokenExpired]);

  useEffect(() => {
    jwtClient.setOnRefreshTokenFailedCallback(() => setTokenExpired(true));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="account" element={<Account />} />
        <Route path="password" element={<Password />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="payment" element={<Payment />} />
        <Route path="service" element={<Service />} />
        <Route path="new" element={<New />} />
        <Route path="article/id=1000001" element={<Article />} />
        <Route path="article/id=1000002" element={<Article1000002 />} />
        <Route path="article/id=1000003" element={<Article1000003 />} />
        <Route path="article/id=1000004" element={<Article1000004 />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
        <Route path="/admin/member" element={<AdminMember />} />
        <Route path="/admin/comment" element={<AdminComment />} />
        <Route path="/admin/contact" element={<AdminContact />} />
        <Route path="/admin/news" element={<AdminNews />} />
        <Route path="/admin/product" element={<AdminProduct />} />
        <Route path="/admin/service" element={<AdminService />} />
        <Route path="/admin/information" element={<AdminInformation />} />
        <Route path="/admin/Home" element={<AdminHome />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);