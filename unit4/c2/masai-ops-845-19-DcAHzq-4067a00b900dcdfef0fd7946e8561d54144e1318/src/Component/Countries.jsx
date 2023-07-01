import { useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import { useEffect } from "react";
import CountriesCard from "./CountriesCard";
import Pagination from "./Pagination";

const getFetch=({page=1})=>{
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=10`)
  .then((res)=>res.json())
}
///getFetch()
function Countries() { 
  const [data,setdata]=useState([])
  const [isLoad,setisLoad]=useState(false)
  const [page,setpage]=useState(1)

  const handlePage=()=>{
    setpage((p)=>p+1)
  }

  
  useEffect(()=>{
    setisLoad(true)
    getFetch(page)
    .then((res)=>{
      setisLoad(false)
      //console.log(res)
      
      let ans = res
      setdata(ans)
     // console.log(ans)
    })
    .catch((err)=>{
      setisLoad(false)
      console.log(err.message)
    })
    
  },[page])
  
  if(isLoad){
    return <LoadingIndicator />;
  }
  

  return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        {data?.data?.map((e)=>{
          return (
            <CountriesCard key={e.id} {...e}/>
          )
        })}
      </div>
      <div>
        <Pagination page={page} setpage={handlePage} total={data.totalPages}/>
      </div>
    </div>
  );
}

export default Countries;
