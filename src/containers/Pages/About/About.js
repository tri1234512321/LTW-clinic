import React from 'react'
import medicineIcon from '../../../assets/about/medicine-icon.png'
import doctorIcon from '../../../assets/about/doctor-icon.png'
import friendlyIcon from '../../../assets/about/friendly-icon.png'
import hospitalIcon from '../../../assets/about/hospital-icon.png'
import medicine from '../../../assets/about/medicine.png'

import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

export default function About() {
    return (
        <div>
            <Header />
            <div className="mb-24 mt-10 mx-20">
            <div className='mb-10 pt-5 text-5xl text-center flex m-auto justify-center'>Chào mừng đến với<div className='text-primary font-bold ml-3'>Empalic</div></div>
            <div className='grid grid-cols-1 sm:grid-cols-2 pt-10 pb-15'>
                <div className='hidden sm:block pr-5 justify-self-end'>
                    <img className='w-full max-h-[500px] object-cover' src={medicine} alt="" />
                </div>

                <div className='max-w-[700px] w-full pl-5 justify-self-start'>
                    <p className='text-4xl font-bold mb-4'>GIỚI THIỆU</p>
                    <p className='text-lg  mb-4 text-justify'>Trực thuộc Công ty Bán lẻ Pharmacy - thành viên Tập đoàn Pharmacy
                        , hệ thống Nhà thuốc Epalic là một trong những chuỗi bán lẻ dược phẩm uy tín tại Việt Nam
                        . Với hơn 200 Nhà thuốc tại hơn 50 tỉnh thành (cuối năm 2020)
                        , Covmedi chuyên cung cấp đa dạng các loại thuốc kê đơn, không kê đơn
                        , các sản phẩm thực phẩm chức năng, trang thiết bị y tế, dược mỹ phẩm và nhiều sản phẩm chăm sóc sức khoẻ
                        , tiêu dùng hàng ngày,....
                    </p>    

                    <p className='text-2xl font-bold mb-4'>CHẤT LƯỢNG TỐT - UY TÍN HÀNG ĐẦU</p>
                    <p className='text-lg  mb-4 text-justify'>Tất cả các Nhà thuốc trực thuộc hệ thống đều đạt chuẩn Thực hành thuốc tốt – GPP
                        , với đội ngũ dược sĩ có chuyên môn và giàu kinh nghiệm.
                    </p>

                    <p className='text-2xl font-bold mb-4'>KHÁCH HÀNG LÀ TRỌNG TÂM</p>
                    <p className='text-lg  mb-4 text-justify'>Nhà thuốc Pharmacy không ngừng cải thiện chất lượng dịch vụ từ những điều nhỏ nhất
                        , nhằm nâng cao trải nghiệm khách hàng, đem lại sự hài lòng nhất cho Quý khách.
                    </p>
                </div>
            </div>

            <section className='my-24 py-10 bg-gray-100'>
                <div className='flex justify-center text-5xl font-bold text-primary'>Dịch vụ chính</div>
                <div className='px-32 mt-10 grid grid-cols-1 lg:grid-cols-3'>

                    <article class="overflow-hidden rounded-lg shadow-lg m-10">
                        <a href="#">
                            <img alt="..." class="block h-auto w-full" src="https://plus.unsplash.com/premium_photo-1681967103563-871828436e1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D" />
                        </a>

                        <header className="flex  p-2 md:p-4">
                            <h1 className="text-2xl text-primary ">
                                Dịch vụ sàng lọc gan mật
                            </h1>
                        </header>

                        <footer className="flex  p-2 md:p-4">
                            Gan được xem là một trong những cơ quan nội tạng có trách nhiệm nặng nề nhất trên cơ thể, một khi có vấn đề, toàn cơ thể sẽ bị ảnh hưởng.
                        </footer>
                    </article>

                    <article class="overflow-hidden rounded-lg shadow-lg m-10">
                        <a href="#">
                            <img alt="..." class="block h-auto w-full" src="https://images.unsplash.com/photo-1463367620918-d4824d05ce0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymxvb2QlMjBzdWdhcnxlbnwwfHwwfHx8MA%3D%3D" />
                        </a>

                        <header className="flex  p-2 md:p-4">
                            <h1 className="text-2xl text-primary ">
                                Dịch vụ xét nghiệm đường huyết
                            </h1>
                        </header>

                        <footer className="flex  p-2 md:p-4">
                            Chỉ số xét nghiệm đường huyết sẽ giúp đánh giá cụ thể lượng đường trong cơ thể cũng như hỗ trợ chẩn đoán các vấn đề mà cơ thể mắc phải.

                        </footer>
                    </article>
                    <article class="overflow-hidden rounded-lg shadow-lg m-10">
                        <a href="#">
                            <img alt="..." class="block h-auto w-full" src="https://plus.unsplash.com/premium_photo-1673958771843-12c73b278bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bnVyc2V8ZW58MHx8MHx8fDA%3D" />
                        </a>

                        <header className="flex  p-2 md:p-4">
                            <h1 className="text-2xl text-primary ">
                                Dịch vụ đo huyết áp tại nhà
                            </h1>
                        </header>

                        <footer className="flex  p-2 md:p-4">
                            Kiểm soát huyết áp giúp phòng tránh các nguy cơ tai biến do huyết áp gây ra đối với sức khỏe như tai biến mạch máu não, đột quỵ,...

                        </footer>
                    </article>

                </div>
                <div className='flex justify-center'>
                    <a href='/service'>
                        <button className='bg-whte text-primary border-primary border mt-10 rounded-3xl p-3 w-40 text-center hover:bg-primary hover:text-white transition duration-500 text-xl'>Xem thêm</button>
                    </a>
                </div>
            </section>

            <div className='border-b-2 border-gray-450 pb-20'>
                <div className="flex gap-20 w-fit mx-auto">
                    <div>
                        <img src={medicineIcon} alt="img" class="w-14 h-12 mb-5 mx-auto" />
                        <p className='text-xl'>Thuốc chính hãng 100%, chất lượng</p>
                    </div>
                    <div>
                        <img src={doctorIcon} alt="img" class="w-12 h-12 mb-5  mx-auto" />
                        <p className='text-xl'>Có bác sĩ chuyên môn tư vấn</p>
                    </div>
                    <div>
                        <img src={friendlyIcon} alt="img" class="w-12 h-12 mb-5  mx-auto" />
                        <p className='text-xl'>Nhân viên thân thiện nhiệt tình</p>
                    </div>
                    <div>
                        <img src={hospitalIcon} alt="img" class="w-12 h-12 mb-5  mx-auto" />
                        <p className='text-xl'>Hệ thống phòng khám rộng rãi</p>
                    </div>
                </div>
            </div>

            <div className='my-20 flex place-items-center gap-5 w-fit mx-auto'>
                <p className='text-2xl font-semibold pr-10'>ĐĂNG KÍ NHẬN TIN</p>
                <form className='w-96'>
                    <input class="appearance-none border-2 rounded w-full h-12 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"/>
                </form>
                <button class="bg-red-500 hover:bg-blue-400 h-12 text-white font-bold py-2 px-4 rounded">
                    ĐĂNG KÝ
                </button>

            </div>
            </div>
            <Footer />
        </div>
    )
}