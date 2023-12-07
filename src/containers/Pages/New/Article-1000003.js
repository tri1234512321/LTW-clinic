import React from 'react'

import Header from '../../../components/Header/Header.js';
import Footer from '../../../components/Footer/Footer.js';

import medicine from '../../../assets/New/medicine.jpg'
import mengan from '../../../assets/New/men-gan.jpg'
import maumui from '../../../assets/New/mau-mui.jpg'
import canthi from '../../../assets/New/can-thi.jpg'

import rightarrow from '../../../assets/New/right-arrow.png'
import CommentSection from './comment.js';

export default function Article1000003({
    tokenExpired
}) {
    const articleId=1000003
    return (
        <div>
        <Header tokenExpired={tokenExpired}/>
            <div className="my-24 mx-20">
                <div className='grid grid-cols-1 sm:flex sm:w-fit sm:mx-auto mt-10'>
                    <div className='2xl:w-[900px] xl:gap-6 sm:w-9/12 w-full pb-20'>
                        <div className='border-solid border border-slate-200 h-fit rounded-md p-6 mb-6 w-full'>
                            <div className='h-[200px] rounded-md mb-6'>
                                <img className='w-full h-full object-cover rounded-md' src={maumui} alt="" />
                            </div>
                            
                            <p className='text-3xl font-bold mb-3 h-[56px] hover:text-sky-500'>Chảy máu mũi</p>
                            
                            <p className='self-end text-sm pb-4'> 26/08/2021   75</p>

                            <div className='max-h-[72px] overflow-y-hidden  mb-4'>
                                <p className='text-base  text-justify text-gray-600'>
                                    Chảy máu mũi là một tai biến thường gặp trong sinh hoạt hằng ngày, bao gồm tất cả các trường hợp máu chảy từ mũi ra ngoài hoặc xuống họng.
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            Chảy máu mũi là một tai biến thường gặp trong sinh hoạt hằng ngày, bao gồm tất cả các trường hợp máu chảy từ mũi ra ngoài hoặc xuống họng
                            . Chảy máu mũi không phải là một bệnh, mà là triệu chứng của nhiều bệnh, do nhiều nguyên nhân gây nên. Bệnh nhân thường đến trong tình trạng khẩn cấp
                            , do đó phải nhận định nhanh, xử trí cầm máu kịp thời.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            Đa phần các trường hợp chảy máu mũi thường nhẹ và có thể tự cầm máu, tuy nhiên, nếu chảy máu vùng vách ngăn mũi sau hay ở thành ngoài sau mũi thì thường chảy nhiều máu
                            , khó có thể tự cầm máu nên có thể cần phải nhập viện để xử lý.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                                Những nguyên nhân gây chảy máu mũi tại chỗ:
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            - Do viêm nhiễm tại chổ: viêm mũi xoang cấp, viêm mũi dị ứng, viêm loét ở mũi, …
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            - Mũi bị chấn thương: chấn thương mũi đơn thuần như gãy xương chính mũi, gãy sụn vách ngăn hay chấn thương vùng mặt gây vỡ xoang hàm, vỡ xoang trán hoặc gãy xương hàm trên
                            , … hoặc chấn thương sọ não. Ở trẻ em có thể do ngoáy mũi hoặc dị vật rơi vào mũi.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3 leading-10'>
                                - Do khối u:
                                <br/>
                                + U lành tính: polype mũi thể chảy máu (polype killian), u mạch máu ở mũi, u xơ vòm mũi họng, ...
                                <br/>
                                + U ác tính: ung thư sàng hàm, ung thư vòm mũi họng, …
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            Những nguyên nhân gây chảy máu mũi toàn thân:
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            - Các bệnh cấp tính có kèm theo rối loạn đông máu như cúm, sởi nặng, sốt tinh hồng nhiệt, sốt xuất huyết, sốt rét, thương hàn, …
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            - Bệnh về máu: bạch cầu cấp, xuất huyết giảm tiểu cầu vô căn ( bệnh werlhof), rối loạn đông chảy máu như Hemophilie
                            , giảm prothrombine, bệnh xuất huyết Schoenlein- Henoch, bệnh dãn mao mạch Rendu-Osler
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            - Bệnh tim mạch: cao huyết áp, xơ động mạch
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            - Suy chức năng gan, thận, xơ gan
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            Chẩn đoán:
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            - Bác sĩ có thể hỏi bệnh sử và khám lâm sàng phần mũi.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            - Các xét nghiệm trong trường hợp chảy máu mũi có thể bao gồm: xét nghiệm máu toàn bộ (CBC), xét nghiệm protime, xét nghiệm thromboplastin từng phần.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            Chảy máu mũi không phải là một bệnh, mà là triệu chứng của nhiều bệnh, do nhiều nguyên nhân gây nên. Đa phần các trường hợp chảy máu mũi thường nhẹ và có thể tự cầm máu, tuy nhiên
                            , nếu chảy máu vùng vách ngăn mũi sau hay ở thành ngoài sau mũi thì thường chảy nhiều máu, khó có thể tự cầm máu nên có thể cần phải nhập viện để xử lý.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            Để phòng ngừa chảy máu mũi, hãy bổ sung đầy đủ Vitamin C, không nên ngoái mũi, … Nếu chảy máu mũi lặp lại nhiều lần không rõ nguyên nhân cần đi khám chuyên khoa tai mũi họng và điều trị triệt để.
                            </p>

                        </div>
                        
                        <CommentSection articleId={articleId}/>
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
        <Footer/>
        </div>
    )
}