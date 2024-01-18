const inputbox = document.getElementById("input__box");
const listbox = document.getElementById("content__ul");

function addTask(){
    if(inputbox.value === ""){
        alert("Maydonni to'ldirishingiz kerak");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listbox.appendChild(li);
        let img = document.createElement("img")
        img.setAttribute("src", "./pictures/delete.png")
        li.appendChild(img);
    }
    inputbox.value = "";
    save();
}

listbox.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("chacked");
        save();
    }
    else if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        save();

    }
},false);

function save(){
    localStorage.setItem("data", listbox.innerHTML);
}
function task(){
    listbox.innerHTML = localStorage.getItem("data");
}

