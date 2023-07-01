// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const pitchURL = `${baseServerURL}/pitches`;
let sortdata=[]
let mainSection = document.getElementById("data-list-wrapper");

// pitch
let pitchTitleInput = document.getElementById("pitch-title");
let pitchImageInput = document.getElementById("pitch-image");
let pitchCategoryInput = document.getElementById("pitch-category");
let pitchfounderInput = document.getElementById("pitch-founder");
let pitchPriceInput = document.getElementById("pitch-price");
let pitchCreateBtn = document.getElementById("add-pitch");

// Update pitch
let updatePitchIdInput = document.getElementById("update-pitch-id");
let updatePitchTitleInput = document.getElementById("update-pitch-title");
let updatePitchImageInput = document.getElementById("update-pitch-image");
let updatePitchfounderInput = document.getElementById("update-pitch-founder");
let updatePitchCategoryInput = document.getElementById("update-pitch-category");
let updatePitchPriceInput = document.getElementById("update-pitch-price");
let updatePitchBtn = document.getElementById("update-pitch");
updatePitchBtn.addEventListener("click",async(e)=>{
  e.preventDefault()
  if(updatePitchIdInput.value!=="" && updatePitchTitleInput.value!=="" && updatePitchImageInput.value!=="" && updatePitchfounderInput.value!=="" && updatePitchCategoryInput.value!=="" && updatePitchPriceInput.value!==""){
    let obj={
      id:updatePitchIdInput.value,
      title:updatePitchTitleInput.value,
      image:updatePitchImageInput.value,
      founder:updatePitchfounderInput.value,
      category:updatePitchCategoryInput.value,
      price:updatePitchPriceInput.value
    }
    await fetch(`${baseServerURL}/pitches/${updatePitchIdInput.value}`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(obj)
    })
    fetchData()
  }
})

//Update price
let updatePricePitchId = document.getElementById("update-price-pitch-id");
let updatePricePitchPrice = document.getElementById("update-price-pitch-price");
let updatePricePitchPriceButton = document.getElementById("update-price-pitch");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterFood = document.getElementById("filter-Food");
let filterElectronics = document.getElementById("filter-Electronics");
let filterPersonalCare = document.getElementById("filter-Personal-Care");
let dat=[]

//Search by title/founder

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

sortAtoZBtn.addEventListener("click",()=>{
  let Sdata=sortdata
  console.log(Sdata)
  Sdata.sort((a,b)=>a.price-b.price)
  mainData(Sdata)
})

sortZtoABtn.addEventListener("click",()=>{
  let Ddata=sortdata
  console.log(Ddata)
  Ddata.sort((a,b)=>b.price-a.price)
  mainData(Ddata)
})

filterFood.addEventListener("click",()=>{
  let fData=sortdata
  console.log(fData)
  let fit=fData.filter((e)=>{
    return e.category=="Food"
  })
  console.log(fit)
  mainData(fit)
})

filterElectronics.addEventListener("click",()=>{
  let fData=sortdata
  console.log(fData)
  let fit=fData.filter((e)=>{
    return e.category=="Electronics"
  })
  console.log(fit)
  mainData(fit)
  
})

filterPersonalCare.addEventListener("click",()=>{
  let fData=sortdata
  console.log(fData)
  let fit=fData.filter((e)=>{
    return e.category=="Personal Care"
  })
  console.log(fit)
  mainData(fit)

})

searchByButton.addEventListener("click",search)

async function search(){
  let title=searchBySelect.value
  let founder=searchByInput.value
  console.log(title)
  if(title=="title"){
    try {
      let req=await fetch(`${baseServerURL}/pitches?${title}_like=${founder}`)
      let sdata=await req.json()
      dat=sdata
      mainData(dat)
    } catch (error) {
      console.log(error.message)
    }
  }
  else if(title=="founder"){
    try {
      let req=await fetch(`${baseServerURL}/pitches?${title}_like=${founder}`)
      let sdata=await req.json()
      console.log(sdata)
      dat=sdata
      mainData(dat)
    } catch (error) {
      console.log(error.message)
    }
  }
}


window.addEventListener("load",()=>fetchData())

function fetchData(){
  fetch(`${pitchURL}`)
  .then(res=>res.json())
  .then(res=>{
    console.log(res)
    sortdata=res
    dat=res
    mainData(res)
  })
  .catch(err=>console.log(err))
}


function cardData(dataid,image,title,founder,category,price){
  let card= `
    <div class="card" data-id=${dataid}>
      <div class="card-img">
        <img src=${image} alt="pitch">
      </div>
      <div class="card-body">
        <h4 class="card-title">${title}</h4>
        <p class="card-founder">${founder}</p>
        <p class="card-category">${category}</p>
        <p class="card-price">${price}</p>
        <a href="#" data-id=${dataid} class="card-link">Edit</a>
        <button data-id=${dataid} class="card-button">Delete</button>
      </div>
    </div>
  ` 
  
  return card;
}


function mainData(res){
  mainSection.innerHTML=null
  let list=`
  <div class="card-list">
    ${res?.map((e)=>{
      return (
        cardData(e.id,e.image,e.title,e.founder,e.category,e.price)
      )
    }).join(" ")}
  </div>
  `
  
  mainSection.innerHTML=list

  let delbtns=document.getElementsByClassName("card-button")
  for(let i=0; i<delbtns.length; i++){
    let btn=delbtns[i]

    btn.addEventListener("click",async(e)=>{
      e.preventDefault()
      let id=e.target.dataset.id
      
      console.log(id)
      await fetch(`${pitchURL}/${id}`,{
        method:"DELETE"
      })
      fetchData()
     })
    
  }
}

let Dform=document.getElementById("formdata")
Dform.addEventListener("submit",(e)=>{
  e.preventDefault()
  let TitleInput = document.getElementById("pitch-title").value;
  let ImageInput = document.getElementById("pitch-image").value;
  let CategoryInput = document.getElementById("pitch-category").value;
  let founderInput = document.getElementById("pitch-founder").value;
  let PriceInput = document.getElementById("pitch-price").value;
  let obj={title:TitleInput,image:ImageInput,category:CategoryInput,founder:founderInput,price:PriceInput}
  console.log(obj)
  fetch(`${pitchURL}`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(obj)
  })
  .then((res)=>res.json())
  .then(res=>console.log(res))
  .catch(err=>console.log(err))
  fetchData()
})

updatePricePitchPriceButton.addEventListener("click",async(e)=>{
  e.preventDefault()
  if(updatePricePitchId.value!=="" && updatePricePitchPrice.value!== ""){
    let obj={
      id:updatePricePitchId.value,
      price:updatePricePitchPrice.value
    }
    console.log(obj)
    await fetch(`${pitchURL}/${updatePricePitchId.value}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(obj)
    })
    fetchData()
  }
})