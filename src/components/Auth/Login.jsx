import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email,setemail] = useState('')
    const [pass,setPass] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault();
        handleLogin(email, pass)
        setemail("")
        setPass("")
    }
  return (
    <div className='min-h-screen flex items-center justify-center bg-black text-white'>
        <div className='border border-emerald-400 rounded-lg p-8 bg-[#1c1c1c] shadow-lg w-80'>
            <h2 className='text-2xl font-bold mb-6 text-center text-emerald-600'>Login</h2>
            <form
            onSubmit={(e)=>{submitHandler(e)}}
            className='flex flex-col '>
                <div className='mb-4'>
                    <label className='text-sm block mb-1 font-medium'>Email:</label>
                    <input
                    value={email}
                    onChange={(e)=>{
                        setemail(e.target.value)
                    }}
                    required
                    placeholder='Enter your email' 
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-400' 
                    type="email" />
                </div>
                <div className='mb-2'>
                    <label className='text-sm block mb-1 font-medium'>Password:</label>
                    <input
                    value={pass}
                    onChange={(e)=>{
                        setPass(e.target.value)
                    }}
                    required
                    placeholder='Enter your password' 
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-400' 
                    type="password" />
                </div>

                <div className='flex items-center mb-6'>
                    <input className='mr-1' type="checkbox" id='rememberMe'/>
                    <label htmlFor="remeberMe" className='text-sm'>Remember me</label>
                </div>

                <button
                className='bg-emerald-500 rounded-full hover:bg-emerald-600 py-1 cursor-pointer'>log in</button>
            </form>
                
        </div>
      
    </div>
  )
}

export default Login
