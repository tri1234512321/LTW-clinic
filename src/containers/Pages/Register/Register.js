import React from 'react'

import loginImg from '../../../assets/login.jpg'
import googleImg from '../../../assets/google.svg'

export default function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" />
        </div>

        <div className='bg-gray-100 flex flex-col justify-center'>
            <form className='max-w-[450px] w-full mx-auto bg-white p-4'>
                <h2 className='text-4xl font-bold text-center py-6'>REGISTER</h2>
                <div className='flex flex-col py-2'>
                    <label>Name</label>
                    <input className='border p-2' type="text" placeholder='Enter your name'/>
                </div>
                <div className='flex flex-col py-2'>
                    <label>Username</label>
                    <input className='border p-2' type="text" placeholder='Enter your username'/>
                </div>
                <div className='flex flex-col py-2'>
                    <label>Password</label>
                    <input className='border p-2' type="password" placeholder='Enter your password'/>
                </div>

                <button className='border w-full rounded-lg my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>Create account</button>
                <button
                    class="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
                >
                    <img src={googleImg} alt="img" class="w-6 h-6 inline mr-2" />
                    Sign in with Google
                </button>
                <div class="text-center text-gray-400">
                    Already have an account?
                    <span class="font-bold text-black"> Sign in now</span>
                </div>
                
            </form>
        </div>
    </div>
  )
}