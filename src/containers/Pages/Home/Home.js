import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

export default function Home({
    tokenExpired
}) {
    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1524222928538-afb4409a0d70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Bảo vệ sức khỏe bạn và gia đình bạn',
            text: 'Với dội ngũ bác sĩ được đào tạo chính quy, bài bản, luôn phục vụ tận tâm. Trung tâm cũng liên kết với các bệnh viện đa khoa, chuyên khoa trong khu vực và thành phố.'
        },
        {
            url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Chúng tôi chăm sóc sức khỏe gia đình bạn',
            text: 'Trung tâm chăm sóc sức khỏe Prolexe là một tổ chức y tế đã được Nhà nước cấp phép, trong đó trung tâm được phép khám bệnh ban đầu, chẩn đoán, điều trị cho khách hàng có nhu cầu khám bệnh tại nhà'
        },
        {
            url: 'https://plus.unsplash.com/premium_photo-1673953509986-9b2bfe934ae5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Trung tâm chăm sóc sức khỏe',
            text: 'Mô hình tiên tiến nhất trên thế giới về chăm sóc sức khỏe toàn diện. Empalic visit chính là nơi bạn có thể nắm rõ tình hình sức khoẻ của mình ở hiện tại và tương lai'
        }

    ]

    const [currentIdx, setCurrentIdx] = useState(0)

    const prevSlide = () => {
        setCurrentIdx((prev) => (prev - 1 + slides.length) % slides.length)
    }

    const nextSlide = () => {
        setCurrentIdx((prev) => (prev + 1) % slides.length)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 10000); // Change slide every 5s

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="">
            <Header tokenExpired={tokenExpired}/>
            <section className="h-[600px] w-full m-auto pb-4 relative">
                <div style={{ backgroundImage: `url(${slides[currentIdx].url})` }} className='w-full h-full bg-center bg-cover duration-500 brightness-[60%]'>
                </div>

                <div className='absolute top-[20%] md:top-[35%] left-[10%] w-[90%] md:w-[70%] text-white '>
                    <div className='text-5xl font-bold mb-5'>{slides[currentIdx].title}</div>
                    <div className='text-2xl w-[90%] md:w-[75%]'>{slides[currentIdx].text}</div>
                </div>

                <div className='absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-white text-black hover:bg-primary hover:text-white'>
                    <AiOutlineArrowLeft size={30} onClick={prevSlide} />
                </div>
                <div className='absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-white text-black hover:bg-primary hover:text-white'>
                    <AiOutlineArrowRight size={30} onClick={nextSlide} />
                </div>
            </section>

            <section className=' flex flex-col my-20 justify-center px-40'>
                <div className='mt-5 text-5xl text-center flex m-auto flex-wrap'>Chào mừng đến với<div className='text-primary font-bold ml-3'>Empalic</div></div>
                <br />
                <div className='text-xl text-center'>Empalic chính là nơi bạn có thể nắm rõ tình hình sức khoẻ của mình ở hiện tại và trong tương lai, từ đó có các phương án quản lý và nâng cao sức khoẻ ngay từ khi còn khoẻ mạnh.</div>
                <div className='flex justify-center'>
                    <a href='/about'>
                        <button className='bg-whte text-primary border-primary border mt-10 rounded-3xl p-3 w-40 text-center hover:bg-primary hover:text-white transition duration-500 text-xl'>Tìm hiểu thêm</button>
                    </a>
                </div>
            </section>

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

            <section className='my-24'>
                <div className='flex justify-center text-5xl text-black'>Đội ngũ bác sĩ</div>
                <div className='px-32 mt-10 grid grid-cols-1 md:grid-cols=2 lg:grid-cols-4'>

                    <article class="overflow-hidden rounded-lg shadow-lg m-10">
                        <img alt="..." class="block h-auto w-full" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

                        <header className="flex  p-2 md:p-4 justify-center">
                            <h1 className="text-2xl text-primary font-bold">
                                Dr. A
                            </h1>
                        </header>

                        <footer className=" p-2 md:p-4 text-center">
                            Chuyên gia tim mạch
                        </footer>
                    </article>

                    <article class="overflow-hidden rounded-lg shadow-lg m-10">
                        <img alt="..." class="block h-auto w-full" src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

                        <header className="flex  p-2 md:p-4 justify-center">
                            <h1 className="text-2xl text-primary font-bold">
                                Dr. B
                            </h1>
                        </header>

                        <footer className=" p-2 md:p-4 text-center">
                            Chuyên gia tim mạch
                        </footer>
                    </article>

                    <article class="overflow-hidden rounded-lg shadow-lg m-10">
                        <img alt="..." class="block h-auto w-full" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

                        <header className="flex  p-2 md:p-4 justify-center">
                            <h1 className="text-2xl text-primary font-bold">
                                Dr. C
                            </h1>
                        </header>

                        <footer className=" p-2 md:p-4 text-center">
                            Chuyên gia tim mạch
                        </footer>
                    </article>

                    <article class="overflow-hidden rounded-lg shadow-lg m-10">
                        <img alt="..." class="block h-auto w-full" src="https://plus.unsplash.com/premium_photo-1681996484614-6afde0d53071?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

                        <header className="flex  p-2 md:p-4 justify-center">
                            <h1 className="text-2xl text-primary font-bold">
                                Dr. D
                            </h1>
                        </header>

                        <footer className=" p-2 md:p-4 text-center">
                            Chuyên gia tim mạch
                        </footer>
                    </article>

                </div>
            </section>

            <section className='my-24 bg-gray-100 py-10'>
                <div className='text-center text-5xl font-bold text-primary mb-10'>Đặt lịch ngay</div>
                <div className='text-center text-xl mb-5'>Đăng ký và đặt dịch vụ của chúng tôi lần đầu để nhận được những ưu đãi cho bạn và gia đình</div>
                <div className='text-center'>
                    <a href='/contact'>
                        <button className='text-center bg-primary text-white px-5 py-3 rounded-full'>
                            <div className='flex flex-row items-center text-lg'>
                                Đặt lịch ngay
                                <AiOutlineArrowRight size={25} className='ml-3' />
                            </div>
                        </button>
                    </a>

                </div>
            </section>

            <section className='my-24'>
                <div className='flex justify-center text-5xl text-primary'>Thời gian hoạt động</div>
                <div className='px-40 mt-10 grid grid-cols-1 md:grid-cols-2'>
                    <div className='relative h-[30rem] md:h-auto col-span-2 md:col-span-1 my-10 md:my-0'>
                        <img src='https://demo037059.web30s.vn/datafiles/web30s/upload/images/7000-7100/30S-03-7059/1.jpg' className='rounded-lg w-[50%] absoluite left-0' />
                        <img src='https://demo037059.web30s.vn/datafiles/web30s/upload/images/7000-7100/30S-03-7059/2.jpg' className='rounded-lg w-[40%] absolute right-5 bottom-10' />
                        <div className=' right-5 top-10 text-4xl font-bold w-[40%] absolute text-primary'>20 năm kinh nghiệm hoạt động</div>
                    </div>
                    <div className='col-span-2 md:col-span-1'>
                        <h1 className='text-3xl font-bold'>Giờ mở cửa:</h1>
                        <p>Bác sĩ Y khoa thực hiện đánh giá sức khỏe. Đưa ra lời khuyên về sức khỏe cho bệnh nhân</p>
                        <table className='w-full mt-10 text-xl'>
                            <tr className='border-b-2 border-gray-300'>
                                <td className='py-6'>Thứ 2</td>
                                <td className='text-right'>8:00 Sáng - 4:00 Chiều</td>
                            </tr>
                            <tr className='border-b-2 border-gray-300'>
                                <td className='py-6'>Thứ 3</td>
                                <td className='text-right'>8:00 Sáng - 4:00 Chiều</td>
                            </tr>
                            <tr className='border-b-2 border-gray-300'>
                                <td className='py-6'>Thứ 4</td>
                                <td className='text-right'>8:00 Sáng - 4:00 Chiều</td>
                            </tr>
                            <tr className='border-b-2 border-gray-300'>
                                <td className='py-6'>Thứ 5</td>
                                <td className='text-right'>8:00 Sáng - 4:00 Chiều</td>
                            </tr>
                            <tr className='border-b-2 border-gray-300'>
                                <td className='py-6'>Thứ 6</td>
                                <td className='text-right'>8:00 Sáng - 4:00 Chiều</td>
                            </tr>
                            <tr className='border-b-2 border-gray-300'>
                                <td className='py-6'>Thứ 7</td>
                                <td className='text-right'>8:00 Sáng - 4:00 Chiều</td>
                            </tr>
                            <tr >
                                <td className='py-6'>Chủ nhật</td>
                                <td className='text-right'>Đóng cửa</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}