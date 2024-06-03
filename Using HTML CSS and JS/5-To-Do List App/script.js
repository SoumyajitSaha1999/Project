const inputBox = document.getElementById("input-box");
const listCotainer = document.getElementById("list-cotainer");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listCotainer.appendChild(li);
    // For cross icon
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listCotainer.addEventListener("click", function (e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listCotainer.innerHTML);
}

function showTask() {
    listCotainer.innerHTML = localStorage.getItem("data");
}
showTask();