import React from 'react'
import medicineIcon from '../../../assets/About/medicine-icon.png'
import doctorIcon from '../../../assets/About/doctor-icon.png'
import friendlyIcon from '../../../assets/About/friendly-icon.png'
import hospitalIcon from '../../../assets/About/hospital-icon.png'
import medicine from '../../../assets/About/medicine.png'

export default function About() {
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 pb-28'>
                <div className='hidden sm:block pr-5 justify-self-end'>
                    <img className='w-full h-full object-cover' src={medicine} alt="" />
                </div>

                <div className='max-w-[700px] w-full pl-5 justify-self-start'>
                    <p className='text-4xl font-bold mb-4'>GIỚI THIỆU</p>
                    <p className='text-lg  mb-4 text-justify'>Trực thuộc Công ty Bán lẻ Pharmacy - thành viên Tập đoàn Pharmacy
                        , hệ thống Nhà thuốc Pharmacy là một trong những chuỗi bán lẻ dược phẩm uy tín tại Việt Nam
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
    )
}