// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${ import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT ? import.meta.env.REACT_APP_JSON_SERVER_PORT : 9090 }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //

let mainSection = document.getElementById("data-list-wrapper");

let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");

let fetchRecipesBtn = document.getElementById('fetch-recipes');
let fetchEmployeesBtn = document.getElementById('fetch-employees');

let filterLessThan50Btn = document.getElementById("filter-less-than-50");
let filterMoreThanEqual50Btn = document.getElementById("filter-more-than-equal-50");

let catsData = [];

//fetch(`baseServerURL/cats`).then(res=>res.json()).then(data=>console.log(res.data)).catch(err=>console.log(err))
window.addEventListener("load",()=>{
    fetch(`${baseServerURL}/cats?_limit=3`)
    .then(res=>res.json())
    .then((res)=>{
        catsData=res
        //console.log(catsData)
        renderData(catsData)
    })
    .catch(err=>console.log(err))
    
})

let cardData=(id,name,description,cost,image)=>{
    let card=`
    <div class="card" data-id='${id}'>
        <div class='card-image'>
            <img src='${baseServerURL}${image}' alt='image'>
        </div>
        <div class='card-body'>
            <h3 class='card-item card title'>${name}</h3>
            <div class='card-item card-description'>${description}</div>
            <div class='card-item card-additional-info'>${cost}</div>
        </div>
    </div>
    `
    return card
}

let getData=(id,name,price,image)=>{
    let card=`
    <div class="card" data-id='${id}'>
        <div class='card-image'>
            <img src='${baseServerURL}${image}' alt='image'>
        </div>
        <div class='card-body'>
            <h3 class='card-item card title'>${name}</h3>
            <div class='card-item card-description'>Rs. ${price}</div>
        </div>
    </div>
    `
    return card
}

function renderData(cdata){
    let list = `
    <div class="card-list">
        ${cdata.map(e=>cardData(e.id,e.name,e.description.substr(0,75),e.cost,e.image)).join("")}
    </div>
    `
    mainSection.innerHTML=list
}

sortAtoZBtn.addEventListener("click",()=>{
    let data=catsData
    data.sort((a,b)=>a.cost-b.cost)
    renderData(data)
})

sortZtoABtn.addEventListener("click",()=>{
    let data=catsData
    data.sort((a,b)=>b.cost-a.cost)
    renderData(data)
})

filterLessThan50Btn.addEventListener('click',()=>{
    let data=catsData.filter((e)=>{
        if(e.cost < 50){
            return true
        }
    })
    console.log(data)
    renderData(data)
})

filterMoreThanEqual50Btn.addEventListener("click",()=>{
    let data=catsData.filter((e)=>{
        if(e.cost >= 50){
            return true
        }
    })
    console.log(data)
    renderData(data)
})


let totallength
let totalpage
let no_p=1

fetchRecipesBtn.addEventListener("click",()=>{
    fetchAndRenderIngredients(no_p)
})

function fetchAndRenderIngredients(no_p){
    fetch(`${baseServerURL}/recipes?_limit=10&_page=${no_p}`)
        .then((res)=>{
            totallength=+res.headers.get("X-Total-Count")
            totalpage=Math.ceil(totallength/10)
            //console.log(totallength,totalpage)
            setPage(totalpage)
            return res.json()
        })
        .then((data)=>{
            //console.log(data)
            fetchRecipe(data)
        })
        .catch(err=>console.log(err)) 
}

let paginationButtons = [];
function getLoop(p) {
    for (let i = 0; i < p; i++) {
      paginationButtons.push(btn(i))
    }
    //console.log(paginationButtons)
    return paginationButtons.join(" ");
}

function setPage(p){
    
    let card=`
    <div class="btn-list"> 
        ${getLoop(p)}
    </div>
    `
    return card
    
}

function fetchRecipe(rdata){
    mainSection.innerHTML = "";
    let list = `
    <div class="card-list">
        ${rdata.map(e=>getData(e.id,e.name,e.price,e.image)).join("")}
        <div class="pagination-wrap">${setPage()}</div>
    </div>
    `
    //console.log(mainSection.innerHTML=list)
    mainSection.innerHTML=list
        let ind = document.querySelectorAll(".btn-card");
        for (let i of ind) {
            console.log(i)
        i.addEventListener("click", handlePaginationClick);
        
    }

    function handlePaginationClick(e) {
        mainSection.innerHTML=""
        let dataid = e.target.dataset.page;
        console.log(dataid)
        if (dataid !== no_p) {
            no_p = dataid;
            fetchAndRenderIngredients(dataid);
        }
    }
}

function btn(i){
    
    let btns =`<button class="btn-card" data-page="${i + 1}">${i + 1}</button>`
    return btns
}


fetchEmployeesBtn.addEventListener("click",()=>{
    fetch(`${baseServerURL}/employees?_limit=5&_page=1`)
    .then((res)=>{
        totallength=res.headers.get("X-Total-Count" )
        console.log(totallength)
        return res.json()
    })
    .then((data)=>{
        console.log(data.length)
        
        fetchEmployee(data)
    })
    .catch(err=>console.log(err))
})

function fetchEmployee(edata){
    let list = `
    <div class="card-list">
        ${edata.map(e=>getEmp(e.id,e.name,e.salary,e.image)).join("")}
    </div>
    `
    
   
    
    mainSection.innerHTML=list
}

let getEmp=(id,name,salary,image)=>{
    let card=`
    <div class="card" data-id='${id}'>
        <div class='card-image'>
            <img src='${baseServerURL}${image}' alt='image'>
        </div>
        <div class='card-body'>
            <h3 class='card-item card title'>${name}</h3>
            <div class='card-item card-description'>Rs. ${salary}</div>
            <a href="#" onclick="greetEmploy(name)">Greet</a>
        </div>
    </div>
    `
    return card
}

