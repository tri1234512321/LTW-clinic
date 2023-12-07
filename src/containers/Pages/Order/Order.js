/** @format */

import {jwtClient} from "../../../utilities/JWTClient.js";
import React, { useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom'; 

import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Title from '../../../components/Title/Title.js';

import avatar from "../../../assets/Infor/avatar.png";
import account from "../../../assets/Infor/account.png";
import password from "../../../assets/Infor/password.png";
import order from "../../../assets/Infor/order.png";
import notification from "../../../assets/Infor/notification.png";

import "./Order.scss";

export default function Order({
    tokenExpired
}) {
    const navigate = useNavigate();
    const handleButtonContact = () => {
        console.log("handle button contact successfull!")
        navigate("/contact");
    };
    const handleButtonReBuy = () => {
        console.log("handle button Rebuy successfull!")
        navigate("/product");
    };

    const [info, setInfo] = useState("")
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        fetchData("/api/v1/content/user/getinfor", setInfo)
    },[])

    useEffect(() => {
        fetchData(`/api/v1/content/productorder`, setOrders)
    }, []);

    return (
        <div>
            <Header tokenExpired={tokenExpired}/>
            <div className="pb-24 mt-0 bg-gray-100">
                <Title namePage={"Thông Tin Đơn Hàng"}/>
                
                <div className='mx-auto md:flex sm:p-5'>
                    <LeftNav name = {info.fullName}/>
                    
                    <div className='account-right  md:w-[80%] w-full'>
                        <div class="headline mb-5">
                            <p className="text-xl font-semibold">Đơn hàng</p>
                            <p>Xem đơn hàng của bạn</p>
                        </div>

                        <div className="danhhSachDonHang">
                            {orders.map(order =>
                                <OrderInfor
                                    orderId={order.id}
                                    orderCreatedAt={order.createdAt}
                                    orderIsPaid={order.isPaid}
                                    orderIsDelivered={order.isDelivered}
                                    orderStatus={order.status}
                                    orderNote={order.note}
                                    handleButtonContact={(e)=>handleButtonContact(e)}
                                    handleButtonReBuy={(e)=>handleButtonReBuy(e)}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>        
        );
}

function LeftNav({
    name
}) {
    return (
        <div className='account-left border-r border-solid border-gray-200 md:w-[20%]'>
            <div class="headline">
                <div class="image">
                    <img src= {avatar} alt="avatar" />
                </div>
                <div class="user">
                    <h5>{name}</h5>
                    <p>Sửa hồ sơ</p>
                </div>
            </div>
            <div class="content">
                <div class="item">
                    <div class="icon"><img src={account} alt="account"/></div>
                    <div class="it"><a href="./account" class="target">Tài khoản của tôi</a></div>
                </div>
                <div class="item">
                    <div class="icon"><img src={password} alt="password"/></div>
                    <div class="it"><a href="./password">Đổi mật khẩu</a></div>
                </div>
                <div class="item">
                    <div class="icon"><img src={order} alt="order"/></div>
                    <div class="it"><a href="account">Thông tin đơn hàng</a></div>
                </div>
                <div class="item">
                    <div class="icon"><img src={notification} alt="notification"/></div>
                    <div class="it"><a href="account">Thông báo</a></div>
                </div>
            </div>
        </div>
    )
}

function OrderInfor({
    orderId,
    orderCreatedAt,
    orderIsPaid,
    orderIsDelivered,
    orderStatus,
    orderNote,
    handleButtonContact,
    handleButtonReBuy
}){

    const [orderItems, setOrderItems] = useState([]);
    // const [orderPrice, setOrderPrice] = useState(0);

    useEffect(() => {
        fetchData("/api/v1/content/orderitem?oderId="+orderId, setOrderItems)
    }, [orderId]);

    let orderPrice = 0;
    for(let i=0;i<orderItems.length;i++) {
        orderPrice+=orderItems[i].price * orderItems[i].quantity
    }

    return(
        <div>
            <div className="mb-5">
                <div className="border border-gray-300 px-5 rounded-b bg-white">
                    <div className="py-2 sm:flex flex-row">
                        <p className="basis-1/6 font-semibold text-red-400"> {orderStatus}</p>
                        <p className="basis-2/6 font-semibold text-yellow-400">{orderIsPaid?"Đã thanh toán":"Chưa thanh toán"}</p>
                        <p className="basis-2/6 font-semibold ">{orderNote}</p>
                        <p className="basis-1/6">{orderCreatedAt}</p>
                    </div>

                    {orderItems.map(orderItem =>
                        <OrderItemInfor
                            name={orderItem.product.name}
                            price={orderItem.price}
                            quantity={orderItem.quantity}
                            productId={orderItem.productId}
                        />
                    )}
                </div>

                <div className="bg-gray-50 border border-gray-300 p-5 rounded-t grid sm:grid-cols-2 grid-cols-1">
                    {orderIsDelivered ?
                        <button className="bg-red-500 hover:bg-red-600 font-semibold text-white py-2 px-4 rounded w-fit h-fit"
                            onClick={handleButtonReBuy}
                        >
                            Mua lại
                        </button>
                    :
                        <button className="bg-red-500 hover:bg-red-600 font-semibold text-white py-2 px-4 rounded w-fit h-fit"
                            onClick={handleButtonContact}
                        >
                            Liên Hệ
                        </button>
                    }
                    
                    <p className='text-xl font-semibold sm:justify-self-end'>
                        Thành tiền: <span className="text-red-500">{orderPrice}</span> $
                    </p>
                </div>
            </div>
        </div>
    )
}

function OrderItemInfor({
    name,
    price,
    quantity,
    productId
}){
    const totalPrice = price*quantity 

    return(
        <div className="justify-between border-t border-solid border-gray-200 py-3 sm:flex sm:justify-start">
            <img src={`http://localhost:8001/res/images/product/${productId}.jpg`} className="rounded-lg w-20 border-gray-200 border" alt={"alt"} />
            
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">{name}</h2>
                    <p className="mt-1 text-base text-gray-700">{price} $</p>
                    <p className="mt-1 text-base text-gray-700">x{quantity}</p>
                </div>

                <div className="flex place-items-center space-x-4">
                    <p className="text-sm">{totalPrice} $</p>
                </div>
            </div>
        </div>
    )
}

function fetchData(urlPath, callback) {
    jwtClient.fetch(urlPath)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            callback(data)
        })
        .catch(error => {
            console.log(error)
        });
}