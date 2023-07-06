import { PRODUCT_DEL, PRODUCT_FAIL, PRODUCT_REQ, PRODUCT_SUCC } from "./actiontype"
import axios from "axios"

export const products=(paramObj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQ})
    axios.get("http://localhost:3000/products",paramObj)
    .then((res)=>{
        console.log(res.data)
        dispatch({type:PRODUCT_SUCC,payload:res.data})
    })
    .catch((err)=>{
        console.log(err)
        dispatch({type:PRODUCT_FAIL})
    })
}

export const deleteProducts=(id)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQ})
    return axios.delete(`http://localhost:3000/products/${id}`)
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res)
        return dispatch({type:PRODUCT_DEL})
    })
    .catch((err)=>{
        dispatch({type:PRODUCT_FAIL})
    })
}