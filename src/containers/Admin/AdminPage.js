
import React, {useEffect, useState} from 'react';
import CrudEditor from "../../components/CrudEditor/CrudEditor";
import {jwtClient} from "../../utilities/JWTClient";
//import {useNavigate} from "react-router-dom";
import AdminHeader from "../../components/AdminHeader/AdminHeader";


export default function AdminPage({

}) {

    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        fetchUserInfo(setGreeting);
    }, []);

    /*const navigate = useNavigate();
    const [tokenExpired, setTokenExpired] = useState(false);

    useEffect(() => {
        if (tokenExpired) {
            navigate("/login");
        }
    }, [tokenExpired]);

    useEffect(() => {
        jwtClient.setOnRefreshTokenFailedCallback(() => setTokenExpired(true));
    }, []);*/

    return (
        <div>
            <AdminHeader greeting={greeting}/>
            <CrudEditor
                tables={[
                    {
                        name: "Product",
                        urlPath: "/api/v1/admin/products",
                        headers: ["id", "name", "description", "inStockCount", "price"],
                        idName: "id",
                    },
                    {
                        name: "CartItem",
                        urlPath: "/api/v1/admin/cartitems",
                        headers: ["id", "productId", "userId", "createdAt", "quantity", "isActive"],
                        idName: "id",
                        relations: [
                            {
                                header: "productId",
                                tableName: "Product"
                            },
                            {
                                header: "userId",
                                tableName: "User"
                            }
                        ]
                    },
                    {
                        name: "User",
                        urlPath: "/api/v1/admin/users",
                        headers: ["id", "fullName", "email", "address", "phone"],
                        idName: "id"
                    },
                    {
                        name: "ProductReview",
                        urlPath: "/api/v1/admin/product-review",
                        headers: ["id", "content", "reviewedAt", "rating", "userId", "productId"],
                        idName: "id",
                        relations: [
                            {
                                header: "userId",
                                tableName: "User"
                            },
                            {
                                header: "productId",
                                tableName: "Product"
                            }
                        ]
                    },
                    {
                        name: "ProductOrder",
                        urlPath: "/api/v1/admin/product-order",
                        headers: ["id", "userId", "createdAt", "isPaid", "isDelivered", "status", "note"],
                        idName: "id",
                        relations: [
                            {
                                header: "userId",
                                tableName: "User"
                            }
                        ]
                    },
                    {
                        name: "OrderItem",
                        urlPath: "/api/v1/admin/order-item",
                        headers: ["id", "productId", "orderId", "price", "quantity"],
                        idName: "id",
                        relations: [
                            {
                                header: "productId",
                                tableName: "Product"
                            },
                            {
                                header: "orderId",
                                tableName: "ProductOrder"
                            }
                        ]
                    },
                    {
                        name: "Article",
                        urlPath: "/api/v1/admin/article",
                        headers: ["id", "title", "content", "publishedOn", "userId"],
                        idName: "id",
                        relations: [
                            {
                                header: "userId",
                                tableName: "User"
                            }
                        ]
                    },
                    {
                        name: "ArticleComment",
                        urlPath: "/api/v1/admin/article-comment",
                        headers: ["id", "content", "commentedAt", "userId", "articleId"],
                        idName: "id",
                        relations: [
                            {
                                header: "userId",
                                tableName: "User"
                            },
                            {
                                header: "articleId",
                                tableName: "Article"
                            }
                        ]
                    },
                    {
                        name: "Service",
                        urlPath: "/api/v1/admin/service",
                        headers: ["id", "name", "description", "categoryId", "price"],
                        idName: "id",
                        relations: [
                            {
                                header: "categoryId",
                                tableName: "ServiceCategory"
                            }
                        ]
                    },
                    {
                        name: "ServiceCategory",
                        urlPath: "/api/v1/admin/service-category",
                        headers: ["id", "name"],
                        idName: "id",
                    },
                    {
                        name: "AuthInfo",
                        urlPath: "/api/v1/admin/auth-info",
                        headers: ["id", "username", "passwordHash", "authority", "userId"],
                        idName: "id",
                        relations: [
                            {
                                header: "userId",
                                tableName: "User"
                            }
                        ]
                    },
                    {
                        name: "ProductCategory",
                        urlPath: "/api/v1/admin/product-category",
                        headers: ["id", "name"],
                        idName: "id"
                    }
                ]}
            />
        </div>
    )
}



function fetchUserInfo(setGreeting) {
    jwtClient.fetch("/api/v1/common/auth/user-info")
        .then(response => response.json())
        .then(data => {
            setGreeting("Hello, " + data.fullName + "! Your authority: " + data.authority);
        })
        .catch(error => {
            console.log(error);
        });
}
