// // --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
// const baseServerURL = `http://localhost:${
//   import.meta.env.REACT_APP_JSON_SERVER_PORT
// }`;
// // --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// // ***** Constants / Variables ***** //
// const pitchURL = `${baseServerURL}/pitches`;
// let mainSection = document.getElementById("data-list-wrapper");

// // pitch
// let pitchTitleInput = document.getElementById("pitch-title");
// let pitchImageInput = document.getElementById("pitch-image");
// let pitchCategoryInput = document.getElementById("pitch-category");
// let pitchfounderInput = document.getElementById("pitch-founder");
// let pitchPriceInput = document.getElementById("pitch-price");
// let pitchCreateBtn = document.getElementById("add-pitch");

// // Update pitch
// let updatePitchIdInput = document.getElementById("update-pitch-id");
// let updatePitchTitleInput = document.getElementById("update-pitch-title");
// let updatePitchImageInput = document.getElementById("update-pitch-image");
// let updatePitchfounderInput = document.getElementById("update-pitch-founder");
// let updatePitchCategoryInput = document.getElementById("update-pitch-category");
// let updatePitchPriceInput = document.getElementById("update-pitch-price");
// let updatePitchBtn = document.getElementById("update-pitch");

// //Update price
// let updatePricePitchId = document.getElementById("update-price-pitch-id");
// let updatePricePitchPrice = document.getElementById("update-price-pitch-price");
// let updatePricePitchPriceButton = document.getElementById("update-price-pitch");

// //sort and filter
// let sortAtoZBtn = document.getElementById("sort-low-to-high");
// let sortZtoABtn = document.getElementById("sort-high-to-low");
// let filterFood = document.getElementById("filter-Food");
// let filterElectronics = document.getElementById("filter-Electronics");
// let filterPersonalCare = document.getElementById("filter-Personal-Care");

// //Search by title/founder

// let searchBySelect = document.getElementById("search-by-select");
// let searchByInput = document.getElementById("search-by-input");
// let searchByButton = document.getElementById("search-by-button");



// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ---------- 
const baseServerURL = `http://localhost:${ 
  import.meta.env.REACT_APP_JSON_SERVER_PORT 
}`; 
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ---------- 
 
// **** Constants / Variables **** // 
const pitchURL = `${baseServerURL}/pitches`; 
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
 
//Search by title/founder 
 
let searchBySelect = document.getElementById("search-by-select"); 
let searchByInput = document.getElementById("search-by-input"); 
let searchByButton = document.getElementById("search-by-button"); 
 
 
let pitchdata = []; 
 
fetchdata() 
 
function fetchdata(){ 
  fetch(`${pitchURL}`) 
  .then((res)=>{ 
    return res.json() 
  }) 
  .then((data)=>{ 
    console.log(data) 
    pitchdata = data 
    displaydata(data) 
  }) 
} 
 
function displaydata(data){ 
  mainSection.innerHTML = ""; 
  let card_list = document.createElement("div"); 
  card_list.setAttribute("class" , "card-list"); 
 
  data.forEach((el,index) => { 
    let card = document.createElement("div"); 
    card.setAttribute("class" , "card") 
    card.setAttribute("data-id" , `${el.id}`) 
 
    let card_img = document.createElement("div"); 
    card_img.setAttribute("class" , "card-img") 
 
    let img = document.createElement("img"); 
    img.setAttribute("src" , `${el.image}`) 
    img.setAttribute("alt" , "pitch"); 
 
    card_img.append(img); 
 
    let card_body = document.createElement("div"); 
    card_body.setAttribute("class" , "card-body"); 
 
    let title = document.createElement("h4"); 
    title.setAttribute("class" , "card-title") 
    title.innerText = el.title; 
 
    let founder = document.createElement("p") 
    founder.setAttribute("class" , "card-founder") 
    founder.innerText = el.founder; 
 
    let category = document.createElement("p") 
    category.setAttribute("class" , "card-category") 
    category.innerText = el.category; 
 
    let price = document.createElement("p") 
    price.setAttribute("class" , "card-price") 
    price.innerText = el.price; 
 
 
    let edit = document.createElement("a"); 
    edit.setAttribute("class" , "card-link"); 
    edit.setAttribute("data-id" , `${el.id}`); 
    edit.href="#"; 
    edit.innerText="Edit"; 
    edit.addEventListener("click" , async(e)=>{ 
      e.preventDefault(); 
      // console.log(el.price) 
      updatePitchIdInput.value = el.id 
      updatePitchTitleInput.value = el.title 
      updatePitchImageInput.value = el.image 
      updatePitchCategoryInput.value = el.category 
      updatePitchfounderInput.value = el.founder 
      updatePitchPriceInput.value = el.price 
    }) 
 
    let Delete = document.createElement("button"); 
    Delete.setAttribute("class","card-button"); 
    Delete.setAttribute("data-id" , `${el.id}`); 
    Delete.innerText="Delete"; 
    Delete.addEventListener("click" , async ()=>{ 
      await fetch(`${baseServerURL}/pitches/${el.id}` , { 
        method:"DELETE" 
      }) 
      fetchdata() 
    }) 
 
    card_body.append(title,founder,category,price,edit,Delete); 
 
    card.append(card_img ,card_body); 
 
    card_list.append(card); 
 
    mainSection.append(card_list) 
  }); 
} 
 
