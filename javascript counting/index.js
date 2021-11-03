let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0
function increment(){
    count+=1
    countEl.innerText=count
}
function save(){
    let history = count + "-"
    saveEl.innerText += history
    console.log(count)
    if(count > 0){
    count=-1;
    increment()
}
}





