import React from 'react'
import {Link} from 'react-router-dom';

import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

import medicine from '../../../assets/New/medicine.jpg'
import mengan from '../../../assets/New/men-gan.jpg'
import maumui from '../../../assets/New/mau-mui.jpg'
import canthi from '../../../assets/New/can-thi.jpg'

import rightarrow from '../../../assets/New/right-arrow.png'

export default function New({
    tokenExpired
}) {
    return (
        <div>
        <Header tokenExpired={tokenExpired}/>
            <div className="my-24 mx-20">
            <div id="healthService" className="text-4xl font-bold border-b-2 border-primary mb-10">Tin tức y tế</div>
            <div className='grid grid-cols-1 sm:flex sm:w-fit sm:mx-auto pt-10'>
                <div className='2xl:w-[900px] xl:grid xl:grid-cols-2 xl:gap-6 sm:w-9/12 w-full pb-20'>
                    <div className='border-solid border border-slate-200 h-fit rounded-md p-6 mb-6 hover:shadow-xl'>
                        <div className='h-[200px] rounded-md mb-6'>
                            <img className='w-full h-full object-cover rounded-md' src={medicine} alt="" />
                        </div>
                        
                        <Link to="/article/id=1000001">
                        <p className='text-xl font-bold mb-3 h-[56px] hover:text-sky-500'>Người tiêu dùng cần lưu ý gì khi lựa chọn thuốc?</p>
                        </Link>

                        <p className='self-end text-sm pb-4'> 26/08/2022</p>

                        <div className='max-h-[72px] overflow-y-hidden  mb-4'>
                            <p className='text-base  text-justify text-gray-600'>Thị trường thuốc đang trở nên bát nháo bởi sự xuất hiện dòng thuốc giả, thuốc không rõ nguồn gốc
                            . Nếu không cẩn thận người tiêu dùng sẽ rất dễ bị tiền mất, tật mang.</p>
                        </div>
                        <Link to="/article/id=1000001">
                        <button class="bg-blue-100 hover:bg-sky-500 text-sky-500 hover:text-white font-semibold py-2 px-4">
                            Xem Thêm
                        </button>
                        </Link>
                    </div>
                    <div className='border-solid border border-slate-200 h-fit rounded-md p-6 mb-6 hover:shadow-xl'>
                        <div className='h-[200px] rounded-md mb-6'>
                            <img className='w-full h-full object-cover rounded-md' src={mengan} alt="" />
                        </div>
                        
                        <Link to="/article/id=1000002">
                        <p className='text-xl font-bold mb-3 h-[56px] hover:text-sky-500'>Tăng men gan</p>
                        </Link>
                        
                        <p className='self-end text-sm pb-4'> 26/08/2022</p>

                        <div className='max-h-[72px] overflow-y-hidden  mb-4'>
                            <p className='text-base text-justify text-gray-600'>Tăng men gan là tình trạng khi một hoặc nhiều enzym trong tế bào gan (
                                AST, ALT, GGT, Phosphatase kiềm...) có giá trị cao hơn mức bình thường.</p>
                        </div>
                        
                        <Link to="/article/id=1000002">
                        <button class="bg-blue-100 hover:bg-sky-500 text-sky-500 hover:text-white font-semibold py-2 px-4">
                            Xem Thêm
                        </button>
                        </Link>
                    </div>
                    <div className='border-solid border border-slate-200 h-fit rounded-md p-6 mb-6  hover:shadow-xl'>
                        <div className='h-[200px] rounded-md mb-6'>
                            <img className='w-full h-full object-cover rounded-md' src={maumui} alt="" />
                        </div>
                        
                        <Link to="/article/id=1000003">
                        <p className='text-xl font-bold mb-3 h-[56px] hover:text-sky-500'>Chảy máu mũi</p>
                        </Link>
                        
                        <p className='self-end text-sm pb-4'> 26/08/2022</p>

                        <div className='max-h-[72px] overflow-y-hidden  mb-4'>
                            <p className='text-base  mb-4 text-justify text-gray-600'>Chảy máu mũi là một tai biến thường gặp trong sinh hoạt hằng ngày
                            , bao gồm tất cả các trường hợp máu chảy từ mũi ra ngoài hoặc xuống họng.</p>
                        </div>
                        
                        <Link to="/article/id=1000003">
                        <button class="bg-blue-100 hover:bg-sky-500 text-sky-500 hover:text-white font-semibold py-2 px-4">
                            Xem Thêm
                        </button>
                        </Link>
                    </div>
                    <div className='border-solid border border-slate-200 h-fit rounded-md p-6 mb-6 hover:shadow-xl'>
                        <div className='h-[200px] rounded-md mb-6'>
                            <img className='w-full h-full object-cover rounded-md' src={canthi} alt="" />
                        </div>
                        
                        <Link to="/article/id=1000004">
                        <p className='text-xl font-bold mb-3 h-[56px] hover:text-sky-500'>Cận thị</p>
                        </Link>
                                
                        <p className='self-end text-sm pb-4'> 26/08/2022</p>

                        <div className='max-h-[72px] overflow-y-hidden  mb-4'>
                            <p className='text-base  mb-4 text-justify text-gray-600'>Cận thị là hiện tượng không nhìn được rõ vật ở xa
                            . Cận thị có thể là rối loạn về mắt mang tính di truyền và xảy ra do trục trặc nhãn cầu quá dài hoặc độ hội tụ của giác mạc.</p>
                        </div>
                        
                        <Link to="/article/id=1000004">
                        <button class="bg-blue-100 hover:bg-sky-500 text-sky-500 hover:text-white font-semibold py-2 px-4">
                            Xem Thêm
                        </button>
                        </Link>
                    </div>

                    <nav aria-label="Page navigation example" className='justify-self-center col-span-2'>
                        <ul className="list-style-none flex gap-2 font-semibold">
                            <li className='w-[30px] h-[30px]'>
                            <div
                                className="relative rounded bg-transparent grid w-full h-full text-sm text-neutral-600 transition-all duration-300 hover:bg-sky-400 hover:text-white"
                                aria-label="Previous">
                                <span className='text-lg place-self-center'>&laquo;</span>
                            </div>
                            </li>
                            <li className='w-[30px] h-[30px]'>
                            <div
                                className="relative rounded bg-transparent grid w-full h-full text-sm text-neutral-600 transition-all duration-300 hover:bg-sky-400 hover:text-white"
                                aria-label="Previous">
                                <span className='text-lg place-self-center'>&lt;</span>
                            </div>
                            </li>
                            <li className='w-[30px] h-[30px]'>
                            <div
                                className="relative rounded grid w-full h-full text-sm bg-sky-400 text-white transition-all duration-300 hover:bg-sky-400 hover:text-white">
                                <span className='text-base place-self-center'>1</span>
                            </div>
                            </li>
                            <li className='w-[30px] h-[30px]'>
                            <div
                                className="relative rounded bg-transparent grid w-full h-full text-sm text-neutral-600 transition-all duration-300 hover:bg-sky-400 hover:text-white"
                                aria-label="Next">
                                <span className='text-lg place-self-center'>&gt;</span>
                            </div>
                            </li>
                            <li className='w-[30px] h-[30px]'>
                            <div
                                className="relative rounded bg-transparent grid w-full h-full text-sm text-neutral-600 transition-all duration-300 hover:bg-sky-400 hover:text-white"
                                aria-label="Next"
                                ><span className='text-xl place-self-center'>&raquo;</span>
                            </div>
                            </li>
                        </ul>
                    </nav>

                </div>

                <div className='2xl:w-[300px] sm:w-2/12 w-full pl-8'>
                    <div className='mb-5'>
                        <div className='grid grid-cols-2 mb-3'>
                            <a className='hover:bg-zinc-200 bg-sky-400 font-bold hover:text-black text-white h-10 text-center pt-2' 
                            href="/new">
                                Phổ biến
                            </a>
                            <a className='bg-zinc-200 hover:bg-sky-500 font-bold text-black hover:text-white h-10 text-center pt-2' 
                            href="/new">
                                Mới nhất
                            </a>
                        </div>
                        <div className='grid grid-cols-1 grid-rows-4 gap-3 pt-2'>
                            <div className='flex'>
                                <a className='w-[85px] h-[85px] mb-3 flex-none' href="/article/id=1000001">
                                    <img className='w-[85px] h-[85px]' src={medicine} alt=''/>
                                </a>
                                <div className='text-sm  text-gray-600 pl-3 flex-auto'>
                                    <p className='self-start font-semibold w-full hover:text-sky-500'>Người tiêu dùng cần lưu ý gì khi chọn thuốc?</p>
                                    <p className='self-end text-sm'> 26/08/2022</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <a className='w-[85px] h-[85px] mb-3' href="/article/id=1000002">
                                    <img className='w-full h-full' src={mengan} alt=''/>
                                </a>
                                <div className='text-sm text-justify text-gray-600 pl-3'>
                                    <p className='self-start font-semibold hover:text-sky-500'>Tăng men gan</p>
                                    <p className='self-end text-sm'> 26/08/2022</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <a className='w-[85px] h-[85px] mb-3 flex-none' href="/article/id=1000003">
                                    <img className='w-[85px] h-[85px]' src={maumui} alt=''/>
                                </a>
                                <div className='text-sm  text-gray-600 pl-3 flex-auto'>
                                    <p className='self-start font-semibold w-full hover:text-sky-500'>Chảy máu mũi</p>
                                    <p className='self-end text-sm'> 26/08/2022</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <a className='w-[85px] h-[85px] mb-3' href="/article/id=1000004">
                                    <img className='w-full h-full' src={canthi} alt=''/>
                                </a>
                                <div className='text-sm text-justify text-gray-600 pl-3'>
                                    <p className='self-start font-semibold hover:text-sky-500'>Cận thị</p>
                                    <p className='self-end text-sm'> 26/08/2022</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mb-10'>
                        <div className='pb-3 border-solid border-b-2 border-sky-500 mb-3'>
                            <p className='text-2xl font-semibold'>Danh Mục Tin Tức</p>
                        </div>
                        <div className='grid grid-cols-1 text-lg text-gray-600'>
                            <div className='py-2 flex'>
                                <img className='w-3 h-3 self-center mr-2 ' src={rightarrow} alt="" />
                                <a href="/new" className='hover:text-sky-500'>Tìm hiểu bệnh</a>
                            </div>
                            <div className='py-2 flex'>
                                <img className='w-3 h-3 self-center mr-2 ' src={rightarrow} alt="" />
                                <a href="/new" className='hover:text-sky-500'>Tin kinh doanh</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        <Footer />
        </div>
    )
}