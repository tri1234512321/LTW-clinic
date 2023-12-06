// Header.js
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { jwtClient } from "../auth-api/JWTClient.js";
import { HiUserCircle, HiLogout} from "react-icons/hi";


export default function Header({
    greeting
}) {
    return (
        <header className="sticky top-0 w-full z-10 shadow-lg bg-black px-5 py-3 flex items-center justify-between text-white">
            <div className="flex items-center">
                <span className="text-4xl font-bold text-blue-300">Empalic&nbsp;</span>
                <span className="text-2xl font-bold text-white">|&nbsp;</span>
                <span className="text-4xl font-bold text-blue-300">Administration Page</span>
            </div>
            <div className="flex items-center">
                <button
                    className="bg-gray-500 text-white rounded-full p-2 mx-3"
                >
                    <div className="flex items-center">
                        <HiUserCircle size={30} className="mr-2" />
                        {<span>{greeting}</span>}
                    </div>
                </button>
                <button
                    className="bg-gray-500 text-white rounded-full p-2 mx-3"
                    onClick={handleLogoutButtonClicked}
                >
                    <div className="flex items-center">
                        <HiLogout size={30} className="mr-2" />
                        {<span>Logout</span>}
                    </div>
                </button>
            </div>
    </header>
  );
};

// handleLogoutButtonClicked
async function handleLogoutButtonClicked() {
    await jwtClient.logout();
    window.location.reload();
}
