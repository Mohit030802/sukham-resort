import { useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { Link } from 'react-router-dom';




const Login = () => {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
      const handleSubmit=()=>{
        console.log(email+' '+password)
      }

  return (
  <>
  <div className='bg-gray-100'>

  
  <div class="container  flex  mx-auto items-center justify-center ">
        <div class="left w-1/3 mx-14">
            
            <p class="text-3xl mx-5 font-paraFont mb-3">Welcome to </p>
            <p class="text-6xl mx-5 font-paraFont "><span className='text-gold'>Sukham </span>Resort</p>
        </div>
        <div class="right flex flex-col bg-white p-8 rounded-lg w-1/4 relative mt-8 mb-8">
          <h1 className='flex text-3xl items-center justify-center font-bold mb-6'>Login </h1>
            <input class="px-4 h-12 my-2 border border-1  outline-blue-200 border-gray-200 rounded-lg" type="text" placeholder="Enter Your Email address here" onChange={e=>setEmail(e.target.value)}/>
            <input class="px-4 h-12 my-2 border border-1 outline-blue-200 border-gray-200 rounded-lg" type="password" placeholder="Enter Your password" onChange={e=>setPassword(e.target.value)} />
            <button class="bg-blue-600 hover:bg-blue-700 text-white py-3 my-2 rounded-md font-bold cursor-pointer " onClick={handleSubmit}>Log In</button>
            <span class="text-blue-600 text-center text-sm my-2 py-3 cursor-pointer hover:underline">Forgot password</span>
            <hr class="my-2" />
            
            <button class="bg-gray-600 hover:bg-green-700 text-white py-3 my-2 rounded-md font-bold cursor-pointer w-fit px-4 mx-auto"><Link to='/Sign'>Create New Account</Link></button>
        </div>
    </div>
    </div>
    </>
  

  
  
  
  )
}

export default Login