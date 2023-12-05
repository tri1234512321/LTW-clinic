import {jwtClient} from "./JWTClient.js";



async function requestData() {
    const response = await jwtClient.fetch("/api/v1/dev/products");
    const data = await response.json();
    console.log(data);
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// login
if ( ! await jwtClient.stillHasTokenAfter(7200)) { // if token is not valid after 7200 seconds, redirect to login page
    // redirect to login page
    // because this is example, we will login here
    if (await jwtClient.login("dr_john", "hashed_password")) {
        console.log("Login successful...");
    }
    else {
        console.log("Login failed...");
    }
    /***** BIG NOTE: In actually situation, redirect to login page. This is just example *****/
}

else {
    console.log("Token is still valid... no need to login...");
}

// repeatedly request data
for (let i = 0; i < 10; i++) {
    await requestData();
    await sleep(5000);
}

// logout
await jwtClient.logout();


