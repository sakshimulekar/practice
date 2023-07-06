import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import {useSearchParams} from "react-router-dom"

const Sidebar = () => {
  const prod=useSelector(store=>store.productReducer.product)
  const [searchParams,setSearchParams]=useSearchParams();
  let initialcate=searchParams.getAll("category")
  let initialbrand=searchParams.getAll("brand")
  let initialprice=searchParams.get("order")
  const [category,setcategory]=useState(initialcate||[])
  const [brand,setbrand]=useState(initialbrand|| [])
  const [order,setprice]=useState(initialprice || "")
  const [page,setpage]=useState(1)
  // let current=1;
  // let totalpage=Math.ceil(page/prod.length)
  console.log(totalpage,prod.length)
  const handleCate=(e)=>{
    const {value}=e.target
    let newCat=[...category]
    if(newCat.includes(value)){
      newCat=newCat.filter((el)=>el!==value)
    }
    else{
      newCat.push(value)
    }
    setcategory(newCat)
    console.log(category)
  }

  const handleBrand=(e)=>{
    const {value}=e.target
    let newBrand=[...brand]
    if(newBrand.includes(value)){
      newBrand=newBrand.filter((el)=>el !== value)
    }
    else{
      newBrand.push(value)
    }
    setbrand(newBrand)
    console.log(brand)
  }

  const handleSort=(e)=>{
    const {value}=e.target
    setprice(value)
    console.log(order)
  }
  useEffect(()=>{
    let params={
      category,
      brand,
      page
    }
    order && (params.order=order)
    setSearchParams(params)
  },[category,brand,order,page])
  return (
    <div>
      <h1>sidebar</h1>
      <h3>filter by category</h3>
      <div>
        <input type="checkbox" value="smartphones" onChange={handleCate}  checked={category.includes("smartphones")}/>
        <label>smartphones</label>
      </div>
      
      <div>
        <input type="checkbox" value="laptops" onChange={handleCate} checked={category.includes("laptops")} />
        <label>laptops</label>
      </div>

      <div>
        <input type="checkbox" value="fragrances" onChange={handleCate} checked={category.includes("fragrances")} />
        <label>fragrances</label>
      </div>

      <div>
        <input type="checkbox" value="skincare" onChange={handleCate} checked={category.includes("skincare")} />
        <label>skincare</label>
      </div>

      <div>
        <input type="checkbox" value="home-decoration" onChange={handleCate} checked={category.includes("home-decoration")} />
        <label>home-decoration</label>
      </div>

      <h3>filter by brand</h3>
      <div>
        <input type="checkbox" value="Apple" checked={brand.includes("Apple")} onChange={handleBrand}/>
        <label>Apple</label>
      </div>

      <div>
        <input type="checkbox" value="Huawei" checked={brand.includes("Huawei")} onChange={handleBrand}/>
        <label>Huawei</label>
      </div>

      <div>
        <input type="checkbox" value="HP Pavilion" checked={brand.includes("HP Pavilion")} onChange={handleBrand}/>
        <label>HP Pavilion</label>
      </div>

      <div>
        <input type="checkbox" value="Samsung" checked={brand.includes("Samsung")} onChange={handleBrand}/>
        <label>Samsung</label>
      </div>

      <div>
        <input type="checkbox" value="OPPO" checked={brand.includes("OPPO")} onChange={handleBrand}/>
        <label>OPPO</label>
      </div>

      <h3>sort by order</h3>
      <div onChange={handleSort}>
        <input type="radio" name='order' value="asc" defaultChecked={order=="asc"}/>
        <label htmlFor="">ascending</label>
        <input type="radio" name='order' value="desc" defaultChecked={order=="desc"}/>
        <label htmlFor="">descending</label>
      </div>

      <div className="page">
        <button onClick={()=>setpage(p=>p-1)} disabled={page==1}>PRE</button>
        <p>{page}</p>
        <button onClick={()=>setpage(p=>p+1)}>NEXT</button>
      </div>
    </div>
  )
}

export default Sidebar

