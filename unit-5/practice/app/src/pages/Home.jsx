import React from 'react'
import ProductList from '../components/ProductList'
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <div style={{display:"flex"}}>
      
      <Sidebar/>
      <ProductList/>
      
    </div>
  )
}

export default Home
