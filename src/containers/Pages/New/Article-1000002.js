import React from 'react'

import Header from '../../../components/Header/Header.js';
import Footer from '../../../components/Footer/Footer.js';

import medicine from '../../../assets/new/medicine.jpg'
import mengan from '../../../assets/new/men-gan.jpg'
import maumui from '../../../assets/new/mau-mui.jpg'
import canthi from '../../../assets/new/can-thi.jpg'

import rightarrow from '../../../assets/new/right-arrow.png'
import CommentSection from './comment.js';

export default function Article1000002() {
    const articleId=1000002
    return (
        <div>
        <Header />
            <div className="my-24 mx-20">
                <div className='grid grid-cols-1 sm:flex sm:w-fit sm:mx-auto mt-10'>
                    <div className='2xl:w-[900px] xl:gap-6 sm:w-9/12 w-full pb-20'>
                        <div className='border-solid border border-slate-200 h-fit rounded-md p-6 mb-6 w-full'>
                            <div className='h-[200px] rounded-md mb-6'>
                                <img className='w-full h-full object-cover rounded-md' src={mengan} alt="" />
                            </div>
                            
                            <p className='text-3xl font-bold mb-3 h-[56px] hover:text-sky-500'>Tăng men gan</p>
                            
                            <p className='self-end text-sm pb-4'> 26/08/2022 </p>

                            <div className='max-h-[72px] overflow-y-hidden  mb-4'>
                                <p className='text-base  text-justify text-gray-600'>
                                    Tăng men gan là tình trạng khi một hoặc nhiều enzym trong tế bào gan (AST, ALT, GGT, Phosphatase kiềm…) có giá trị cao hơn mức bình thường.</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            Tăng men gan là tình trạng khi một hoặc nhiều enzym trong tế bào gan (AST, ALT, GGT, Phosphatase kiềm…) có giá trị cao hơn mức bình thường.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            Là hậu quả của quá trình tế bào gan bị tổn thương trong thời gian dài.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            Men gan bình thường sẽ ở mức dưới 40 UI/ml. Trường hợp men gan tăng sẽ có giá trị cao hơn 40 UI/ml.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            Có rất nhiều nguyên nhân gây ra tăng men gan, trong đó nguyên nhân chủ yếu thường là do:
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            - Viêm gan: đây là nguyên nhân chính dẫn đến tăng men gan. Nồng độ của men gan tăng thường tỷ lệ thuận với mức độ viêm nhiễm của gan.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            - Tăng men gan do sử dụng nhiều bia rượu: bia rượu là những chất độc đối với gan vì vậy sử dụng quá nhiều bia rượu dẫn đến tăng men gan.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            - Do bệnh lý: Sốt rét, viêm tụy, gan nhiễm mỡ, các bệnh về đường mật, đặc biệt các bệnh lý về gan như gan nhiễm mỡ
                            , suy gan, viêm gan tự miễn, … cũng là nguyên nhân gây tăng men gan và một số bệnh lý khác chưa được liệt kê.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            - Dùng thuốc: Một số loại thuốc có có tác động đến gan và thậm chí gây độc cho gan điển hình là thuốc chống vi khuẩn lao (INH, rifamixin, … )
                            , thuốc kháng sinh nhóm quinolon (ciprofloxacin), acetaminophen (paracetamol) có thể ảnh hưởng đến gan làm tăng men gan.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            Ngoài ra còn một số trường hợp men gan tăng nhưng không phải từ các nguyên nhân kể trên mà do hoạt hoạt đông thể lực mạnh, các bệnh lý không phải từ gan.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            Khi bị tăng men gan các dấu hiệu thường không rõ ràng, chỉ gặp các triệu chứng như:
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            - Đau hạ sườn phải
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            - Trướng bụng nhẹ
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            - Giãn vi mạch ở cổ, mặt, …
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            - Cơ thể mệt mỏi, hay sốt nhẹ vào buổi chiều.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            - Nhiều trường hợp không xuất hiện triệu chứng lâm sàng dù men gan rất cao, người bệnh vẫn học tập làm việc và sinh hoạt bình thường.
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            Tùy trường hợp mà triệu chứng tăng men gan có thể gây ra ở bệnh nhân
                            . Nếu gặp một trong những triệu chứng sau người bệnh cần phải đến cơ sơ y tế để được xét nghiệm và chuẩn đoán:
                            </p>
                            <p className='text-lg  text-justify text-gray-600 mb-3 leading-10'>
                                - Vàng da
                                <br/>
                                - Phân màu nhạt
                                <br/>
                                - Ngứa
                                <br/>
                                - Phù
                            </p>

                            <p className='text-lg  text-justify text-gray-600 mb-3 leading-10'>
                                Không có biện pháp điều trị tăng men gan cụ thể và triệt để. Điều trị nguyên nhân gây bệnh là chủ yếu:
                                <br/>
                                - Điều trị các bệnh lý về gan, mật, tụy là nguyên nhân gây tăng men gan
                                <br/>
                                - Tuyệt đối không sử dụng rượu, bia, các chất có ảnh hưởng đến gan và làm tăng men gan.
                                <br/>
                                - Không lạm dụng các loại thuốc gây ảnh hưởng đến gan
                                <br/>
                                - Sử dụng những loại thuốc hỗ trợ thanh lọc giải độc gan nhưng không lạm dụng quá liều.
                                <br/>
                                - Tuân theo chỉ định điều trị của bác sĩ để điều trị tăng men gan đạt hiệu quả tốt nhất.
                            </p>

                            <p className='text-lg  text-justify text-gray-600 mb-3'>
                            Tăng men gan là dấu hiệu của các bệnh lý về gan, vì vậy khi thấy có điều gì bất thường như vàng da hoặc trướng bụng cần đến bệnh viện để được chẩn đoán và điều trị kịp thời
                            . Tăng men gan có thể xảy ra tạm thời trong vài tuần, có khi vài tháng hoặc có thể vài năm. Vì không có triệu chứng rõ ràng nên khiến người bệnh chủ quan, không đi xét nghiệm
                            , ăn uống sinh hoạt không hợp lý, sử dụng các chất kích thích, bia, rượu gây tổn hại cho gan. Vì vậy để tránh những tổn hại cho gan cần phải xây dựng một lối sống khỏe mạnh
                            , ăn uống điều độ, luyện tập thể dục thể thao để có được một lá gan khỏe mạnh.
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