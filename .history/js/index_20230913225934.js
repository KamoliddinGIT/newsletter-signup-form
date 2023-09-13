"use strict";

let submit = document.querySelector(".sub__btn");
let input = document.querySelector(".email");
let str = toString(input);

input.addEventListener("change", (e) => {
  str = e.target.value.toString();
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(str);
  if (str.includes("@gmail.com")) {
    alert(true);
  } else if (!str) {
    alert("enter email!");
  } else {
    alert("Error");
  }
});
