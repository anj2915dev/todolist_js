// btn show module
const btn_show = document.querySelector(".btn-show");
const module = document.querySelector(".module"); //module
const btnClose = document.querySelector(".btn-close");
const btnAdd = document.querySelector(".btn-add");
const inputBox = document.querySelector(".input-box");
const todolist = document.querySelector(".todolist");
const btnEdit = document.querySelectorAll(".btn-edit");
const dateDom = document.querySelectorAll(".date");

btn_show.addEventListener("click", ShowModule);
btnClose.addEventListener("click", CloseModule);
btnAdd.addEventListener("click", AddTodo);
todolist.addEventListener("click", editanddlite);
document.querySelector("DOMContentLoaded", getTodo());

// close module
function CloseModule() {
  module.classList.remove("flex");
  module.classList.add("hidden");
  SetTitleModule();
}
// show module
function ShowModule() {
  module.classList.remove("hidden");
  module.classList.add("flex");
}
// shomodule edit
function ShowModuleEdit(e) {
  module.children[0].innerText = "Edit todo";
  btnAdd.innerText = "edit";
  ShowModule();
}
// set title module edite and add
function SetTitleModule() {
  module.children[0].innerText = "new todo";
  btnAdd.innerText = "add";
}
// add todo in html
function AddTodo(e) {
  e.preventDefault();
  const todoItem = document.createElement("li");
  let result = "";
  result = `
<!-- items todo -->
<li class="todo  ">
    <!-- content and chekbox -->
    <span class="flex items-center text-2xl">
        <input type="checkbox" class="form-checkbox rounded-full">

        <p class="text">
        ${inputBox.value}
        </p>
    </span>
    <span class="text-2xl">
        <i class="btn-edit fas fa-pencil-alt text-blue-500"></i>
        <i class=" fa fa-trash text-red-600 ml-4" aria-hidden="true"></i>
    </span>
</li>`;
  todoItem.innerHTML = result;

  todolist.appendChild(todoItem);
  setTodo(inputBox.value);
  inputBox.value = "";
}
// add todo in dom
function editanddlite(e) {
  const text_todo = document.querySelectorAll(".text");

  const item = e.target;
  if (item.classList[0] === "btn-edit") {
    ShowModuleEdit();
    inputBox.value = item.parentElement.parentElement.innerText;
  } else if (item.classList[1] === "fa-trash") {
    const todo = item.parentElement.parentElement;
    todo.remove();
  } else if (item.classList[0] === "form-checkbox") {
    if (item.checked == true) {
      item.parentElement.classList.toggle("complid");
    } else {
      item.parentElement.classList.remove("complid");
    }
  }
}
// read todo in localstorage
function setTodo(todo) {
  let savedTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  console.log(savedTodos);
  savedTodos.push(todo);
  localStorage.setItem("todos", JSON.stringify(savedTodos));
}
function getTodo() {
  let savedTodos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  savedTodos.forEach((element) => {
    const todoItem = document.createElement("li");
    let result = "";
    result = `
  <!-- items todo -->
  <li class="todo  ">
      <!-- content and chekbox -->
      <span class="flex items-center text-2xl">
          <input type="checkbox" class="form-checkbox rounded-full">
  
          <p class="text">
          ${element}
          </p>
      </span>
      <span class="text-2xl">
          <i class="btn-edit fas fa-pencil-alt text-blue-500"></i>
          <i class=" fa fa-trash text-red-600 ml-4" aria-hidden="true"></i>
      </span>
  </li>`;
    todoItem.innerHTML = result;

    todolist.appendChild(todoItem);
  });
  date();
}

