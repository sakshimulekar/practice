// you can write your js code here
// you can write your js code here
let buydata = JSON.parse(localStorage.getItem("bookmark-list"))||[]



let tbody=document.getElementById("tbody")
buypage(buydata)
function buypage(data){
    tbody.innerHTML=""
    data.map((e)=>{
        let tr = document.createElement("tr")
        let name=document.createElement("td")
        name.innerText=e.name
        let author=document.createElement("td")
        author.innerText=e.author
        let desc=document.createElement("td")
        desc.innerText=e.desc
        let date=document.createElement("td")
        date.innerText=e.date
        let category=document.createElement("td")
        category.innerText=e.select
        let price=document.createElement("td")
        price.innerText=e.price

        tr.append(name,author,desc,date,category,price)
        tbody.append(tr)
    })
}