
import React, {useEffect, useState} from 'react';
import CrudEditor from "../components/CrudEditor";
import {jwtClient} from "../auth-api/JWTClient";

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
            <CrudEditor
                tables={[
                    {
                        name: "Product",
                        urlPath: "/api/v1/dev/products",
                        headers: ["id", "name", "description", "inStockCount", "price"],
                        idName: "id"
                    },
                    {
                        name: "CartItem",
                        urlPath: "/api/v1/dev/cartitems",
                        headers: ["id", "productId", "userId", "createdAt", "quantity", "isActive"],
                        idName: "id"
                    },
                    {
                        name: "User",
                        urlPath: "/api/v1/dev/users",
                        headers: ["id", "fullName", "email", "address", "phone"],
                        idName: "id"
                    }
                ]}
            />
        </div>
    )
}