// Post Request 
 
pitchCreateBtn.addEventListener("click" , async(e)=>{ 
  e.preventDefault(); 
  if(pitchTitleInput.value !== "" && pitchImageInput.value !== "" && pitchCategoryInput.value !== "" && pitchfounderInput.value!=="" && pitchPriceInput.value !==""){ 
    let obj={ 
      "title" : pitchTitleInput.value, 
      "image" : pitchImageInput.value, 
      "category" : pitchCategoryInput.value, 
      "founder" : pitchfounderInput.value, 
      "price" : pitchPriceInput.value 
    } 
 
    await fetch(`${baseServerURL}/pitches` , { 
      method:"POST", 
      headers:{ 
        "content-type" : "application/json" 
      }, 
      body:JSON.stringify(obj) 
    }) 
 
    fetchdata(); 
    console.log(obj) 
  } 
 
}) 
 
// Update Request  
 
updatePitchBtn.addEventListener("click" , async(e)=>{ 
  e.preventDefault(); 
  if(updatePitchIdInput.value !== "" && updatePitchTitleInput.value !== "" && updatePitchImageInput.value !== "" && updatePitchfounderInput.value !== "" && updatePitchCategoryInput.value!=="" && updatePitchPriceInput.value !==""){ 
    let obj={ 
      "id" : updatePitchIdInput.value, 
      "title" : updatePitchTitleInput.value, 
      "image" : updatePitchImageInput.value, 
      "category" : updatePitchCategoryInput.value, 
      "founder" : updatePitchfounderInput.value, 
      "price" : updatePitchPriceInput.value 
    } 
 
    await fetch(`${baseServerURL}/pitches/${updatePitchIdInput.value}` , { 
      method:"PATCH", 
      headers:{ 
        "content-type" : "application/json" 
      }, 
      body:JSON.stringify(obj) 
    }) 
 
    fetchdata(); 
    console.log(obj) 
  } 
 
}) 
 
// Update price Request (patch); 
 
updatePricePitchPriceButton.addEventListener("click" , async(e)=>{ 
  e.preventDefault(); 
  if(updatePricePitchId.value !== "" && updatePricePitchPrice.value !== "" ){ 
    let obj={ 
      "id" : updatePricePitchId.value, 
      "price" : updatePricePitchPrice.value 
    } 
 
    await fetch(`${baseServerURL}/pitches/${updatePricePitchId.value}` , { 
      method:"PATCH", 
      headers:{ 
        "content-type" : "application/json" 
      }, 
      body:JSON.stringify(obj) 
    }) 
 
    fetchdata(); 
    console.log(obj) 
  } 
 
}) 
 
// Sorting from Low to high(Ascending Order) 
 
sortAtoZBtn.addEventListener("click" , ()=>{ 
  let sortedData = pitchdata.sort((a,b) =>{ 
    return a.price - b.price 
  }) 
  displaydata(sortedData) 
}) 
 
 
sortZtoABtn.addEventListener("click" , ()=>{ 
  let sortedData = pitchdata.sort((a,b) =>{ 
    return b.price - a.price 
  }) 
  displaydata(sortedData) 
}) 
 
// filtering 
 
filterFood.addEventListener("click" , ()=>{ 
  let filteredFood = pitchdata.filter((el,index)=>{ 
    return el.category == "Food" 
  }) 
  displaydata(filteredFood) 
}) 
 
filterElectronics.addEventListener("click" , ()=>{ 
  let filteredElectronic = pitchdata.filter((el,index)=>{ 
    return el.category == "Electronics" 
  }) 
  displaydata(filteredElectronic) 
}) 
 
filterPersonalCare.addEventListener("click" , ()=>{ 
  let FilteredPersonalCare = pitchdata.filter((el,index)=>{ 
    return el.category == "Personal-Care" 
  }) 
  displaydata(FilteredPersonalCare) 
}) 
 
 
// Searching functionality 
 
searchByButton.addEventListener("click" , ()=>{ 
  // console.log("search") 
  let SelectedData = searchByInput.value 
  // console.log(SelectedData) 
  let selectedData = pitchdata.filter((el,index)=>{ 
    return el.title.toLowerCase().includes(SelectedData.toLowerCase()) ||  el.founder.toLowerCase().includes(SelectedData.toLowerCase()) 
  }) 
  displaydata(selectedData) 
 })
