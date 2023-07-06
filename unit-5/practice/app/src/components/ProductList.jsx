import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { products } from '../redux/productReducer/action'
import ProductCard from './ProductCard'
import { useSearchParams } from 'react-router-dom'
//import { useLocation, useSearchParams } from 'react-router-dom'

const ProductList = () => {
  const prod=useSelector(store=>store.productReducer.product)
  console.log(prod)
  const dispatch=useDispatch()
  const [searchParams]=useSearchParams()
  
  let obj={
    params:{
      category:searchParams.getAll("category"),
      brand:searchParams.getAll("brand"),
      _sort:searchParams.get("order") && "price",
      _order:searchParams.get("order"),
      _limit:3,
      _page:searchParams.get("page")
    }
  }

  useEffect(()=>{
    dispatch(products(obj))
  },[searchParams])

  return (
    <div>
      <h1>products</h1>
      {prod?.length && prod?.map((e)=><ProductCard key={e.id} {...e}/>)}
    </div>
  )
}

export default ProductList





    
    