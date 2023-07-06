import React from 'react'
import {useDispatch} from "react-redux"
import { deleteProducts, products } from '../redux/productReducer/action'
const ProductCard = ({id,brand,category,thumbnail,price,title,rating}) => {
  const dispatch=useDispatch()
  const handleDelete=()=>{
    console.log(id)
    dispatch(deleteProducts(id))
    dispatch(products())
  }
  const handleEdit=()=>{
    console.log(id)
  }
  return (
    <div style={{display:"grid",border:"0.5px solid black"}}>
      <div className="img">
        <img src={thumbnail} alt="img" />
      </div>
      <div>
            <h3>{title}</h3>
            <p>{brand}</p>
            <p>{category}</p>
            <p>{price}</p>
            <p>{rating}</p>
            <button onClick={handleEdit}>edit</button>
            <button onClick={handleDelete}>delete</button>
      </div>
    </div>
  )
}

export default ProductCard
