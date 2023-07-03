import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../Context/Context'

const Stories = () => {
    const {dispatch,hits,isLoading}=useContext(AuthContext)

    const fetchData=async()=>{
        try {
            let res=await fetch('http://hn.algolia.com/api/v1/search?query=html')
            let data= await res.json() 
            //let ans1 = data.hits
            console.log(data)
            dispatch({type:"DATA",payload:data})
            
        } catch (error) {
            console.log(error.message)
        }
      }
    
      useEffect(()=>{
          fetchData()
      },[])
      //console.log()
  return (
    <div>
    {isLoading && <h1>Loading...</h1>}
      {hits?.map((e,i)=>{
        return (
            <div key={i}>
                <h3>{e.title}</h3>
                <p>{e.author}</p>
            </div>
        )
      })}
    </div>
  )
}

export default Stories
