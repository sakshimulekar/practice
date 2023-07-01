import { useState } from "react";

function App() {
  const [count,setcount]=useState(0)

  const handleAdd=()=>{
    setcount((p)=>p+1)
    console.log(count)
  }

  const handleSub=()=>{
    setcount((p)=>p-1)
    console.log(count)
  }
  

  return (
    <div>
      <div>
        <button data-testid="minusonebtn" onClick={()=>handleAdd()}></button>
        <button data-testid="plusonebtn" onClick={()=>handleSub()}></button>
      <div>
        <button data-testid="resetbtn"></button>
      </div>
      </div>
      <span data-testid="counter">{count}</span>
      <div>
        <span data-testid="odd-or-even"></span>
        <span data-testid="is-prime"></span>
      </div>
    </div>
  );

}

export default App;

