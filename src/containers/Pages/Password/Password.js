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

import "./Password.scss";

export default function Password({
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
                    
                    <ChangePassword 
                        oldPassword={oldPassword}
                        firstPassword={firstPassword}
                        secondPassword={secondPassword}
                        handleOldPasswordChanged = {(e) => handleOldPasswordChanged(e, setOldPassword)}
                        handleFirstPasswordChanged = {(e) => handleFirstPasswordChanged(e, setFirstPassword)}
                        handleSecondPasswordChanged = {(e) => handleSecondPasswordChanged(e, setSecondPassword)}
                        handleButtonSubmitPressed = {
                            (e) => handleButtonSubmitPressed(
                                e, 
                                oldPassword, 
                                firstPassword, 
                                secondPassword,
                                setOldPassword, 
                                setFirstPassword, 
                                setSecondPassword
                            )
                        }
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

function ChangePassword({
    oldPassword,
    firstPassword,
    secondPassword,
    handleOldPasswordChanged,
    handleFirstPasswordChanged,
    handleSecondPasswordChanged,
    handleButtonSubmitPressed,
}){
    return(
        <div className='account-right'>
            <div class="headline">
                <h3>Mật Khẩu</h3>
                <p>Thay đổi mật khẩu của bạn</p>
            </div>

            <div class="container">
                <form className="formInput">
                    <label>Nhập mật khẩu của bạn</label>
                    <input value={oldPassword} onChange={(e) => handleOldPasswordChanged(e)} placeholder="Add your password" type="password" />

                    <label for="new1">Nhập mật khẩu mới</label>
                    <input value={firstPassword} onChange={(e) => handleFirstPasswordChanged(e)} placeholder="Add your new pasword" type="password" />
                
                    <label for="new">Xác nhận mật khẩu mới</label>
                    <input value={secondPassword} onChange={(e) => handleSecondPasswordChanged(e)} placeholder="Confirm new password" type="password" />
                
                    <button onClick={(e) => handleButtonSubmitPressed(e)} type="submit">Thay đổi</button>
                </form>
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

function handleOldPasswordChanged(e,setOldPassword){
    setOldPassword(e.target.value)
    console.log("Handle old password input changed!")
}

function handleFirstPasswordChanged(e,setFirstPassword){
    setFirstPassword(e.target.value)
    console.log("Handle first password input changed!")
}

function handleSecondPasswordChanged(e,setSecondPassword){
    setSecondPassword(e.target.value)
    console.log("Handle second password input changed!")
}

function handleButtonSubmitPressed(
    e, 
    oldPassword, 
    firstPassword, 
    secondPassword,
    setOldPassword, 
    setFirstPassword, 
    setSecondPassword
){
    e.preventDefault();


    jwtClient.fetch('/api/v1/content/authinfo/update', {
        method: 'PUT',
        header: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            oldPassword : oldPassword,
            newPassword : firstPassword
        })
    })
    .then(res => {
        if(res.status === 200){
            console.log(res)
            setOldPassword("")
            setFirstPassword("")
            setSecondPassword("")
            console.log("Handle submit succesfull!");
        } else {
            console.log(res.content)
        }
    }) 
    .catch(error => {
        console.log(error)
    });
}