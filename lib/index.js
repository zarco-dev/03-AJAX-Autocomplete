// TODO: Autocomplete the input with AJAX calls.

const resultInput = document.getElementById("search");
const results = document.getElementById("results");


resultInput.addEventListener("keyup", (event) => {
  fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/${resultInput.value}`)
    .then(response => response.json())
    .then((data) => {
      for (let index = 0; index < 8; index += 1) {
        data.words[0] = "";
        data.words[1] = "";
        data.words[2] = "";
        results.insertAdjacentHTML("beforeend", `<li>${data.words[index]}</li>`);
      }
    });
  results.innerHTML = "";
});

const dark = document.querySelector("button");
const body = document.querySelector("body");
const span = document.querySelectorAll("span");
const ul = document.querySelector("ul");
const anchor = document.querySelectorAll(".btn-footer");


dark.addEventListener("click", (event) => {
  body.classList.toggle("dark");
  span.forEach((element) => {
    element.classList.toggle("container__title__dark");
  });
  ul.classList.toggle("ul_dark");
  resultInput.classList.toggle("ul_dark");
  resultInput.classList.toggle("input_dark");
  event.currentTarget.classList.toggle("button_dark");
  anchor.forEach((element) => {
    element.classList.toggle("btn_dark");
  });
});
