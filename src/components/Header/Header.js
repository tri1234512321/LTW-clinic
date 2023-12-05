import React, { useState, useEffect } from "react";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { IoMdMenu } from "react-icons/io";
import {jwtClient} from "../../utilities/JWTClient";
import {useNavigate} from 'react-router-dom'; 

export default function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const [logined,setLogined] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if(await jwtClient.stillHasTokenAfter(7200))
        setLogined(true)
      else 
        setLogined(false)
    }
    fetchData()
  },[logined]);

  return (
    <header className="sticky top-0 w-full z-10 shadow-lg">
      <nav className="bg-white px-5 md:px-10 py-3 flex flex-row items-center">
        <button
          className="text-primary mx-3 md:hidden"
          onClick={toggleMenu}
        >
          <IoMdMenu size={30} />
        </button>
        <a href="/" className="text-primary text-3xl md:flex-1 text-center font-bold basis-1/4">
          Empalic
        </a>
        <div className="md:flex-1 text-xl hidden md:flex justify-center basis-1/2">
          <ul className="flex flex-row">
            <li className="mx-3 md:mx-5">
              <a href="/home" className="text-black hover:text-primary">
                Trang chủ
              </a>
            </li>
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
              <a href="/new" className="text-black hover:text-primary">
                Tin tức
              </a>
            </li>
            <li className="mx-3 md:mx-5">
              <a href="/contact" className="text-black hover:text-primary">
                Liên hệ
              </a>
            </li>
          </ul>
        </div>
        <div className="md:flex-1 flex flex-row items-center justify-end basis-1/4">
          <button className="flex flex-row text-primary mx-3 md:mx-10 text-xl border-primary border-2 rounded-xl p-2 hidden md:flex">
            <a href="/cart" className="flex flex-row">
              <HiMiniShoppingCart size={30} className="mr-3" />
              Giỏ hàng
            </a>
          </button>
          <button className="bg-teal-500 text-white rounded-3xl p-3 hidden md:block" 
            onClick={() => {
              if(logined===true){
                jwtClient.logout();
                setLogined(false);
              } else{
                navigate("/login");
              }
            }}>
            {logined===true ? "Đăng Xuất" : "Đăng Nhập"}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 bg-white w-full py-2">
            <ul className="flex flex-col items-center">
                <li className="my-2">
                <a href="/home" className="text-black hover:text-primary">
                  Trang chủ
                </a>
              </li>
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
                <a href="/new" className="text-black hover:text-primary">
                  Tin tức
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
                <a href="/login" className="text-black hover:text-primary"
                  onClick={() => {
                    if(logined===true){
                      jwtClient.logout();
                      setLogined(false);
                    } else{
                      navigate("/login");
                    }
                  }}>
                  {logined===true ? "Đăng Xuất" : "Đăng Nhập"}
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}