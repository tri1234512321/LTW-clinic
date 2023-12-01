import React, { useState } from "react";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { IoMdMenu } from "react-icons/io";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 w-full z-10 shadow-lg">
      <nav className="bg-white px-5 md:px-10 py-3 flex flex-row items-center">
        <button
          className="text-primary mx-3 md:hidden"
          onClick={toggleMenu}
        >
          <IoMdMenu size={30} />
        </button>
        <a href="/" className="text-primary text-3xl md:flex-1 text-center font-bold">
          Empalic
        </a>
        <div className="md:flex-1 text-xl hidden md:flex justify-center">
          <ul className="flex flex-row">
            <li className="mx-3 md:mx-5">
              <a href="/about" className="text-black hover:text-primary">
                Giới thiệu
              </a>
            </li>
            <li className="mx-3 md:mx-5">
              <a href="/service" className="text-black hover:text-primary">
                Dịch vụ
              </a>
            </li>
            <li className="mx-3 md:mx-5">
              <a href="/product" className="text-black hover:text-primary">
                Sản phẩm
              </a>
            </li>
            <li className="mx-3 md:mx-5">
              <a href="/contact" className="text-black hover:text-primary">
                Liên hệ
              </a>
            </li>
          </ul>
        </div>
        <div className="md:flex-1 flex flex-row items-center justify-end">
          <button className="flex flex-row text-primary mx-3 md:mx-10 text-xl border-primary border-2 rounded-xl p-2 hidden md:flex">
            <a href="/cart" className="flex flex-row">
              <HiMiniShoppingCart size={30} className="mr-3" />
              Giỏ hàng
            </a>
          </button>
          <button className="bg-teal-500 text-white rounded-3xl p-3 hidden md:block">
            <a href="/login">Đăng nhập</a>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 bg-white w-full py-2">
            <ul className="flex flex-col items-center">
              <li className="my-2">
                <a href="/about" className="text-black hover:text-primary">
                  Giới thiệu
                </a>
              </li>
              <li className="my-2">
                <a href="/service" className="text-black hover:text-primary">
                  Dịch vụ
                </a>
              </li>
              <li className="my-2">
                <a href="/product" className="text-black hover:text-primary">
                  Sản phẩm
                </a>
              </li>
              <li className="my-2">
                <a href="/contact" className="text-black hover:text-primary">
                  Liên hệ
                </a>
              </li>
              <li className="my-2">
                <a href="/cart" className="text-black hover:text-primary">
                  Giỏ hàng
                </a>
              </li>
              <li className="my-2">
                <a href="/login" className="text-black hover:text-primary">
                  Đăng nhập
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
