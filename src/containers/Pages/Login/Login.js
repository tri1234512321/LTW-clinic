import React, {useEffect, useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'; 

import loginImg from '../../../assets/login.jpg'
import googleImg from '../../../assets/google.svg'

import {JWTClient, jwtClient, noRedirectJwtClient} from "../../../utilities/JWTClient";

export default function Login() {
    const navigate = useNavigate();
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [asAdmin, setAsAdmin] = useState(false);

    /*useEffect(() => {
        async function checkIfLoggedIn() {
            await jwtClient.fetch("/api/v1/common/auth/user-info")
                .then(res => {
                    if (res.status === 200) {
                        navigate("/home");
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }

        checkIfLoggedIn();

    }, []);*/

    useEffect(() => {
        async function checkLoginAndSetFetching() {
            let shouldPull = await noRedirectJwtClient.fetch("/api/v1/common/auth/user-info")
                .then(res => true)
                .catch(err => {
                    if (err !== JWTClient.REFRESH_TOKEN_FAILED) {
                        navigate("/home");
                    }
                })
        }
        checkLoginAndSetFetching();
    }, [])


    // const handleUserInput = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     this.setState({[name]: value},
    //                 () => { this.validateField(name, value) });
    // }

    // validateField(fieldName, value) {
    //     let fieldValidationErrors = this.state.formErrors;
    //     let usernameValid = this.state.usernameValid;
    //     let passwordValid = this.state.passwordValid;

    //     switch(fieldName) {
    //     case 'username':
    //         usernameValid = value.length >= 3; 
    //         fieldValidationErrors.username = usernameValid ? '' : ' is too short';
    //         break;
    //     case 'password':
    //         passwordValid = value.length >= 8;
    //         fieldValidationErrors.password = passwordValid ? '': ' is too short';
    //         break;
    //     default:
    //         break;
    //     }
    //     this.setState({formErrors: fieldValidationErrors,
    //                     usernameValid: usernameValid,
    //                     passwordValid: passwordValid
    //                 }, this.validateForm);
    // }



    // // Validate Form through other Fields
    // validateForm() {
    //     this.setState({formValid: this.state.usernameValid && this.state.passwordValid});
    // }
    
    
    //Send the Form to server to check if user username  and password are stored in DB with PHP 
    const handleSubmit = async(e) =>{
    
        e.preventDefault();

        // if (!await jwtClient.stillHasTokenAfter(7200)) { // if token is not valid after 7200 seconds, redirect to login page
        //     // redirect to login page
        //     // because this is example, we will login here
        //     if (await jwtClient.login(username, password)) {
        //         console.log("Login successful...");
        //         console.log()
        //         navigate("/home");
        //     }
        //     else {
        //         console.log("Login failed...");
        //     }
        //     /***** BIG NOTE: In actually situation, redirect to login page. This is just example *****/
        // }
        // else {
        //     console.log("Token is still valid... no need to login...");
        //     navigate("/home");
        // }

        // fetch("http://localhost:8001/dev/login", {
        //     method: "POST",
        //     headers: {
        //         "Authorization": "Basic " + btoa(UserUsername+":"+UserPassword)
        //     },
        // }).then((response) => {
        //     console.log(response);
        //     console.log(response.json())})
        // .then((response) => response.json())
        //     .then((responseJson) => {
    
        //     // If server response message same as Data Matched
        //         if(responseJson["authorized"] === "true"){ 
        //             sessionStorage.setItem("userid", responseJson["userid"]);
        //             sessionStorage.setItem("authority", responseJson["authority"]);
        //             sessionStorage.setItem("token", responseJson["token"]);
        //             // redirection to shops component to view shops
        //             this.props.history.push("/home");  
        //             alert('Sign in succes !');  
        //         }else {
        //             alert(responseJson["message"]);
        //             this.setState(initialState);
        //         }
    
        //     }).catch((error) => {
        //     console.log('not work');
        //     console.log(error);
        //     }); 
        
        /*await jwtClient.login(username, password);
        await jwtClient.fetch(reponse=>{
            return jwtClient.fetch("/api/v1/common/auth/user-info")
        })
        .catch(err => {
            console.log(err)
        })

        if(asAdmin){
            navigate("/admin")
        } else{
            navigate("/home");
        }*/

        /*jwtClient.fetch("/api/v1/common/auth/user-info")
            .then(res => {
                if(asAdmin){
                    navigate("/admin")
                } else{
                    navigate("/home");
                }
            })
            .catch(err => {
                console.log(err)
                jwtClient.login(username, password)
                    .then(success => {
                        if (success) {
                            if(asAdmin){
                                navigate("/admin")
                            } else{
                                navigate("/home");
                            }
                        }{
                            console.log("Login failed...")
                            alert("Login failed...");
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })*/

        await jwtClient.login(username, password)
            .then(success => {
                if (success) {
                    if(asAdmin){
                        jwtClient.fetch("/api/v1/common/auth/user-info")
                            .then(res => {
                                if (res.status !== 200) {
                                    console.log("Login failed...")
                                    alert("Internal server errror, please contact us...");
                                    return Promise.reject("Internal server error, please contact us...");
                                }
                                return res.json();
                            })
                            .then(data => {
                                if (data.authority > 1) {
                                    console.log("Login failed...")
                                    alert("Not enough authority to access admin page...");
                                    navigate("/home");
                                }
                                else {
                                    navigate("/admin")
                                }
                            })
                            .catch(err => {
                                console.log(err)
                            })
                    } else {
                        navigate("/home");
                    }
                }
                else {
                    console.log("Login failed...")
                    alert("Incorrect username or password...");
                }
            })
            .catch(err => {
                console.log(err)
            })


        
    } 
        return (
            <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
                <div className='hidden sm:block'>
                    <img className='w-full h-full object-cover' src={loginImg} alt="" />
                </div>

                <div className='bg-gray-100 flex flex-col justify-center'>
                    <form className='max-w-[450px] w-full mx-auto bg-white p-4' onSubmit={handleSubmit}>
                        <h2 className='text-4xl font-bold text-center py-6'>LOG IN</h2>
                        <div className='flex flex-col py-2 '>
                            <label>Username</label>
                            <input className='border p-2' type="text" 
                                        name="username"
                                        placeholder='Enter your username'
                                        value={username}
                                        onChange={(e) => setusername(e.target.value)}/>
                        </div>
                        <div className='flex flex-col py-2'>
                            <label>Password</label>
                            <input className='border p-2' type="password" 
                                        name="password"
                                        placeholder='Enter your password'
                                        value={password}
                                        onChange={(e) => setpassword(e.target.value)}/>
                        </div>
                        <div class="flex justify-between w-full py-4">
                            <div class="mr-24">
                            <input type="checkbox" class="mr-2" value={asAdmin} onClick={(e)=>{setAsAdmin(!asAdmin)}}/>
                            <span class="text-md">Đăng nhập với admin</span>
                            </div>
                            <span class="font-bold text-md">Forgot password</span>
                        </div>
                        <button className='border w-full rounded-lg my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>Sign In</button>
                        <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
                                type="submit" name="signin">
                            <img src={googleImg} alt="img" class="w-6 h-6 inline mr-2" />
                            Sign in with Google
                        </button>
                        <div class="text-center text-gray-400">
                            Dont'have an account?
                            <span class="font-bold text-black"> <Link to="/register">Sign UP</Link> for free</span>
                        </div>
                        
                    </form>
                </div>
            </div>
        )
}