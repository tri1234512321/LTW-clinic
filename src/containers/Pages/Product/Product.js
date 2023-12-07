import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import { jwtClient } from '../../../utilities/JWTClient';
import { useNavigate } from 'react-router-dom';

export default function Products({
  tokenExpired
}) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8001/api/v1/business/products');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);




  const addToCart = async (productId) => {
    try {


      const response = await jwtClient.fetch(`/api/v1/business/cart?productId=${productId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({}),
      }).catch(error => {
        console.log(error)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log('Item added to the cart:', productId);
    } catch (error) {
      console.error('Error adding item to the cart:', error);
    }
  };

  return (
    <div>
      <Header tokenExpired={tokenExpired}/>
      <div className="my-24 mx-10 md:mx-10 lg:mx-24">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="">
            <div className="text-3xl border-b-2 border-primary">Sản phẩm dịch vụ</div>
            <ul>
              <li className="text-xl my-5">
                <a href="/service" className="hover:text-primary">
                  Dịch vụ sức khỏe
                </a>
              </li>
              <li className="text-xl my-5">
                <a href="/service" className="hover:text-primary">
                  Dịch vụ khác
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {products.map(product => (
                <article key={product.id} className="overflow-hidden rounded-lg shadow-lg m-10 col-span-1 md:col-span-1/3">
                  <Link to={`/detail/${product.id}`}>
                    <img alt={product.name} className="block h-auto w-full" src={`http://localhost:8001/res/images/product/${product.id}.jpg`} />
                  </Link>

                  <div className="flex flex-row p-2 md:p-4 my-5">
                    <div className="text-2xl basis-2/3">{product.name}</div>
                    <div className="text-2xl text-primary basis-1/3">{`${product.price}$`}</div>
                  </div>

                  <div className="text-center pb-5">
                    <button className="text-xl font-bold rounded-xl p-2 border-primary border-2 text-primary hover:bg-primary hover:text-white transition duration-500" onClick={() => addToCart(product.id)}>+ Giỏ hàng</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
