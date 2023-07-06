import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const isAuth=useSelector(store=>store.authreducer.isAuth)
    console.log(isAuth)
    const location=useLocation()
    console.log(location)
  return (
    <div>
      {isAuth?children:<Navigate state={location.pathname} to="/login"/>}
    </div>
  )
}

export default PrivateRoute
