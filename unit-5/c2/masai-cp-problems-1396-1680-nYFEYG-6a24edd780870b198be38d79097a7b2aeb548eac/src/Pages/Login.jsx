import React, { useState } from "react";
import {useSelector,useDispatch} from "react-redux"
import styled from "styled-components";
import { login } from "../Redux/Authentication/action";

const obj = {
  email:"",
  password:""
}

export const Login = () => {
  const [data,setData] = useState(obj)
  const isAuth = useSelector((store)=>store)
  const dispatch = useDispatch();

  const handleChange = (e) =>{
    const {name,value} = e.target;
    console.log(name)
    setData((prev)=>{
    return {...prev,[name]:value}})
  }

  const handleAdd = () =>{
    dispatch(login(data))
      console.log(isAuth)
  }
  return (
    <DIV>
      <h2>Log In</h2>
      <input data-testid="user-email" type="email" placeholder="Email" value={data.email} name='email' onChange={handleChange}/>
      <input data-testid="user-password" type="password" placeholder="Password" value={data.password} name='password' onChange={handleChange} /> 
      <button data-testid="user-login" onClick={handleAdd }>Log In</button>
    </DIV>
  );
};

{/* <input type="email" value={data.email} name='email' onChange={handleChange}/> 
      <input type="password" value={data.password} name='password' onChange={handleChange} />
      <button onClick={handleAdd }>Log In</button> */}

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;
  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }
  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
