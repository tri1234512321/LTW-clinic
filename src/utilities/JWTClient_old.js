export class JWTClient {
    //static SESSION_CREATED_AT =  '__jwtc__iat';
    //static SESSION_DURATION =  '__jwtc__duration';

    #origin;
    #loginPath;
    #signupPath;
    #logoutPath;
    #refreshPath;
    #checkDurationPath;
    #accessToken;

    constructor(origin, loginPath, signupPath, refreshPath, logoutPath, checkDurationPath) {
        this.#origin = origin;
        this.#loginPath = loginPath;
        this.#signupPath = signupPath;
        this.#refreshPath = refreshPath;
        this.#logoutPath = logoutPath;
        this.#checkDurationPath = checkDurationPath;
        this.#accessToken = null;
    }

    async login(username, password) {
        let success = false;

        const url = this.#origin + this.#loginPath;

        await fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Authorization': 'Basic ' + btoa(username + ":" + password)
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.authorized) {
                    success = true;
                    this.#accessToken = data.accessToken;
                    //this.setCookie(this.createdAtKey(), Date.now(), {expires: new Date(data.hardDuration * 1000 + Date.now())});
                    //this.setCookie(this.durationKey(), data.hardDuration * 1000, {expires: new Date(data.hardDuration * 1000 + Date.now())});
                }
            })
            .catch(err => {
                console.log(err);
            })
            .finally();

        return success;
    }

    async islogin() {
        console.log(this.#accessToken);
        if(this.#accessToken !== null) return true;
    }

    async logout() {
        await this.fetch(this.#logoutPath, {
                method: 'POST',
                credentials: 'include'
            })
            .then(res => res.status === 200)
            .then(success => success ? console.log("LOGOUT SUCCESSFUL...") : console.log("LOGOUT FAILED..."))
        this.#accessToken = null;
    }

    async refreshAccessToken()  {
        console.log("REFRESHING ACCESS TOKEN...");
        let success = false;

        const url = this.#origin + this.#refreshPath;

        await fetch(url, {
            method: 'POST',
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => {
                console.log("REFRESHED ACCESS TOKEN: Fetching data...")
                if (data.authorized) {
                    success = true;
                    this.#accessToken = data.accessToken;
                    console.log("REFRESHED ACCESS TOKEN: Successfully");
                }
            })
            .catch(err => {
                console.log("REFRESHED ACCESS TOKEN: Failed");
                console.log(err);
            })
            .finally();

        return success;
    }

    async fetch(path, options = {}) {
        let success = false;

        const url = this.#origin + path;

        // add Authorization header to options
        options.headers = options.headers || {};

        options.headers['Authorization'] = 'Bearer ' + this.#accessToken;

        let response = await fetch(url, options);

        if (response.status === 401) {
            success = await this.refreshAccessToken();
            if (success) {
                options.headers['Authorization'] = 'Bearer ' + this.#accessToken;
                response = await fetch(url, options);
            }
        }

        return response;
    }

    async fetchJson(url, options = {}) {
        return this.fetch(url, options).then(response => response.json());
    }

    /*stillHasTokenAfter(seconds) {
        let createdAt = parseInt(this.getCookie(this.createdAtKey()));
        let duration = parseInt(this.getCookie(this.durationKey()));

        console.log("Checking local token// CREATED AT: " + createdAt + "; DURATION: " + duration +
            "; NOW: " + Date.now() + "; REMAINING: " + (createdAt + duration - Date.now()));

        if (createdAt && duration) {
            return (createdAt + duration) > (Date.now() + seconds*1000);
        }
        return false;
    }*/

    async stillHasTokenAfter(seconds) {
        let url = this.#origin + this.#checkDurationPath;

        const validDuration = await fetch(url, {
            method: 'GET',
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => {
                return data.validDuration;
            })
            .catch(err => {
                console.log(err);
            })
            .finally();

        console.log("Checking local token// CURRENT VALID DURATION: " + validDuration +
            " seconds; AFTER: " + seconds + " seconds, REMAINING: " + (validDuration - seconds));

        return validDuration > seconds;
    }


    getCookie(name) {
        const cookies = document.cookie.split(';').map(cookie => cookie.trim());
        for (const cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split('=');
            if (cookieName === name) {
                return cookieValue;
            }
        }
        return null;
    }

    setCookie(name, value, options = {}) {
        let cookieString = `${name}=${value}`;

        if (options.expires) {
            const expirationDate = new Date(options.expires).toUTCString();
            cookieString += `; expires=${expirationDate}`;
        }

        if (options.path) {
            cookieString += `; path=${options.path}`;
        }

        if (options.domain) {
            cookieString += `; domain=${options.domain}`;
        }

        if (options.secure) {
            cookieString += `; secure`;
        }

        if (options.httpOnly) {
            cookieString += `; HttpOnly`;
        }

        document.cookie = cookieString;
    }

    /*createdAtKey() {
        return JWTClient.SESSION_CREATED_AT + "_" + this.#origin;
    }*/

    /*durationKey() {
        return JWTClient.SESSION_DURATION + "_" + this.#origin;
    }*/
}

/************** EXPORT objects **************/
export const jwtClient = new JWTClient(
    "http://localhost:8001",
    "/api/v1/common/auth/login",
    "/api/v1/common/auth/signup",
    "/api/v1/common/auth/refresh",
    "/api/v1/common/auth/logout",
    "/api/v1/common/auth/duration"
);