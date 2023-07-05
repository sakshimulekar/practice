import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/authreducer/action'

const obj={
    email:"",
    password:""
}
const Login = () => {
    const [data,setdata]=useState(obj)
    const isAuth=useSelector(store=>store.authreducer.isAuth)
    const dispatch=useDispatch()
    const handleChange=(e)=>{
        const {name,value}=e.target
        setdata((prev)=>{
            return {...prev,[name]:value}
        })
    }
    const handleSub=(e)=>{
        e.preventDefault();
        console.log(data)
        dispatch(login(data))
    }
    console.log(isAuth)
  return (
    <div>
      <h1>Login form</h1>
      {isAuth?<h1 style={{"color":"green"}}>Login successfull!!</h1>:<h3>Login to continue</h3>}
      <form action="" onSubmit={(e)=>handleSub(e)}>
        <input type="email" name='email' value={data.email} onChange={handleChange} />
        <input type="password" name='password' value={data.password} onChange={handleChange} />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}


export default Login
