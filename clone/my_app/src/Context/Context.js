import React, { createContext, useReducer } from 'react'

const reducer=(state,{type,payload})=>{
    switch(type){
      case "DATA":
        return {...state,hits:payload.hits,isLoading:false,nbPages:payload.nbPages}
      default:
        return state
    }
}

let initialState={
    hits:[],
    isLoading:true,
    nbPages:0 
}
export const AuthContext=createContext()

const AuthContextProvider = ({children}) => {
  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <AuthContext.Provider value={{dispatch,...state}}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider
