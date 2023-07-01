// you can write your js code here
let form = document.getElementById("form")

form.addEventListener("submit",function(e){
    e.preventDefault()
    let name = document.getElementById("name").value
    let author = document.getElementById("author").value
    let desc = document.getElementById("desc").value
    let date = document.getElementById("added").value
    let select = document.getElementById("category").value
    let price = document.getElementById("price").value
    let obj = {
        name,author,desc,date,select,price
    }
    let getVal = JSON.parse(localStorage.getItem("book-list"))||[]
    getVal.push(obj)
    localStorage.setItem("book-list",JSON.stringify(getVal))
    console.log(getVal)

})