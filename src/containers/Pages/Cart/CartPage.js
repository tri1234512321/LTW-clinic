import React from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import { MdOutlineDeleteForever } from "react-icons/md";
import { jwtClient } from '../../../utilities/JWTClient';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CartItem({
    cartItemId,
    productId,
    productName,
    price,
    quantity,
    handleIncreaseButtonClicked,
    handleDecreaseButtonClicked,
    handleDeleteButtonClicked
}) {
    const totalPrice = (price * quantity).toFixed(2);
    return (
        <div className="justify-between mb-6 rounded-lg bg-gray-200 p-6 shadow-md sm:flex sm:justify-start">
            <img src={`http://localhost:8001/api/v1/common/res/images/product/${productId}.jpg` } className="max-w-lg rounded-lg sm:w-40 max-h-20 " alt={productName} />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">{productName}</h2>
                    <p className="mt-1 text-xs text-gray-700">{price} $</p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                        <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-primary"
                            onClick={function (e) { handleDecreaseButtonClicked(e, cartItemId) }}> - </span>
                        <input className="h-8 w-8 border bg-white text-center text-xs outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" type="number" value={quantity} min="1" />
                        <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-primary"
                            onClick={function (e) { handleIncreaseButtonClicked(e, cartItemId) }}> + </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <p className="text-sm">{totalPrice} $</p>
                        <button><MdOutlineDeleteForever size={20} className='text-red-500'
                            onClick={function (e) { handleDeleteButtonClicked(e, cartItemId) }} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function CartPage({
    tokenExpired
}) {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();
    const handlePaymentButtonClick = () => {
        // Navigate to the payment page with the total as state
        navigate('/payment', { state: { total } });
    };

    useEffect(() => {
        fetchData(`/api/v1/business/cart`, setCartItems)
    }, []);

    const subtotal = cartItems.reduce((acc, cartItem) => {
        return acc + cartItem.price * cartItem.quantity;
    }, 0);

    const shippingFee = 5;
    const total = subtotal + shippingFee;

    return (
        <div>
            <Header tokenExpired={tokenExpired}/>
            <div className='my-10 px-10 md:px-32 min-h-[64vh]'>
                <div className='border-b-2 border-primary text-3xl font-bold p-3'>Giỏ hàng của bạn</div>

                <div className="mx-auto max-w-5xl my-5 justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3">
                        {/* Map through cart items */}
                        {cartItems.map((cartItem, index) =>
                            <CartItem key={index}
                                cartItemId={cartItem.id}
                                productId={cartItem.productId}
                                productName={cartItem.productName}
                                price={cartItem.price}
                                quantity={cartItem.quantity}
                                handleIncreaseButtonClicked={(e, cartItemId) => handleIncreaseButtonClicked(e, cartItemId, setCartItems)}
                                handleDecreaseButtonClicked={(e, cartItemId) => handleDecreaseButtonClicked(e, cartItemId, setCartItems)}
                                handleDeleteButtonClicked={(e, cartItemId) => handleDeleteButtonClicked(e, cartItemId, setCartItems)}
                            />
                        )}
                    </div>

                    {/* Side bar */}

                    < div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3" >
                        <div className="mb-2 flex justify-between">
                            <p className="text-gray-700">Tổng</p>
                            <p className="text-gray-700">{subtotal.toFixed(2)} $</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-700">Giao hàng</p>
                            <p className="text-gray-700">{shippingFee.toFixed(2)} $</p>
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between">
                            <p className="text-lg font-bold">Thành tiền</p>
                            <div className="">
                                <p className="mb-1 text-lg font-bold">{total.toFixed(2)} $</p>
                            </div>
                        </div>
                        <button
                            className="mt-6 w-full rounded-md bg-primary py-1.5 font-medium text-blue-50 hover:bg-teal-600"
                            onClick={handlePaymentButtonClick}
                        >
                            Thanh toán
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

//helper function

function handleIncreaseButtonClicked(e, cartItemId, setCartItems) {
    jwtClient.fetch(`/api/v1/business/cartitem/increase_quantity?cartItemId=${cartItemId}`, { method: 'POST' })
        .then(response => response.status === 200)
        .then(isSuccess => {
            if (isSuccess) {
                console.log("increase cart item success")
                fetchData(`/api/v1/business/cart`, setCartItems)
            }
        })
        .catch(error => {
            console.log(error)
        });

}

function handleDecreaseButtonClicked(e, cartItemId, setCartItems) {
    jwtClient.fetch(`/api/v1/business/cartitem/decrease_quantity?cartItemId=${cartItemId}`, { method: 'POST' })
        .then(response => response.status === 200)
        .then(isSuccess => {
            if (isSuccess) {
                console.log("decrease cart item success")
                fetchData(`/api/v1/business/cart`, setCartItems)
            }
        })
        .catch(error => {
            console.log(error)
        });

}

function handleDeleteButtonClicked(e, cartItemId, setCartItems) {
    jwtClient.fetch(`/api/v1/business/cart?cartItemId=${cartItemId}`, { method: 'DELETE' })
        .then(response => response.status === 200)
        .then(isSuccess => {
            if (isSuccess) {
                console.log("delete cart item success")
                fetchData(`/api/v1/business/cart`, setCartItems)
            }
        })
        .catch(error => {
            console.log(error)
        });


}

function fetchData(urlPath, callback) {
    jwtClient.fetch(urlPath)
        .then(response => response.json())
        .then(data => {
            console.log("callback:" + callback)
            { callback(data) }
        }

        )
        .catch(error => {
            console.log(error)
        });
}