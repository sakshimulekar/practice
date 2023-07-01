// you can write your js code here
let storeData = JSON.parse(localStorage.getItem("book-list"))||[]
let buyData = JSON.parse(localStorage.getItem("buy-list"))||[]
let bookmarkData = JSON.parse(localStorage.getItem("bookmark-list"))||[]
console.log(storeData)
tableform(storeData)

let filter = document.getElementById("filter")
filter.addEventListener("change",()=>{
    let storeData = JSON.parse(localStorage.getItem("book-list"))||[]
    let filtered=storeData.filter(el=>el.select===filter.value)
    tableform(filtered)
})


function tableform(data){
    let tbody = document.getElementById("tbody")
    tbody.innerHTML = ""
    data.map((e,i)=>{
        let tr = document.createElement("tr")

        let name = document.createElement("td")
        name.innerText=e.name
        let author = document.createElement("td")
        author.innerText = e.author
        let desc = document.createElement("td")
        desc.innerText = e.desc
        let date = document.createElement("td")
        date.innerText=e.date
        let category = document.createElement("td")
        category.innerText=e.select
        
        let buy = document.createElement("button")
        buy.innerText="Buy"
        let bookmark = document.createElement("button")
        bookmark.innerText="Bookmark"

        buy.addEventListener("click",()=>{
            buyData.push(e)
            localStorage.setItem("buy-list",JSON.stringify(buyData))
            storeData.splice(i,1)
            localStorage.setItem("book-list",JSON.stringify(storeData))
        })

        bookmark.addEventListener("click",()=>{
            bookmarkData.push(e)
            localStorage.setItem("bookmark-list",JSON.stringify(bookmarkData))
            storeData.splice(i,1)
            localStorage.setItem("book-list",JSON.stringify(storeData))
        })
        let price = document.createElement("td")
        price.innerText=e.price
        tr.append(name,author,desc,date,category,buy,bookmark,price)
        tbody.append(tr)

    })
}
//tableform()