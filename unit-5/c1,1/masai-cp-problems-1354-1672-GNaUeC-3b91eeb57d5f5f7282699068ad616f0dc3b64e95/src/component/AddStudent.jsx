import React, { useReducer, useState } from "react";
import DataTable from "./DataTable";

export const initialState = {
  name: "",
  batch: "",
  course: "",
  image: "",
  rating: 0,
  status: "inactive",
};

export const reducer = (state,{type,payload}) => {
  switch(type){
    case "NAME":
      return {...state,name:payload}
    case "BATCH":
      return {...state,batch:payload}
    case "COURSE":
      return {...state,course:payload}
    case "IMAGE":
      return {...state,image:payload}
    case "RATING":
      return {...state,rating:payload}
    case "STATUS":
      return {...state,status:payload?"active":"inactive"}
    case "RESET":
      return initialState
    default:
      return
  }
};

export const AddStudent = () => {
  const [state,dispatch]=useReducer(reducer,initialState)
  const [data,setdata]=useState([])
  const handlesb=(e)=>{
    e.preventDefault();
    setdata([...data,state])
    console.log(data)
    dispatch({type:"RESET"})
    
  }
  
  return (
    <div>
      <h1>Add Student</h1>
      <div>
        <form data-testid="input-form" onSubmit={(e)=>handlesb(e)}>
          <div className="name-wrapper" data-testid="name-wrapper">
            <label>Name :</label>
            <input
            type="text"
            name="name"
            value={state.name}
            onChange={(e)=>dispatch({type:"NAME",payload:e.target.value})}/>
            
          </div>

          <div className="batch-wrapper" data-testid="batch-wrapper">
            <label>Batch :</label>
            <input
            type="text"
            name="batch"
            value={state.batch}
            onChange={(e)=>dispatch({type:"BATCH",payload:e.target.value})}/>
          </div>

          <div className="course-wrapper" data-testid="course-wrapper">
            <label>Course :</label>
            <input
            type="text"
            name="course"
            value={state.course}
            onChange={(e)=>dispatch({type:"COURSE",payload:e.target.value})}/>
          </div>

          <div className="image-wrapper" data-testid="image-wrapper">
            <label>Image :</label>
            <input
            type="text"
            name="image"
            value={state.image}
            onChange={(e)=>dispatch({type:"IMAGE",payload:e.target.value})}/>
          </div>

          <div className="rating-wrapper" data-testid="rating-wrapper">
            <label>Rating :</label>
            <select name="rating" id="" 
            value={state.rating} 
            onChange={(e)=>dispatch({type:"RATING",payload:e.target.value})}>
              <option value="0">select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div
            className="current-status-wrapper"
            data-testid="current-status-wrapper"
          >
            <label>Current Status :</label>
            <div>
            <input
            type="checkbox"
            name="status"
            onChange={(e)=>dispatch({type:"STATUS",payload:e.target.checked})}/>
              <label>Active</label>
            </div>
          </div>

          <button type="submit">submit</button>
          {/* Provide Button to submit Here */}
        </form>
      </div>
      <DataTable data={data}/>
      
    </div>
  );
};
