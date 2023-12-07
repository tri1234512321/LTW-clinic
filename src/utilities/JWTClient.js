// export JwtClient object

export class JWTClient {
    //static SESSION_CREATED_AT =  '__jwtc__iat';
    //static SESSION_DURATION =  '__jwtc__duration';

    static REFRESH_TOKEN_FAILED = "REFRESH_ACCESS_TOKEN_FAILED";
    static LOGOUT_ERROR = "LOGOUT_ERROR";

    #origin;
    #loginPath;
    #logoutPath;
    #refreshPath;
    #checkDurationPath;
    #accessToken;
    #onRefreshTokenFailedCallback;

    constructor(origin, loginPath, refreshPath, logoutPath, checkDurationPath, onRefreshTokenFailedCallback = () => {}) {
        this.#origin = origin;
        this.#loginPath = loginPath;
        this.#refreshPath = refreshPath;
        this.#logoutPath = logoutPath;
        this.#checkDurationPath = checkDurationPath;
        this.#accessToken = null;
        this.#onRefreshTokenFailedCallback = onRefreshTokenFailedCallback;
    }

    setOnRefreshTokenFailedCallback(onRefreshTokenFailedCallback) {
        this.#onRefreshTokenFailedCallback = onRefreshTokenFailedCallback;
    }

    async login(username, password) {

        const url = this.#origin + this.#loginPath;

        let success = await fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Authorization': 'Basic ' + btoa(username + ":" + password)
            }
        })
            .then(response => {
                if (response.status === 200) {
                    return true;
                }
                else {
                    return false;
                }
            })

        return success;
    }

    /*async logout() {
        let isSuccess = await this.fetch(this.#logoutPath, {
                method: 'POST',
                credentials: 'include'
            })
            .then(res => {
                if (res.status === 200) {
                    console.log("IN JWTClient.logout()... LOGOUT SUCCESSFUL...")
                    return true;
                }
                console.log("IN JWTClient.logout()... LOGOUT FAILED...")
                return false;
            })
        this.#accessToken = null;
        return isSuccess;
    }*/

    logout() {
        return this.fetch(this.#logoutPath, {
            method: 'POST',
            credentials: 'include'
        })
            .then(response => {
                if (response.status === 200 || response.status === 401) {
                    console.log("IN JWTClient.logout()... LOGOUT SUCCESSFUL...")
                    this.#accessToken = null;
                    return true;
                }
                console.log("IN JWTClient.logout()... LOGOUT FAILED...")
                return Promise.reject(JWTClient.LOGOUT_ERROR);
            })
    }

    refreshAccessToken()  {
        console.log("REFRESHING ACCESS TOKEN...");

        const url = this.#origin + this.#refreshPath;

        let isRefreshSuccessful = false;

        return fetch(url, {
            method: 'POST',
            credentials: 'include'
        })
            .then(response => {
                if (response.status === 200) {

                    isRefreshSuccessful = true;
                }
                return response.json();
            })
            .then(data => {
                if (isRefreshSuccessful) {
                    this.#accessToken = data.accessToken;
                    console.log("REFRESH ACCESS TOKEN SUCCESSFUL...");
                    return true;
                }
                else {
                    console.log("REFRESH ACCESS TOKEN FAILED...");
                    return false;
                }
            })
    }

    /*async fetch(path, options = {}) {
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
    }*/

    async fetch(path, options = {}) {
        const url = this.#origin + path;

        // add Authorization header to options
        options.headers = options.headers || {};

        options.headers['Authorization'] = 'Bearer ' + this.#accessToken;

        let response =
            fetch(url, options)
                .then( (response) => {
                    if (response.status === 401) {
                        return this.refreshAccessToken();
                    }
                    else {
                        return response;
                    }
                })
                .then(response => {
                    if (response instanceof Response) {
                        return response;
                    }
                    else if (response) {
                        options.headers['Authorization'] = 'Bearer ' + this.#accessToken;
                        return fetch(url, options);
                    }
                    else {
                        return Promise.reject(JWTClient.REFRESH_TOKEN_FAILED);
                    }
                })
                .catch(reason => {
                    if (reason === JWTClient.REFRESH_TOKEN_FAILED) {
                        console.log("REFRESH ACCESS TOKEN FAILED...CALL CALLBACK FUNCTION...");
                        this.#onRefreshTokenFailedCallback();
                        return Promise.reject(reason);
                    }
                    else {
                        console.log(reason);
                        return Promise.reject(reason);
                    }
                })

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
    "/api/v1/common/auth/refresh",
    "/api/v1/common/auth/logout",
    "/api/v1/common/auth/duration",
    () => {
        console.log("CALLBACK NAVIGATE TO LOGIN PAGE...");
    }
);

export const noRedirectJwtClient = new JWTClient(
    "http://localhost:8001",
    "/api/v1/common/auth/login",
    "/api/v1/common/auth/refresh",
    "/api/v1/common/auth/logout",
    "/api/v1/common/auth/duration",
    () => {
        console.log("Authorization failed but no callback...");
    }
);