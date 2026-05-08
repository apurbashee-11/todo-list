let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");


btn.addEventListener("click", function(){
    if(input.value != ''){
    let item = document.createElement("li");
    item.innerText = input.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    ul.appendChild(item);
    item.appendChild(delBtn);
    input.value = "";
    }
});
ul.addEventListener("click", function(event){
    if(event.target.nodeName == 'BUTTON'){
        let listItem = event.target.parentElement;
        console.log(listItem);
        listItem.remove();
        console.log("task deleted");
    }
});
