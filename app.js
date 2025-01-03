
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add task functionality

function addTask(){
    if(inputBox.value === ''){
        alert("Must enter a task!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }

}

// Delete Task and mark done task functionality

listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "SPAN"){
        e.target.parentNode.remove();
        saveData();
        }
    else if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
},false);
 
//  save data to local storage to  add Continuity 
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML =  localStorage.getItem("data");
}
showTask();