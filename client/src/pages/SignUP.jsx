import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    //learn more about tailwind class 'max-w-lg' 'mx-auto'  and more..
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
  
        <input className=' shadow-sm border p-4 rounded-lg' type="text" placeholder='Username' id='username'/>
        <input className=' shadow-sm border p-4 rounded-lg'type="text" placeholder='email' id='email'/>
        <input className=' shadow-sm border p-4 rounded-lg' type="password" placeholder='password' id='password'/>
        <button  className='bg-slate-700  text-white rounded-lg uppercase p-3 hover:opacity-95 disabled:opacity-80'>Sign up</button>

      </form>
      <div className='flex gap-2  mt-5'> 
        <p>Hava an account?</p>
        <Link to={'/sign-in'} >
        <span className='text-blue-700'>
        Sign in
          </span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp