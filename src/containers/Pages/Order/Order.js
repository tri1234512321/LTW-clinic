/** @format */

import {jwtClient} from "../../../utilities/JWTClient.js";
import React, { useState,useEffect } from "react";

import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

import avatar from "../../../assets/Infor/avatar.png";
import account from "../../../assets/Infor/account.png";
import password from "../../../assets/Infor/password.png";
import order from "../../../assets/Infor/order.png";
import notification from "../../../assets/Infor/notification.png";

import canthi from '../../../assets/New/can-thi.jpg'

import "./Order.scss";

export default function Order({
    tokenExpired
}) {

    const [name, setName] = useState("")
    const [oldPassword, setOldPassword] = useState("")
    const [firstPassword, setFirstPassword] = useState("")
    const [secondPassword, setSecondPassword] = useState("")

    useEffect(()=>{
        fetchData("/api/v1/content/user/getinfor", setName)
    },[])

    return (
        <div>
            <Header tokenExpired={tokenExpired}/>
            <div className="pb-24 mt-0 bg-gray-100">
                <div className='background-image h-[200px] grid grid-cols-2 '>
                    <div id="healthService" className="text-5xl font-bold  mb-10 place-self-center pt-14">Thay đổi mật khẩu</div>
                </div>
                
                <div className='account-container mx-20'>
                    <LeftNav name = {name}/>
                    
                    <OrderInfor />
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
        <div className='account-left border-r border-solid border-gray-200'>
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
}){
    return(
        <div className='account-right '>
            <div class="headline mb-5">
                <p className="text-xl font-semibold">Đơn hàng</p>
                <p>Xem đơn hàng của bạn</p>
            </div>

            <div className="danhhSachDonHang">
                <div className="mb-5">
                    <div className="border border-gray-300 px-5 rounded-b bg-white">
                        <div className="py-2">
                            <p>Đơn hàng</p>
                        </div>

                        <div className="justify-between border-t border-solid border-gray-200 py-3 sm:flex sm:justify-start">
                            <img src={canthi} className="rounded-lg sm:w-20 border-gray-200 border" alt={"productName"} />
                            
                            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                <div className="mt-5 sm:mt-0">
                                    <h2 className="text-lg font-bold text-gray-900">{"productName"}</h2>
                                    <p className="mt-1 text-base text-gray-700">{"100"} $</p>
                                    <p className="mt-1 text-base text-gray-700">x{"5"}</p>
                                </div>

                                <div className="flex place-items-center space-x-4">
                                    <p className="text-sm">{"500"} $</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 border border-gray-300 p-5 rounded-t grid grid-cols-2">
                        <button className="bg-red-500 hover:bg-red-600 font-semibold text-white py-2 px-8 rounded w-fit">
                            Mua Lại
                        </button>

                        <p className='text-xl font-semibold justify-self-end'>
                            Thành tiền: <span className="text-red-500">{"100"}</span> $
                        </p>
                    </div>
                </div>

                <div className="mb-5">
                    <div className="border border-gray-300 px-5 rounded-b ">
                        <div className="py-2">
                            <p>Đơn hàng</p>
                        </div>

                        <div className="justify-between border-t border-solid border-gray-200 py-3 sm:flex sm:justify-start">
                            <img src={canthi} className="rounded-lg sm:w-20 border-gray-200 border" alt={"productName"} />
                            
                            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                <div className="mt-5 sm:mt-0">
                                    <h2 className="text-lg font-bold text-gray-900">{"productName"}</h2>
                                    <p className="mt-1 text-base text-gray-700">{"100"} $</p>
                                    <p className="mt-1 text-base text-gray-700">x{"5"}</p>
                                </div>

                                <div className="flex place-items-center space-x-4">
                                    <p className="text-sm">{"500"} $</p>
                                </div>
                            </div>
                        </div>

                        <div className="justify-between border-t border-solid border-gray-200 py-3 sm:flex sm:justify-start">
                            <img src={canthi} className="rounded-lg sm:w-20 border-gray-200 border" alt={"productName"} />
                            
                            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                <div className="mt-5 sm:mt-0">
                                    <h2 className="text-lg font-bold text-gray-900">{"productName"}</h2>
                                    <p className="mt-1 text-base text-gray-700">{"100"} $</p>
                                    <p className="mt-1 text-base text-gray-700">x{"5"}</p>
                                </div>

                                <div className="flex place-items-center space-x-4">
                                    <p className="text-sm">{"500"} $</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 border border-gray-300 p-5 rounded-t grid grid-cols-2">
                        <button className="bg-red-500 hover:bg-red-600 font-semibold text-white py-2 px-8 rounded w-fit">
                            Mua Lại
                        </button>

                        <p className='text-xl font-semibold justify-self-end'>
                            Thành tiền: <span className="text-red-500">{"100"}</span> $
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function fetchData(urlPath, setName) {
    jwtClient.fetch(urlPath)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setName(data.fullName);
        })
        .catch(error => {
            console.log(error)
        });
}