"use strict";

let submit = document.querySelector(".sub__btn");
let input = document.querySelector(".email");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.innerHTML.includes() === "@gmail.com") {
    alert(true);
  } else {
    alert(false);
  }
  if (!input.innerHTML) {
    alert("please enter an Email!");
  }
});
