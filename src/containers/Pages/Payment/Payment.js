import React from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import { useEffect, useState } from 'react';
import { jwtClient } from '../../../utilities/JWTClient';
import { useNavigate } from 'react-router-dom';
export default function Payment({
    tokenExpired
}) {
    const navigate = useNavigate();
    const [paymentInfo, setPaymentInfo] = useState([]);
    useEffect(() => {
        jwtClient.fetch(`/api/v1/business/payment`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setPaymentInfo(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const [note, setNote] = useState('');
    return (
        <div>
            <Header tokenExpired={tokenExpired}/>
            <div className=" sm:px-10  lg:px-60 xl:px-96 my-20">

                <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                    <p className="text-3xl font-medium">Thông tin đặt hàng</p>
                    <div className="mt-4">
                        <p className="text-gray-700 text-2xl my-5">Tên: {paymentInfo.user?.fullName}</p>
                        <p className="text-gray-700 text-2xl my-5">Địa chỉ: {paymentInfo.user?.address}</p>
                        <p className="text-gray-700 text-2xl my-5">Số điện thoại: {paymentInfo.user?.phone}</p>
                        <p className="text-gray-700 text-2xl my-5">Email: {paymentInfo.user?.email}</p>
                        <p className="text-gray-700 text-2xl my-5 font-bold">Tổng cộng: {(paymentInfo.subtotalPrice + 5).toFixed(2)} $</p>
                        <p className="text-gray-700 text-2xl my-5">Ghi chú:</p>
                        <textarea
                            value={note}
                            className="w-full h-24 border border-gray-500 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-primary"
                            onChange={(e) => setNote(e.target.value)}
                        ></textarea>
                    </div>
                    <button
                        className="mt-4 mb-8 w-full rounded-md bg-primary px-6 py-3 font-medium text-white"
                        onClick={(e) => handleOrderButton(e, note, navigate)}>
                        Đặt hàng
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

function handleOrderButton(e, note, navigate) {
    const requestData = {
        note: note
    };

    jwtClient.fetch('/api/v1/business/payment', {
        method: 'POST',
        body: JSON.stringify(requestData),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Order placed successfully:', data);
            navigate('/product');
        })
        .catch(error => {
            console.error('Error placing order:', error);
        });
}