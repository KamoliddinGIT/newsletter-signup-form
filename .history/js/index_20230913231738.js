"use strict";

let submit = document.querySelector(".sub__btn");
let input = document.querySelector(".email");
let container = document.querySelector(".container");
let verified = document.querySelector(".verified");
let back__btn = document.querySelector(".back__btn");

let str = toString(input);

input.addEventListener("change", (e) => {
  str = e.target.value.toString();
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (str.includes("@.com")) {
    container.style.cssText = "display: none;";
    verified.style.cssText = "display: flex;";
  } else if (!str.length) {
    alert("enter email!");
  } else {
    alert("Error");
  }
});

back__btn.addEventListener("click", () => {
  container.style.cssText = "display: flex;";
  verified.style.cssText = "display: none;";
});
