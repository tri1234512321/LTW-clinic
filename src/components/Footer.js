import React from "react";
import { BsFillTelephoneFill, BsSkype } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-20">
            <div className="flex flex-row">
                <div className="basis-3/4 flex text-xl">
                    <BsFillTelephoneFill size={30} className="mr-10" />
                    Vui lòng liên hệ với nhân viên lễ tân thân thiện của chúng tôi với bất kỳ yêu cầu y tế nào, hoặc gọi 0123456789
                </div>
                <div className="basis-1/4 flex">
                    <a href="#"><AiFillFacebook size={40} className="mx-5" /></a>
                    <a href="#"><FaSquareXTwitter size={40} className="mx-5" /></a>
                    <a href="#"><BsSkype size={40} className="mx-5" /></a>
                </div>
            </div>
        </footer>
    );
}