"use strict";

let submit = document.querySelector(".sub__btn");
let input = document.querySelector(".email");
let str = toString(input);
let container = document.querySelector(".container");
let verified = document.querySelector(".container");

input.addEventListener("change", (e) => {
  str = e.target.value.toString();
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (str.includes("@gmail.com")) {
    container.style.cssText = "display: none;";
  } else if (!str.length) {
    alert("enter email!");
  } else {
    alert("Error");
  }
});
