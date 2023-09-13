"use strict";

let submit = document.querySelector(".sub__btn");
let input = document.querySelector(".email");
let str = toString(input);
submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.includes("@gmail.com")) {
    alert(true);
    // if (!input.innerHTML) {
    //   alert("please enter an Email!");
    // }
  } else {
    alert(false);
  }
});
