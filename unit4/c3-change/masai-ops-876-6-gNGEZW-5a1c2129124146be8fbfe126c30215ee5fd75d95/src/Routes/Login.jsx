import {  useState } from "react";
import { Link } from "react-router-dom";
//import { AuthContext } from "../Context/AuthContext";

function Login() {
  const [email,setemail]=useState("eve.holt@reqres.in")
  const [pass,setpass]=useState("cityslicka")
  //const {loginUser}=useContext(AuthContext)
//
  const handelSubmit=async(e)=>{
    e.preventDefault();
    let obj={
      email,
      pass
    }
    console.log(obj)
    try {
      let res = await fetch("https://reqres.in/api/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(obj)
      })
      if(res.ok){
        let data= await res.json()
        console.log(data)
        console.log(data.token)
      }
      else{
        console.log(error.message)
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  

  return (
    <div>
      <form data-testid="login-form" onSubmit={(e)=>handelSubmit(e)}>
        <div>
          <label>
            Email
            <input data-testid="email-input" 
            type="email" 
            placeholder="email" 
            value={email} 
            onChange={(e)=>setemail(e.target.value)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              value={pass}
              onChange={(e)=>setpass(e.target.value)}
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
