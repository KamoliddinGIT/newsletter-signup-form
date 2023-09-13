"use strict";

let submit = document.querySelector(".sub__btn");
let input = document.querySelector(".email");

submit.addEventListener("click", (e) => {
  if (input.innerHTML.includes("@gmail.com")) {
    alert(true);
  } else {
    alert(false);
  }
  alert("worked!");
});
