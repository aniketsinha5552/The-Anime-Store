import React from 'react'
import Header from '../components/Header'
import { useForm } from "react-hook-form";
import { login } from '../redux/apiCalls';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const Login = () => {
  const dispatch:any = useDispatch()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { register:register2, handleSubmit:handlesubmit2, watch:watch2, formState: { errors:errors2 } } = useForm();
  
  const {isFetching, error} = useSelector((state:any) => state.user)

  const onLoginSubmit = (data:any) => {
      login(dispatch,{
          username:data.username,
          password:data.password
      }) 
  }
  const onRegisterSubmit = (data:any) => {
    alert(JSON.stringify(data))
}
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='bg-slate-200 h-[500px] w-[400px] rounded-md p-4 pt-10'>
        <h1 className='text-center text-2xl'>Login</h1>
        <form className='flex justify-center flex-col' onSubmit={handleSubmit(onLoginSubmit)}>
            <input className='w-full p-1 rounded-md border-0 mb-5 mt-5 h-10' type="text" placeholder='Username' {...register("username",{required:true})} />
            <input className='w-full p-1 rounded-md border-0 h-10 mb-10' type="password" placeholder='Password' {...register("password",{required:true})}/>
            <button className='bg-green-500 p-1 rounded-md hover:bg-green-400 disabled:bg-slate-500' disabled={isFetching}>Login</button>
        </form>
        {/* <p className='text-center'>Not a user? <em >Register</em></p> */}
        </div>

        <div className='bg-slate-200 h-[500px] w-[400px] rounded-md p-4 pt-10 ml-10'>
        <h1 className='text-center text-2xl'>Register</h1>
        <form className='flex justify-center flex-col' onSubmit={handlesubmit2(onRegisterSubmit)}>
            <input className='w-full p-1 rounded-md border-0 mb-5 mt-5 h-10' type="text" placeholder='Username' {...register2("username",{required:true})} />
            <input className='w-full p-1 rounded-md border-0 mb-5 mt-5 h-10' type="text" placeholder='Email' {...register2("email",{required:true})} />
            <input className='w-full p-1 rounded-md border-0 h-10 mb-10' type="password" placeholder='Password' {...register2("password",{required:true})}/>
            <input className='w-full p-1 rounded-md border-0 h-10 mb-10' type="password" placeholder='Confirm Password' {...register2("confirmPass",{required:true})}/>
            <button className='bg-blue-500 p-1 rounded-md hover:bg-blue-400'>Register</button>
        </form>
        </div>
    </div>
  )
}
