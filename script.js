const text  = document.getElementById("input_work")
const listtask = document.getElementById("list_task")

let count = 0
function addtask(){
   
    if(count===8){
        alert("to much tusk for a day")
    }
    if(text.value === ""){
        alert("Enter the task first--")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = text.value
        listtask.appendChild(li)
        count++
        console.log(count)
        let span = document.createElement("button")
        span.classList.add("check_button");
        span.innerHTML = "checked"
        li.appendChild(span)
    }
    text.value = ""
}

listtask.addEventListener("click" , function (e){
    if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove()
    }
} , false)
