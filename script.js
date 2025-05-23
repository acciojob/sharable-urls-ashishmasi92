// your code here


document.addEventListener("DOMContentLoaded",createAForm)


function createAForm(){

    let div = document.createElement("div")
    div.id = "container"
    
    let h3 = document.createElement("h3")
    h3.id = "url"
    h3.innerHTML=`text https://localhost:8080/`
    
    
    let inputField1 = document.createElement("input")
    inputField1.type="text"
    inputField1.name="name"
    inputField1.id = "name"
inputField1.placeholder="Enter you name"    
    
    let inputField2 = document.createElement("input")
    inputField2.type="number"
inputField2.name="year"
    inputField2.id = "year"
    inputField2.placeholder="year"
    
let formBtn = document.createElement("button")
formBtn.id="button"
formBtn.innerHTML = "Sumbit"

formBtn.addEventListener("click",()=>{
    let name = inputField1.value;
    let year = inputField2.value;

   
    
    if(name && year){
        h3.innerHTML = h3.innerHTML+`?name=${name}&year=${year}`

    }
    else if(name){
        h3.innerHTML = h3.innerHTML+`?name=${name}`

    }
    else if(year){

        h3.innerHTML = h3.innerHTML+`?year=${year}`

    }

inputField1.value=""
inputField2.value=""

})

document.body.append(div)
div.append(inputField1,inputField2,formBtn,h3)



}





