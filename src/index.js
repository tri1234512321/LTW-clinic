import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Login from './containers/Pages/Login/Login';
import Register from './containers/Pages/Register/Register';
import About from './containers/Pages/About/About';
import Product from './containers/Pages/Product/Product';
import Home from './containers/Pages/Home/Home';
import Contact from './containers/Pages/Contact/Contact';
import Service from './containers/Pages/Service/Service';
import Cart from './containers/Pages/Cart/Cart';
import Payment from './containers/Pages/Payment/Payment';
import AdminMember from './containers/Admin/Member';
import AdminComment from './containers/Admin/Comment';
import AdminContact from './containers/Admin/Contact';
import AdminNews from './containers/Admin/News';
import AdminProduct from './containers/Admin/Product';
import AdminService from './containers/Admin/Service';
import AdminInformation from './containers/Admin/Information';
import AdminHome from './containers/Admin/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminMember />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="payment" element={<Payment />} />
        <Route path="service" element={<Service />} />
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


