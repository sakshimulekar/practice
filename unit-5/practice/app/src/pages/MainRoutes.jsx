import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import ProductList from '../components/ProductList'
import Logout from '../components/Logout'
import Edit from '../components/Edit'
import PrivateRoute from '../components/PrivateRoute'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<ProductList/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/edit' element={<PrivateRoute>
          <Edit/>
        </PrivateRoute>}/>
      </Routes>
    </div>
  )
}

export default MainRoutes
