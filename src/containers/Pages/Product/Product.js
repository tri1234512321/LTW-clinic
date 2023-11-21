import React from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

export default function Products() {
    return (
        <div>
            <Header />
            <div className="my-24 mx-10 md:mx-10 lg:mx-24">
                <div className="grid grid-cols-1 md:grid-cols-4">
                    <div className="">
                        <div className="text-3xl border-b-2 border-primary">Sản phẩm dịch vụ</div>
                        <ul>
                            <li className="text-xl my-5 "><a href="/service" className="hover:text-primary">Dịch vụ sức khỏe</a></li>
                            <li className="text-xl my-5 "><a href="/service" className="hover:text-primary">Dịch vụ khác</a></li>
                        </ul>

                    </div>
                    <div className="col-span-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            <article class="overflow-hidden rounded-lg shadow-lg m-10 col-span-1 md:col-span-1/3 ">
                                <a href="/detail">
                                    <img alt="..." class="block h-auto w-full" src="https://demo037059.web30s.vn/datafiles/32953/upload/images/product/efferalgan-500mg.jpg" />
                                </a>

                                <div className="flex flex-row p-2 md:p-4 my-5">
                                    <div className="text-2xl basis-2/3">
                                        Efferalgan 500Mg
                                    </div>
                                    <div className="text-2xl text-primary basis-1/3">
                                        50.000đ
                                    </div>
                                </div>

                                <div className="text-center pb-5">
                                    <button className="text-xl font-bold rounded-xl p-2 border-primary border-2 text-primary hover:bg-primary hover:text-white transition duration-500">+ Giỏ hàng</button>
                                </div>
                            </article>

                            <article class="overflow-hidden rounded-lg shadow-lg m-10 col-span-1 md:col-span-1/3 ">
                                <a href="/detail">
                                    <img alt="..." class="block h-auto w-full" src="https://demo037059.web30s.vn/datafiles/32953/upload/images/product/efferalgan-500mg.jpg" />
                                </a>

                                <div className="flex flex-row p-2 md:p-4 my-5">
                                    <div className="text-2xl basis-2/3">
                                        Efferalgan 500Mg
                                    </div>
                                    <div className="text-2xl text-primary basis-1/3">
                                        50.000đ
                                    </div>
                                </div>

                                <div className="text-center pb-5">
                                    <button className="text-xl font-bold rounded-xl p-2 border-primary border-2 text-primary hover:bg-primary hover:text-white transition duration-500">+ Giỏ hàng</button>
                                </div>
                            </article>
                            <article class="overflow-hidden rounded-lg shadow-lg m-10 col-span-1 md:col-span-1/3 ">
                                <a href="#">
                                    <img alt="..." class="block h-auto w-full" src="https://demo037059.web30s.vn/datafiles/32953/upload/images/product/efferalgan-500mg.jpg" />
                                </a>

                                <div className="flex flex-row p-2 md:p-4 my-5">
                                    <div className="text-2xl basis-2/3">
                                        Efferalgan 500Mg
                                    </div>
                                    <div className="text-2xl text-primary basis-1/3">
                                        50.000đ
                                    </div>
                                </div>

                                <div className="text-center pb-5">
                                    <button className="text-xl font-bold rounded-xl p-2 border-primary border-2 text-primary hover:bg-primary hover:text-white transition duration-500">+ Giỏ hàng</button>
                                </div>
                            </article>
                            <article class="overflow-hidden rounded-lg shadow-lg m-10 col-span-1 md:col-span-1/3 ">
                                <a href="#">
                                    <img alt="..." class="block h-auto w-full" src="https://demo037059.web30s.vn/datafiles/32953/upload/images/product/efferalgan-500mg.jpg" />
                                </a>

                                <div className="flex flex-row p-2 md:p-4 my-5">
                                    <div className="text-2xl basis-2/3">
                                        Efferalgan 500Mg
                                    </div>
                                    <div className="text-2xl text-primary basis-1/3">
                                        50.000đ
                                    </div>
                                </div>

                                <div className="text-center pb-5">
                                    <button className="text-xl font-bold rounded-xl p-2 border-primary border-2 text-primary hover:bg-primary hover:text-white transition duration-500">+ Giỏ hàng</button>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}