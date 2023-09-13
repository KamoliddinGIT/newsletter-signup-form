"use strict";

let submit = document.querySelector(".sub__btn");
let input = document.querySelector(".email");

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("worked!");
});
