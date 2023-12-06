// Header.js
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { jwtClient } from "../auth-api/JWTClient.js";
import { HiUserCircle, HiLogout } from "react-icons/hi";

const Header = () => {
  const navigate = useNavigate();
  const [logined, setLogined] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogoutText, setShowLogoutText] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (await jwtClient.stillHasTokenAfter(7200)) {
        setLogined(true);
        // Replace the following condition with your admin check logic
        setIsAdmin(true);
      } else {
        setLogined(false);
        setIsAdmin(false);
      }
    };
    fetchData();
  }, [logined]);

  const handleLogout = () => {
    jwtClient.logout();
    setLogined(false);
  };

  const handleLoginClick = () => {
    if (logined) {
      handleLogout();
    } else {
      navigate("/login");
    }
  };

  const handleAvatarClick = () => {
    setShowLogoutText(!showLogoutText);
  };

  return (
    <header className="sticky top-0 w-full z-10 shadow-lg bg-black px-5 py-3 flex items-center justify-between text-white">
        <div className="flex items-center">
        <span className="text-4xl font-bold text-blue-300">Empalic&nbsp;</span>
        <span className="text-2xl font-bold text-white">|&nbsp;</span>
        <span className="text-4xl font-bold text-blue-300">Administration Page</span>
        </div>
      <div className="flex items-center">
        {isAdmin ? (
          <button
            className="bg-gray-500 text-white rounded-full p-2 mx-3 flex items-center"
            onClick={handleLogout}
          >
            <HiUserCircle size={30} className="mr-2" onClick={handleAvatarClick} />
            {showLogoutText && <span>Log out</span>}
          </button>
        ) : (
          <button
            className="bg-gray-500 text-white rounded-full p-2 mx-3"
            onClick={handleLoginClick}
          >
            {logined ? (
              <div className="flex items-center">
                <HiUserCircle size={30} className="mr-2" onClick={handleAvatarClick} />
                {showLogoutText && <span>Log in</span>}
              </div>
            ) : (
              <div className="flex items-center">
                <HiUserCircle size={30} className="mr-2" onClick={handleAvatarClick} />
                <span>Log in</span>
              </div>
            )}
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
