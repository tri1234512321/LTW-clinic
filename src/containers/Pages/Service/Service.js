import React from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import Title from '../../../components/Title/Title.js';

export default function Service({
    tokenExpired
}) {
    return (
        <div>
            <Header tokenExpired={tokenExpired}/>
            <Title namePage={"Dịch Vụ Phòng Khám"}/>
            <div className="my-24 mx-20">
                <div id="healthService" className="text-4xl font-bold border-b-2 border-primary mb-10">Dịch vụ sức khỏe</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-10">
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
                            <img alt="..." class="block h-auto w-full" src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D" />
                        </a>

                        <header className="flex  p-2 md:p-4">
                            <h1 className="text-2xl text-primary ">
                                Dịch vụ thăm khám bệnh tại nhà
                            </h1>
                        </header>

                        <footer className="flex  p-2 md:p-4">
                        Hỗ trợ kiểm soát huyết áp cũng như khám bệnh giúp phòng tránh và đảm bảo sức khỏe cho người thân trong gia đình.

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
                <div id="otherService" className="text-4xl font-bold border-b-2 border-primary mb-10">Dịch vụ khác</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-10">
                    <article class="overflow-hidden rounded-lg shadow-lg m-10">
                        <a href="#">
                            <img alt="..." class="block h-auto w-full" src="https://images.unsplash.com/photo-1522844990619-4951c40f7eda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NhbGV8ZW58MHx8MHx8fDA%3D" />
                        </a>

                        <header className="flex  p-2 md:p-4">
                            <h1 className="text-2xl text-primary ">
                                Dịch vụ kiểm tra cân nặng và chiều cao
                            </h1>
                        </header>

                        <footer className="flex  p-2 md:p-4">
                        BMI (Body mass Index) là chỉ số được tính từ chiều cao và cân nặng, là một chỉ số đáng tin cậy về sự mập ốm của một người.

                        </footer>
                    </article>

                </div>
            </div>
            <Footer />
        </div>
    )
}