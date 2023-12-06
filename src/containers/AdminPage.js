
import React, {useEffect, useState} from 'react';
import CrudEditor from "../components/CrudEditor";
import {jwtClient} from "../auth-api/JWTClient";
import Header from "../components/Header";


export default function AdminPage({

}) {

    useEffect(  () => async function login(){
        if (! await jwtClient.stillHasTokenAfter(7200)) {
            // redirect to login page
            // because this is example, we will log in here
            if (await jwtClient.login("dr_john", "hashed_password")) {
                console.log("Login successful...");
            }
            else {
                console.log("Login failed...");
            }
            /***** BIG NOTE: In actually situation, redirect to login page. This is just example *****/
        }
    }, []);


    return (
        <div>
            <Header/>
            <CrudEditor
                tables={[
                    {
                        name: "Product",
                        urlPath: "/api/v1/admin/products",
                        headers: ["id", "name", "description", "inStockCount", "price"],
                        idName: "id"
                    },
                    {
                        name: "CartItem",
                        urlPath: "/api/v1/admin/cartitems",
                        headers: ["id", "productId", "userId", "createdAt", "quantity", "isActive"],
                        idName: "id"
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
                        idName: "id"
                    },
                    {
                        name: "ProductOrder",
                        urlPath: "/api/v1/admin/product-order",
                        headers: ["id", "userId", "createdAt", "isPaid", "isDelivered", "status", "note"],
                        idName: "id"
                    },
                    {
                        name: "OrderItem",
                        urlPath: "/api/v1/admin/order-item",
                        headers: ["id", "productId", "orderId", "price", "quantity"],
                        idName: "id"
                    },
                    {
                        name: "Article",
                        urlPath: "/api/v1/admin/article",
                        headers: ["id", "title", "content", "publishedOn", "userId"],
                        idName: "id"
                    },
                    {
                        name: "ArticleComment",
                        urlPath: "/api/v1/admin/article-comment",
                        headers: ["id", "content", "commentedAt", "userId", "articleId"],
                        idName: "id"
                    },
                    {
                        name: "Service",
                        urlPath: "/api/v1/admin/service",
                        headers: ["id", "name", "description", "categoryId", "price"],
                        idName: "id"
                    },
                    {
                        name: "ServiceCategory",
                        urlPath: "/api/v1/admin/service-category",
                        headers: ["id", "name"],
                        idName: "id"
                    },
                    {
                        name: "AuthInfo",
                        urlPath: "/api/v1/admin/auth-info",
                        headers: ["id", "username", "passwordHash", "authority", "userId"],
                        idName: "id"
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
