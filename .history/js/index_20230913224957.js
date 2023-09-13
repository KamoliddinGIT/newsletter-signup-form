"use strict";

let submit = document.querySelector(".sub__btn");
let input = document.querySelector(".email");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  alert("worked!");
});
