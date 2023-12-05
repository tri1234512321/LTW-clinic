import React from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
export default function Payment() {
    return (
        <div>
            <Header />
            <div class=" sm:px-10  lg:px-60 xl:px-96 my-20">

                <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                    <p class="text-xl font-medium">Chi tiết đơn hàng</p>
                    <div class="">

                        <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium">Chủ thẻ</label>

                        <input type="text" id="card-holder" name="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-primary" placeholder="Tên đầy đủ" />

                        <label for="card-no" class="mt-4 mb-2 block text-sm font-medium">Thông tin thẻ</label>
                        <div class="flex">

                            <input type="text" id="card-no" name="card-no" class="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-primary uppercase" placeholder="xxxx-xxxx-xxxx-xxxx" />


                            <input type="text" name="credit-expiry" class="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-primary" placeholder="MM/YY" />
                            <input type="text" name="credit-cvc" class="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-primary" placeholder="CVC" />
                        </div>
                        <label for="billing-address" class="mt-4 mb-2 block text-sm font-medium">Địa chỉ nhận hàng</label>

                        <input type="text" id="billing-address" name="billing-address" class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-primary" />


                        <div class="mt-6 border-t border-b py-2">
                            <div class="flex items-center justify-between">
                                <p class="text-sm font-medium text-gray-900">Tổng</p>
                                <p class="font-semibold text-gray-900">100 000 đ</p>
                            </div>
                            <div class="flex items-center justify-between">
                                <p class="text-sm font-medium text-gray-900">Giao hàng</p>
                                <p class="font-semibold text-gray-900">50 000 đ</p>
                            </div>
                        </div>
                        <div class="mt-6 flex items-center justify-between">
                            <p class="text-sm font-medium text-gray-900">Thành tiền</p>
                            <p class="text-2xl font-semibold text-gray-900">150 000 đ</p>
                        </div>
                    </div>
                    <button class="mt-4 mb-8 w-full rounded-md bg-primary px-6 py-3 font-medium text-white">Đặt hàng</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}