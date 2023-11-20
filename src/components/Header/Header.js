import React from "react";
import { HiMiniShoppingCart } from "react-icons/hi2";

export default function Header() {
    return (
        <header className="sticky top-0 w-full z-10 border-primary border-b-2">
            <nav className="bg-white px-10 py-3 flex flex-row items-center">
                <a href="/" className="text-primary text-3xl basis-1/4 font-bold">Pharmacy</a>
                <div className="basis-1/2 text-xl ">
                    <ul className="flex flex-row">
                        <li className="mx-5">
                            <a href="/about" className="text-black hover:text-primary">Giới thiệu</a>
                        </li>
                        <li  className="mx-5">
                            <a href="/service" className="text-black hover:text-primary">Dịch vụ</a>
                        </li>
                        <li  className="mx-5">
                            <a href="/products" className="text-black hover:text-primary">Sản phẩm</a>
                        </li>
                        <li  className="mx-5">
                            <a href="/contact" className="text-black hover:text-primary">Liên hệ</a>
                        </li>
                    </ul>
                </div>
                <div className="basis-1/4 flex flex-row items-center justify-end">
                    <button className="flex flex-row text-primary mx-10 text-xl border-primary border-2 rounded-xl p-2">
                        <a href="/cart" className="flex flex-row">
                            <HiMiniShoppingCart size={30} className="mr-3"/>
                            Giỏ hàng
                        </a>
                    </button>
                    <button className="bg-teal-500 text-white rounded-3xl p-3"><a href="/login">Đăng nhập</a></button>
                </div>
            </nav>
        </header>
    );

}