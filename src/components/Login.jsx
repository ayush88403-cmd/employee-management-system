import React, { useState } from 'react'



const Login = () => {
 
const [email , setEmail] = useState('')
const [pass , setPass] = useState('')


const submitHandler = (e) =>{
  e.preventDefault()

  console.log("email is", email)
  console.log("password is" ,pass)
  
  setEmail('')
  setPass('')
}
  return (
    <div className=' flex h-screen w-screen items-center justify-center bg-black'>
      <div className='border-2 rounded-xl border-emerald-600 py-20 px-10'>
        <form
        onSubmit={(e) =>{
           submitHandler(e)
        }} 
        //all the way up  
        className='  flex flex-col items-center justify-center'>
            <input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }} 
            
            required
            className='border-2 outline-none bg-transparent rounded-xl border-emerald-600 font-medium text-amber-50  px-2 py-4 placeholder:text-gray-400 text-lg' type="enter your email" placeholder='enter  email'/>
            <input 
             value={pass}
            onChange={(e)=>{
                setPass(e.target.value)
                
            }} 
            required
            className='border-2 outline-none bg-transparent rounded-xl border-emerald-600 font-medium mt-3 text-amber-50  px-2 py-4 placeholder:text-gray-400 text-lg' type="enter your email " placeholder='enter password'/>
            <button className='w-full border-none outline-none hover:bg-emerald-600 rounded-xl  text-gray-400  py-2 px-8 font=semibold mt-3 bg-amber-950'>login </button>
        </form>
      </div>
    </div>
  )
}

export default Login
