import React from 'react'

import Header from '../../../components/Header/Header.js';
import Footer from '../../../components/Footer/Footer.js';

import medicine from '../../../assets/new/medicine.jpg'
import mengan from '../../../assets/new/men-gan.jpg'
import maumui from '../../../assets/new/mau-mui.jpg'
import canthi from '../../../assets/new/can-thi.jpg'

import rightarrow from '../../../assets/new/right-arrow.png'
import CommentSection from './comment.js';

export default function Article1000004({
    tokenExpired
}) {
    const articleId=1000004
    return (
        <div>
        <Header tokenExpired={tokenExpired}/>
            <div className="my-24 mx-20">
                <div className='grid grid-cols-1 sm:flex sm:w-fit sm:mx-auto mt-10'>
                    <div className='2xl:w-[900px] xl:gap-6 sm:w-9/12 w-full pb-20'>
                        <div className='border-solid border border-slate-200 h-fit rounded-md p-6 mb-6 w-full'>
                            <div className='h-[200px] rounded-md mb-6'>
                                <img className='w-full h-full object-cover rounded-md' src={canthi} alt="" />
                            </div>
                            
                            <p className='text-3xl font-bold mb-3 h-[56px] hover:text-sky-500'>Cận thị</p>
                            
                            <p className='self-end text-sm pb-4'> 26/08/2022</p>

                            <div className='max-h-[72px] overflow-y-hidden  mb-4'>
                                <p className='text-base  text-justify text-gray-600'>
                                    Cận thị là hiện tượng không nhìn được rõ vật ở xa
                                    . Cận thị có thể là rối loạn về mắt mang tính di truyền và xảy ra do trục nhãn cầu quá dài hoặc độ hội tụ của giác mạc
                                    , thủy tinh thể quá lớn.
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            Tên gọi khác của cận thị: Myopic, Nearsightedness.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            Cận thị là hiện tượng không nhìn được rõ vật ở xa. Cận thị có thể là rối loạn về mắt mang tính di truyền và xảy ra do trục nhãn cầu quá dài hoặc độ hội tụ của giác mạc
                            , thủy tinh thể quá lớn.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            Cận thị là một vấn đề thị giác rất phổ biến. Hiện nay giới trẻ bị cận thị ngày càng tăng. Cận thị nặng dẫn đến thoái hóa hắc võng mạc trung tâm gây giảm thị lực và có nguy cơ cao gây bong võng mạc
                            , lác mắt, glôcôm, …
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            Nguyên nhân của cận thị
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            - Do Thủy tinh thể quá phồng hoặc do trục nhãn cầu dài quá làm cho hình ảnh hiện lên trước võng mạc. Bình thường đường kính trước sau của nhãn cầu vào khoảng 20mm
                            , người cận thị đường kính đó gia tăng làm hình ảnh thu vào võng mạc không hiện đúng lên võng mạc mà bị khuếch tán gây ra mờ, không rõ.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            - Do yếu tố di truyền: nếu trong gia đình có bố hoặc mẹ bị cận thị từ 6 điop trở lên, khả năng trẻ bị cận thị di truyền là 100%.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            - Do học tập và sinh hoạt thiếu khoa học là nguyên nhân cơ bản dẫn đến trình trạng gia tăng số học sinh bị cận thị
                            . Học với cường độ cao, môi trường ánh sáng không đảm bảo, tư thế ngồi học, bàn ghế không phù hợp và đọc sách ở cự ly gần trong thời gian dài.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            - Thường xuyên xem ti vi, chơi máy vi tính nhiều giờ liên tục với cự ly rất gần.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            - Do trẻ sinh thiếu tháng và trẻ sinh ra trọng lượng quá nhẹ là yếu tố khiến cho trẻ bị cận thị và hầu hết trẻ sinh ra với cơ thể dưới 2.5kg thì đến tuổi thiếu niên đều bị cận thị.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            - Chế độ ăn uống thiếu dinh dưỡng, thiếu Vitamin A, C, E, chất khoáng có trong rau củ, trái cây tươi, thịt, cá biển, trứng giúp duy trì các môi trường trong suốt của mắt
                            , giúp mắt tăng khả năng điều tiết, chống thoái hoá võng mạc và hoàng điểm của mắt.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3 leading-10'>
                                Triệu chứng của cận thị
                                <br/>
                                - Nhìn xa không rõ.
                                <br/>
                                - Thấy chữ viết và hình trên bảng mờ, nhìn hay nghiêng đầu và nheo mắt hoặc hay quay đầu.
                                <br/>
                                - Gặp khó khăn khi đọc các biển báo trên đường hoặc nhìn các vật khác ở xa.
                                <br/>
                                - Lúc đọc hoặc viết cúi sát xuống bàn hoặc sách.
                                <br/>
                                - Xem ti vi hay nheo mắt, dụi mắt nhiều hơn mức bình thường.
                                <br/>
                                - Nheo mắt, căng mắt và nhức đầu, chảy nước mắt do mỏi mắt.
                                <br/>
                                - Cảm thấy mệt mỏi khi lái xe hay khi chơi thể thao cũng có thể là triệu chứng của chứng cận thị không chỉnh hình.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            Cận thị là một trong những tật khúc xạ thường gặp ở người lớn và trẻ em và cũng là nguyên nhân hàng đầu gây giảm thị lực trên thế giới
                            . Khi phát hiện những dấu hiệu bị cận thị thì các bậc phụ huynh nên đưa bé đến cơ sở y tế, bệnh viện chuyên khoa mắt để được khám
                            , đo thị lực và được tư vấn đeo kính hay không đeo kính.
                            Không nên đọc sách trong bóng tối hoặc ngồi trước máy vi tính quá nhiều sẽ gây mỏi mắt.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            Ngoài ra nên cho trẻ khám mắt định kỳ 6 tháng 1 lần tại bệnh viện chuyên khoa mắt. Cuối cùng cần tuân thủ chỉ định của Bác sĩ chuyên khoa về việc đeo kính khi phát hiện cận thị, viễn thị hoặc loạn thị.
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