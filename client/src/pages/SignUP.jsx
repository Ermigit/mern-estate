import { useState } from 'react'
import React from 'react'
import { Link, useNavigate} from 'react-router-dom'

 function SignUp() {
 
  const [formData, setFormData] = useState({});
  const [error, setError]= useState(null);
  const [loading, setLoading]= useState(false);
 const navigate = useNavigate();
   const inputChangeHandler = (e)=>{
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
   }
   console.log(formData);
  const formSubmitionHandler=async (e)=>{
    e.preventDefault();
      //  API endpoint to handle form submissions
      setLoading(true);
      try {
        
        const res = await fetch('/api/auth/signup', 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if(data.success === false)
        {
          setError(data.message)
          setLoading(false);
          return;
          
        }
        setLoading(false);
        setError(data.message)
        setError(null);
        navigate('/sign-in');

      } catch (error) {
        setLoading(false);
        setError(error.message);
      }

  };
  console.log(formData);
  return (
    //learn more about tailwind class 'max-w-lg' 'mx-auto'  and more..
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4' onSubmit={formSubmitionHandler}>
  
        <input className=' shadow-sm border p-4 rounded-lg' type="text" placeholder='Username' id='username' onChange={inputChangeHandler}/>
        <input className=' shadow-sm border p-4 rounded-lg'type="text" placeholder='email' id='email'onChange={inputChangeHandler}/>
        <input className=' shadow-sm border p-4 rounded-lg' type="password" placeholder='password' id='password' onChange={inputChangeHandler}/>
        <button disabled={loading}
         className='bg-slate-700  text-white rounded-lg uppercase p-3 hover:opacity-95 disabled:opacity-80' >
          {loading ?'Loading...':'Sign up'}</button>

      </form>

      <div className='flex gap-2  mt-5'> 
        <p>Hava an account?</p>
        <Link to={'/sign-in'} >
        <span className='text-blue-700'>
        Sign in
          </span>
        </Link> <br/>
        {error && <p className='text-red-500'>{error}</p> }

      </div>
    </div>
  )
}

export default SignUp
