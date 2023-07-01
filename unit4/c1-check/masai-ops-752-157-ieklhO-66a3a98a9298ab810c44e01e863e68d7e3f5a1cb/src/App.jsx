import { useState } from "react";

function App() {
  const [count,setcount]=useState(0)

  const inc=()=>{
    setcount((c)=>c+1)
  }
  const dec=()=>{
    setcount((c)=>c-1)
  }
  const rest=()=>{
    setcount((c)=>0)
  }
  const prime=(n)=>{
    let ct=0;
    for(let i=0; i<=n; i++){
      if(n%i==0){
        ct++
      }
    }
    if(ct==2){
      return true
    }
    else{
      return false 
    }
  }
  return (
    <div>
      <div>
        <button data-testid="minusonebtn" onClick={inc}>ADD</button>
        <button data-testid="plusonebtn" onClick={dec} disabled={count<=0}>SUBTRACT</button>
      <div>
        <button data-testid="resetbtn" onClick={rest} >RESET</button>
      </div>
      </div>
      <span data-testid="counter" >{count}</span>
      <div>

        <span data-testid="odd-or-even" >{count%2==0?"Even":"Odd"}</span>
        <span data-testid="is-prime">{prime(count)?"True":"False"}</span>
        
      </div>
    </div>
  );

}

export default App;

