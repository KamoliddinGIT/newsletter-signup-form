"use strict";

let submit = document.querySelector(".sub__btn");
let input = document.querySelector(".email");
let str = toString(input);

input.addEventListener("change", (e) => {
  str = input.toString();
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(str);
  if (input.toString().includes("@gmail.com")) {
    alert(true);
    // if (!input.innerHTML) {
    //   alert("please enter an Email!");
    // }
  } else {
    alert(false);
  }
});
