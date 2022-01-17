// btn show module
const btn_show = document.querySelector(".btn-show");
const module = document.querySelector(".module"); //module
const btnEdit=document.querySelector(".btn-edit")
btn_show.addEventListener("click", (event) => {
  module.classList.remove("hidden");
  module.classList.add("flex");
});

