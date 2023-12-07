import React from 'react'

import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

import medicine from '../../../assets/new/medicine.jpg'
import mengan from '../../../assets/new/men-gan.jpg'
import maumui from '../../../assets/new/mau-mui.jpg'
import canthi from '../../../assets/new/can-thi.jpg'

import rightarrow from '../../../assets/new/right-arrow.png'
import CommentSection from './comment.js';

export default function Article({
    tokenExpired
}) {
    const articleId=1000001
    return (
        <div>
        <Header tokenExpired={tokenExpired}/>
            <div className="my-24 mx-20">
                <div className='grid grid-cols-1 sm:flex sm:w-fit sm:mx-auto mt-10'>
                    <div className='2xl:w-[900px] xl:gap-6 sm:w-9/12 w-full pb-20'>
                        <div className='border-solid border border-slate-200 h-fit rounded-md p-6 mb-6 w-full'>
                            <div className='h-[200px] rounded-md mb-6'>
                                <img className='w-full h-full object-cover rounded-md' src={medicine} alt="" />
                            </div>
                            
                            <p className='text-3xl font-bold mb-3 h-[56px] hover:text-sky-500'>Người tiêu dùng cần lưu ý gì khi lựa chọn thuốc?</p>
                            
                            <p className='self-end text-sm pb-4'> 26/08/2022 </p>

                            <div className='max-h-[72px] overflow-y-hidden  mb-4'>
                                <p className='text-base  text-justify text-gray-600'>Thị trường thuốc đang trở nên bát nháo bởi sự xuất hiện dòng thuốc giả, thuốc không rõ nguồn gốc
                                . Nếu không cẩn thận người tiêu dùng sẽ rất dễ bị tiền mất, tật mang.</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                                Thuốc giả, thuốc trôi nổi không rõ nguồn gốc
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            Theo thống kê của Cục Quản lý Dược Việt Nam, ngành Dược phẩm sẽ tăng trưởng tiếp tục hai con số trong vòng 5 năm tới và đạt 7,7 tỉ USD vào năm 2021
                            . Theo dự báo tốc độ tăng trưởng toàn ngành năm 2019 sẽ đạt trên 10% (năm 2017: tốc độ tăng trưởng ngành được 75% doanh nghiệp dự báo đạt trên 10% trong năm 2018).
                            . Chính vì vậy, Việt Nam được xem là thị trường béo bở.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            Thống kê của Bộ Y tế cho biết trên toàn quốc có 41.394 cơ sở bán lẻ, trong đó 12.734 nhà thuốc tư nhân; 1.200 nhà thuốc trong các cơ sở khám chữa bệnh; 12.425 quầy thuốc
                            , 7.300 đại lý. Chuyện ra khỏi nhà gặp hiệu thuốc cũng là điều dễ hiểu.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            Cộng với thị trường dược xưa nay vốn tồn tại nhiều vấn đề: thật giả lẫn lộn, thuốc không nguồn gốc xuất xứ, thuốc trôi nổi, thuốc mua chẳng cần đến đơn bác sĩ
                            , … Nay với sự bùng nổ của mạng xã hội, hàng nghìn trang bán thuốc đủ loại từ biệt dược cho đến thực phẩm chức năng, thuốc tây - tàu - đông - nam y đủ cả
                            . Tất cả những điều này khiến cho việc kiểm tra, phát hiện thuốc giả, thuốc quá date khó hơn lên trời.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            Sử dụng thuốc giả, thuốc kém chất lượng khiến cả bệnh nhân và bác sĩ đều gặp thất bại trong điều trị. Không chỉ vậy, khi dùng phải thuốc giả, thuốc kém chất lượng
                            , sức khỏe thậm chí tính mạng của người bệnh bị đe dọa, bệnh không thuyên giảm mà còn làm tăng tình trạng kháng thuốc. Đó là lý do vì sao, việc sản xuất, buôn bán thuốc giả
                            , thuốc kém chất lượng khiến đông đảo dư luận hoang mang và bất bình.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            Những điều cần nhớ khi lựa chọn thuốc
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            Trước tình hình phức tạp của thị trường dược phẩm trong nước đòi hỏi người tiêu dùng phải tìm hiểu thông tin, xin ý kiến từ các chuyên gia
                            . Theo lời khuyên chuyên gia, người tiêu dùng nên ghi nhớ 3 điều cơ bản sau khi mua dược phẩm:
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            + Một là, không tự ý mua thuốc.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            + Hai là, cần quan sát kỹ bao bì, hạn sử dụng.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            + Ba là, nên chọn mua thuốc ở địa chỉ uy tín, tuyệt đối không nghe theo quảng cáo, truyền miệng, mua thuốc bán trên mạng.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            Vậy mới thấy, ngoài việc cẩn trọng trong việc mua, sử dụng thuốc chúng ta hoàn toàn có thể chủ động lựa chọn cho mình những địa điểm đáng tin cậy
                            , uy tín để bảo vệ sức khỏe bản thân và gia đình.
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