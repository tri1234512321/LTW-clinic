import React, { useState, useEffect } from "react";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { IoMdMenu } from "react-icons/io";
import {jwtClient} from "../../utilities/JWTClient";
import {useNavigate} from 'react-router-dom'; 

export default function Header({
    tokenExpired
}) {
    const navigate = useNavigate();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuLogin = () => {
        navigate("/login");
    };
    
    const handleMenuRegister = () => {
        navigate("/register");
    };

    const handleMenuAccount = () => {
        navigate("/account");
    }

    const handleMenuLogout = () => {
        handleLogoutButtonClicked()
    }

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className="sticky top-0 w-full z-10 shadow-lg">
            <nav className="bg-white px-5 md:px-10 py-3 flex flex-row items-center md:max-h-[70px]">
                <button
                    className="text-primary mx-3 md:hidden"
                    onClick={toggleMenu}
                >
                    <IoMdMenu size={30} />
                </button>

                <a href="/" className="text-primary text-3xl md:flex-1 text-center font-bold md:basis-1/6">
                    Empalic
                </a>

                <div className="md:flex-1 text-xl hidden md:flex justify-center md:basis-1/2">
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

                <div className="md:flex-1 flex flex-row items-center md:justify-end  md:basis-1/3">
                    <button className="flex flex-row text-primary w-[165px] mx-3 md:mx-10 text-xl border-primary border-2 rounded-xl p-2 md:flex">
                        <a href="/cart" className="flex flex-row">
                            <HiMiniShoppingCart size={25} className="mr-3" />
                            <p className="pr-2">Giỏ hàng</p>
                            <div className="rounded-full bg-red-500 h-[20px] w-[20px] item-center">
                                <p className="text-xs text-white w-full h-full place-content-center">{"4"}</p>
                            </div>
                        </a>
                    </button>
                    {
                        tokenExpired === false
                            ?   <Dropdown
                                    trigger={<button className="border w-[110px] h-[45px] rounded-3xl bg-teal-500 text-white font-semibold hover:text-yellow-400">Tài khoản</button>}
                                    menu={[
                                        <button className="p-1 self-start w-full text-blue-600 " onClick={handleMenuAccount}>Quản lý tài khoản</button>,
                                        <button className="p-1 self-start w-full text-blue-600" onClick={handleMenuLogout}>Đăng xuất</button>,
                                    ]}
                                />
                            :   <Dropdown
                            trigger={<button className="border w-[110px] h-[45px] rounded-3xl bg-teal-500 text-white font-semibold">Tài khoản</button>}
                            menu={[
                                <button className="p-1 self-start w-full text-blue-600 " onClick={handleMenuLogin}>Đăng nhập</button>,
                                <button className="p-1 self-start w-full text-blue-600" onClick={handleMenuRegister}>Đăng ký</button>,
                            ]}
                        />
                    }
                    
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
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}

const Dropdown = ({ trigger, menu }) => {
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(!open);
    };
  
    return (
      <div className="relative">
        {React.cloneElement(trigger, {
          onClick: handleOpen,
        })}
        {open ? (
          <ul className="absolute my-2 border border-solid border-gray-300 w-[150px] rounded">
            {menu.map((menuItem, index) => (
              <li key={index} className="bg-sky-200 hover:bg-sky-300 font-semibold h-[40px]">
                {React.cloneElement(menuItem, {
                  onClick: () => {
                    menuItem.props.onClick();
                    setOpen(false);
                  },
                })}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    );
};

async function handleLogoutButtonClicked() {
    await jwtClient.logout()
    .then(res=>{
        jwtClient.fetch("/api/v1/common/auth/user-info")
        .catch(err => {
            console.log(err)
        })
    })
    .catch(err => {
        console.log(err)
    })
}