// you can write your js code here
let buydata = JSON.parse(localStorage.getItem("buy-list"))||[]



let tbody=document.getElementById("tbody")
buypage(buydata)
function buypage(data){
    tbody.innerHTML=""
    data.map((el)=>{
        let tr = document.createElement("tr")
        let name=document.createElement("td")
        name.innerText=el.name
        let author=document.createElement("td")
        author.innerText=el.author
        let desc=document.createElement("td")
        desc.innerText=el.desc
        let date=document.createElement("td")
        date.innerText=el.date
        let category=document.createElement("td")
        category.innerText=el.select
        let price=document.createElement("td")
        price.innerText=el.price
        let del=document.createElement("button")
        del.innerText="Delete"

        del.addEventListener("click",()=>{
            let filtered=data.filter((x)=>{
                console.log(x)
                if(el==x){
                    return true
                }
                else{
                    return false 
                }
            })
            console.log(filtered)
            localStorage.setItem("buy-list",JSON.stringify(filtered))
            buypage(filtered)
            
        })
        tr.append(name,author,desc,date,category,price,del)
        tbody.append(tr)
        //location.reload()
    })
}