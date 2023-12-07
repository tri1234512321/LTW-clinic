import { FaPhoneSquareAlt } from "react-icons/fa";
import { BsFillPinMapFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { BsSend } from "react-icons/bs";

export default function Contact({
    tokenExpired
}) {
    return (
        <div>
            <Header tokenExpired={tokenExpired}/>
            <div className="my-10  py-20 px-56">
                <div className="text-5xl font-bold">Nếu bạn có bất kỳ câu hỏi nào, đừng ngần ngại liên hệ với chúng tôi</div>

                <div className="flex flex-row mt-20">
                    <div className="basis-full md:basis-1/2 text-xl">
                        <div className="my-10 flex">
                            <BsFillPinMapFill size={30} className="mr-10 text-primary" />
                            TP.HCM
                        </div>
                        <div className="my-10 flex">
                            <AiOutlineMail size={30} className="mr-10 text-primary" />
                            admin@gmail.com
                        </div>
                        <div className="my-10 flex">
                            <FaPhoneSquareAlt size={30} className="mr-10 text-primary" />
                            0123456789
                        </div>
                    </div>
                    <div className="basis-full md:basis-1/2">
                        <form>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-1">
                                    <label className="text-xl">Họ và tên</label>
                                    <input type="text" className="w-full border-2 border-gray-300 rounded-md p-2" />
                                </div>
                                <div className="col-span-1">
                                    <label className="text-xl">Email</label>
                                    <input type="email" className="w-full border-2 border-gray-300 rounded-md p-2" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-1">
                                    <label className="text-xl">Số điện thoại</label>
                                    <input type="text" className="w-full border-2 border-gray-300 rounded-md p-2" />
                                </div>
                                <div className="col-span-1">
                                    <label className="text-xl">Địa chỉ</label>
                                    <input type="text" className="w-full border-2 border-gray-300 rounded-md p-2" />
                                </div>
                            </div>
                            <div className="my-10">
                                <label className="text-xl">Nội dung</label>
                                <textarea className="w-full border-2 border-gray-300 rounded-md p-2" />
                            </div>
                            <div className="flex justify-center">
                                <button className="bg-primary flex text-white px-5 text-xl py-2 rounded-md">
                                    <BsSend size={20} className="mr-2"/>

                                    Gửi
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}