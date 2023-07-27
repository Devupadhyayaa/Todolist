const inputBox =document.querySelector('input')
const listContainer =document.getElementById("list-container")

inputBox.addEventListener('keyup', (event)=>{
    if (event.keyCode === 13) {
        if(inputBox.value===''){
            alert("Please enter the task before adding");
        }
        else{
            let li = document.createElement("li");
            li.innerHTML=inputBox.value;
            listContainer.appendChild(li);
            let span=document.createElement("span");
            span.innerHTML="\u00d7";
            li.appendChild(span);
        }
        inputBox.value="";
        saveData();
    }
}); 

function addTask(){
    if(inputBox.value===''){
        alert("Please enter the task before adding");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.localName==="span"){
        e.target.parentElement.remove();
    }
    saveData();
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function show(){
    listContainer.innerHTML=localStorage.getItem("data");
}
show();
