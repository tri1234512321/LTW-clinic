import React, { useState, useEffect } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { useParams } from "react-router-dom";

export default function ProductDetail({
    tokenExpired
}) {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await fetch(`http://localhost:8001/api/v1/business/products/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product detail:", error);
            }
        };

        fetchProductDetail();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (

        <div>
            <Header tokenExpired={tokenExpired}/>
            <div className="my-12">
                <div className="grid grid-cols-1 md:grid-cols-2 px-20">
                    <div className="px-28">
                        <img src={`http://localhost:8001/res/images/product/${product.id}.jpg`} alt={product.name} className="w-full h-auto" />
                    </div>
                    <div>
                        <div className="text-4xl font-bold">{product.name}</div>
                        <div className="text-2xl text-primary my-5">{`${product.price}$`}</div>
                        <div className="text-xl mb-5">Thông tin sản phẩm</div>
                        <div>
                            Mã sản phẩm: {product.id}<br />
                            Trong kho: {product.inStockCount}<br />
                        </div>
                        
                    </div>
                </div>
                <div className="px-20 my-10 min-h-[380px]">
                    <div className="text-2xl font-bold">Mô tả sản phẩm</div>
                    <div className=" my-5">
                        {product.description}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}