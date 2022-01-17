
// btn show module
const btn_show = document.querySelector(".btn-show");
const module = document.querySelector(".module"); //module
const btnEdit = document.querySelector(".btn-edit");
const btnClose = document.querySelector(".btn-close");
const btnAdd = document.querySelector(".btn-add");

btn_show.addEventListener("click", ShowModule);
btnClose.addEventListener("click", CloseModule);
btnEdit.addEventListener("click", ShowModuleEdit);

// close module
function CloseModule() {
  module.classList.remove("flex");
  module.classList.add("hidden");
  module.children[0].innerText = "new todo";
  btnAdd.innerText="add";


}
// show module
function ShowModule() {
  module.classList.remove("hidden");
  module.classList.add("flex");
}
// shomodule edit
function ShowModuleEdit() {
  module.children[0].innerText = "Edit todo";
  btnAdd.innerText="edit";
  ShowModule();

}
