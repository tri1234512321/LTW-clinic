import React from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import { MdOutlineDeleteForever } from "react-icons/md";

export default function Cart() {
    return (
        <div>
            <Header />
            <div className='my-10 px-10 md:px-32 min-h-[64vh]'>
                <div className='border-b-2 border-primary text-3xl font-bold p-3'>Giỏ hàng của bạn</div>
                <div className="mx-auto max-w-5xl my-5 justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3">
                        {/* Each Product */}
                        <div className="justify-between mb-6 rounded-lg bg-gray-200 p-6 shadow-md sm:flex sm:justify-start">
                            <img src="https://demo037059.web30s.vn/datafiles/32953/upload/images/product/efferalgan-500mg.jpg" className="w-full rounded-lg sm:w-40" />
                            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                <div className="mt-5 sm:mt-0">
                                    <h2 className="text-lg font-bold text-gray-900">Efferalgan 500Mg</h2>
                                    <p className="mt-1 text-xs text-gray-700">50 000 đ</p>
                                </div>
                                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                    <div className="flex items-center border-gray-100">
                                        <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-primary"> - </span>
                                        <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
                                        <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-primary"> + </span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <p className="text-sm">100 000 đ</p>
                                        <button><MdOutlineDeleteForever size={20} className='text-red-500'/></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                    </div>

                    {/* Side bar */}
                    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                        <div className="mb-2 flex justify-between">
                            <p className="text-gray-700">Tổng</p>
                            <p className="text-gray-700">100 000 đ</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-700">Giao hàng</p>
                            <p className="text-gray-700">50 000 đ</p>
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between">
                            <p className="text-lg font-bold">Thành tiền</p>
                            <div className="">
                                <p className="mb-1 text-lg font-bold">150 000 đ</p>
                            </div>
                        </div>
                        <button className="mt-6 w-full rounded-md bg-primary py-1.5 font-medium text-blue-50 hover:bg-teal-600">
                            <a href='/payment'>Thanh toán</a>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}