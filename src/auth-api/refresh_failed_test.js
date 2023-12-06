import {JWTClient, jwtClient} from "./JWTClient.js";
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));


// login
if (! await jwtClient.login("dr_john", "hashed_password")) {
    console.log("Login failed...");
}
else{
    for (let i = 0; i < 8; i++) {
        const response = await jwtClient.fetch("/api/v1/dev/products");
        const data = await response.json();
        console.log(data);
        await sleep(3000);
    }

    // logout
    if (await jwtClient.logout()) {
        console.log("Logout successful...");
    }

    // try to request data again
    const data = await
        jwtClient.fetch("/api/v1/dev/products")
            .then(response => response.json())
            .catch(err => {
                console.log("Error...");
                console.log(err);
                if (err === JWTClient.REFRESH_TOKEN_FAILED) {
                    console.log("You need to login...");
                }
            });

}













