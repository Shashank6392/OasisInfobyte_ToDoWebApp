let inputs = document.getElementById("inp");
let listContainer = document.getElementById("list-container");

function addTask() {
  if (inputs.value == "") {
    alert("please enter your task!");
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = inputs.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputs.value = "";
  saveData();
}
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);
function saveData(){
  localStorage.setItem("data",listContainer.innerHTML);
}
function showList(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showList();