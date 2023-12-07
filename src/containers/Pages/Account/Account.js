/** @format */
import {jwtClient} from "../../../utilities/JWTClient.js";

import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

import React, { useState,useEffect } from "react";
import avatar from "../../../assets/Infor/avatar.png";
import account from "../../../assets/Infor/account.png";
import password from "../../../assets/Infor/password.png";
import order from "../../../assets/Infor/order.png";
import notification from "../../../assets/Infor/notification.png";

import "./Account.scss";

export default function Account({
    tokenExpired
}) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    useEffect(()=>{
        fetchData("/api/v1/content/user/getinfor", setName, setEmail, setAddress, setPhoneNumber)
    },[])

    return (
        <div>
            <Header tokenExpired={tokenExpired}/>
            <div className="pb-24 mt-0 bg-gray-100">
                <div className='background-image h-[200px] grid grid-cols-2 '>
                    <div id="healthService" className="text-5xl font-bold  mb-10 place-self-center pt-14">Hồ sơ cá nhân</div>
                </div>
                
                <div className='account-container mx-20'>
                    <LeftNav name= {name}/>

                    <UpdateInfor 
                        name = {name}
                        email = {email}
                        address = {address}
                        phoneNumber = {phoneNumber}
                        handleNameInputChanged={(e) => handleNameInputChanged(e,setName)}
                        handleEmailInputChanged={(e) => handleEmailInputChanged(e,setEmail)}
                        handleAddressInputChanged={(e) => handleAddressInputChanged(e,setAddress)}
                        handlePhoneNumberInputChanged={(e) => handlePhoneNumberInputChanged(e,setPhoneNumber)}
                        handleButtonSubmitPressed={(e)=> handleButtonSubmitPressed(e,name,setName,email,setEmail,address,setAddress,phoneNumber,setPhoneNumber)}
                    />
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
                    <div class="it"><a href="./order">Thông tin đơn hàng</a></div>
                </div>
                <div class="item">
                    <div class="icon"><img src={notification} alt="notification"/></div>
                    <div class="it"><a href="account">Thông báo</a></div>
                </div>
            </div>
        </div>
    )
}

function UpdateInfor({
    name, handleNameInputChanged,
    email, handleEmailInputChanged,
    address, handleAddressInputChanged,
    phoneNumber, handlePhoneNumberInputChanged,
    handleButtonSubmitPressed
}){
    return (
        <div className='account-right'>
            <div class="headline">
                <h3>Hồ Sơ Của Tôi</h3>
                <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
            </div>

            <div class="container">
                <form className="formInput">
                    <table>
                        <tr>
                            <td class="td-left"><label>Tên </label></td>
                            <td class="td-right"><input  value={name} onChange={(e) => handleNameInputChanged(e)} placeholder="Name" type="text" /></td>
                        </tr>

                        <tr>
                            <td class="td-left"><label >Email</label></td>
                            <td class="td-right"><input  value={email} onChange={(e) => handleEmailInputChanged(e)} placeholder="Email@gmail.com" type="text" /></td>
                        </tr>

                        <tr>
                            <td class="td-left"><label>Địa chỉ</label></td>
                            <td class="td-right"><input  value={address} onChange={(e) => handleAddressInputChanged(e)} placeholder="Address" type="text" /></td>
                        </tr>

                        <tr>
                            <td class="td-left"><label>Số điện thoại</label></td>
                            <td class="td-right"><input  value={phoneNumber} onChange={(e) => handlePhoneNumberInputChanged(e)} placeholder="0987654321" type="text" /></td>
                        </tr>
                        
                        <tr>
                            <td class="td-left"></td>
                            <td class="td-right"><button type="submit" onClick={(e) => handleButtonSubmitPressed(e)}>Lưu</button></td>
                        </tr>
                    </table>
                </form>
                <div class="image-form">
                    <div class="image">
                        <img src= {avatar} alt="avatar" />
                    </div>
                    <div class="center"><button type="Chosse">Chọn ảnh</button></div>
                    <p>Dụng lượng file tối đa 1 MB</p>
                    <p>Định dạng:.JPEG, .PNG</p>
                </div>
            </div>
        </div>
    )
}


function fetchData(urlPath, setName, setEmail, setAddress, setPhoneNumber) {
    jwtClient.fetch(urlPath)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setName(data.fullName);
            setEmail(data.email);
            setAddress(data.address);
            setPhoneNumber(data.phone)
        })
        .catch(error => {
            console.log(error)
        });
}

function handleNameInputChanged(e,setName){
    setName(e.target.value)
    console.log("Handle name input changed!")
}

function handleEmailInputChanged(e,setEmail){
    setEmail(e.target.value)
    console.log("Handle email input changed!")
}

function handleAddressInputChanged(e,setAddress){
    setAddress(e.target.value)
    console.log("Handle address input changed!")
}

function handlePhoneNumberInputChanged(e,setPhoneNumber){
    setPhoneNumber(e.target.value)
    console.log("Handle phone number input changed!")
}

function handleButtonSubmitPressed(
    e,name,setName,email,setEmail,address,setAddress,phoneNumber,setPhoneNumber
){
    e.preventDefault();

    jwtClient.fetch('/api/v1/content/user/update', {
        method: 'PUT',
        header: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            fullName: name,
            email: email,
            address: address,
            phone: phoneNumber
        })
    })
    .then(res => {
        if(res.status === 200){
            console.log(res)
            fetchData("/api/v1/content/user/getinfor", setName, setEmail, setAddress, setPhoneNumber)
            console.log("Handle submit succesfull!");
        }
    }).catch(error => {
        console.log(error)
    });
}

