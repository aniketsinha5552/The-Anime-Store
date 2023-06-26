import React from 'react'
import Header from '../components/Header'
const anime = require('../assets/anime_poster.jpg')

export const Login = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='bg-slate-200 h-[500px] w-[400px] rounded-md p-4 pt-10'>
        <h1 className='text-center text-2xl'>Login</h1>
        <form className='flex justify-center flex-col'>
            <input className='w-full p-1 rounded-md border-0 mb-5 mt-5 h-10' type="text" placeholder='Username' />
            <input className='w-full p-1 rounded-md border-0 h-10 mb-10' type="password" placeholder='Password' />
            <button className='bg-green-500 p-1 rounded-md hover:bg-green-400'>Login</button>
        </form>
        {/* <p className='text-center'>Not a user? <em >Register</em></p> */}
        </div>

        <div className='bg-slate-200 h-[500px] w-[400px] rounded-md p-4 pt-10 ml-10'>
        <h1 className='text-center text-2xl'>Register</h1>
        <form className='flex justify-center flex-col'>
            <input className='w-full p-1 rounded-md border-0 mb-5 mt-5 h-10' type="text" placeholder='Username' />
            <input className='w-full p-1 rounded-md border-0 mb-5 mt-5 h-10' type="text" placeholder='Email' />
            <input className='w-full p-1 rounded-md border-0 h-10 mb-10' type="password" placeholder='Password' />
            <input className='w-full p-1 rounded-md border-0 h-10 mb-10' type="password" placeholder='Confirm Password' />
            <button className='bg-blue-500 p-1 rounded-md hover:bg-blue-400'>Register</button>
        </form>
        </div>
    </div>
  )
}
