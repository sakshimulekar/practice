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

        <span data-testid="odd-or-even" ></span>
        <span data-testid="is-prime"></span>
        
      </div>
    </div>
  );

}

export default App;

