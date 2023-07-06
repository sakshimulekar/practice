import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST } from "./actiontype"
import axios from "axios";

export const login=(obj)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    return axios.post("https://reqres.in/api/login",obj)
    .then((res)=>{
        console.log(res)
        return dispatch({type:LOGIN_SUCCESS,payload:res.data.token})
    })
    .catch((err)=>{
        console.log(err.message)
        return dispatch({type:LOGIN_FAILURE})
    })
}

export const logout=()=>(dispatch)=>{
    dispatch({type:LOGOUT_REQUEST})
}