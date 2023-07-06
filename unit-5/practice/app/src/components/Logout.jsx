import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { logout } from '../redux/authreducer/action'
const Logout = () => {
    const isAuth=useSelector(store=>store.authreducer.isAuth)
    const dispatch=useDispatch()
    const handleClick=()=>{
      dispatch(logout())
      alert("Logout successfull")
    }
    console.log(isAuth)
  return (
    <div>
        
        <button onClick={handleClick}>Logout</button>
    </div>
  )
}

export default Logout
