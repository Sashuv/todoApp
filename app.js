const addTodo = document.getElementById("addTodo");
const todoContainer = document.getElementById("todo-container");
const inputfield = document.getElementById("inputfield");

document.addEventListener("keyup", function (event) {
//   console.log(event.key);
  if (event.key == "Enter") {
    addTodoFunc();
  }
});

addTodo.addEventListener("click", function (event) {
  addTodoFunc();
});

function addTodoFunc() {
  var todoName = inputfield.value;
  if (todoName != "") {
    var paragraph = document.createElement("p");
    paragraph.classList.add("atodo");
    paragraph.innerText = todoName;
    todoContainer.appendChild(paragraph);
    inputfield.value = "";

    paragraph.addEventListener("click", function () {
      paragraph.style.textDecoration = "line-through";
    });

    paragraph.addEventListener("dblclick", function () {
      todoContainer.removeChild(paragraph);
    });
  }

  else{
      customalert();
  }
}

function customalert() {
    alert("The input field is empty!");
  
}
