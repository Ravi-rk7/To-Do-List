
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    // let task = inputBox.value.trim();
    if(inputBox.value === ''){
        alert("Must enter a task!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

}

listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "SPAN"){
        e.target.parentNode.remove();
        }
    else if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
},false);
