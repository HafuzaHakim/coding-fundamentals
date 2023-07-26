const regBtn = document.querySelector("button.register");

const panel = document.querySelector("div.slide-over-container");

const closeBtn = document.querySelector(".close-button");

const pageBgroud = document.querySelector("div.bg-backdrop");

regBtn.addEventListener("click", slide);

closeBtn.addEventListener("click", close);

function slide() {
  panel.classList.add("slide-in");
  panel.classList.toggle("slide-out");
  pageBgroud.classList.toggle("bg-backdrop");
}

function close() {
  panel.classList.add("slide-out");
  panel.classList.toggle("slide-in");
  pageBgroud.classList.toggle("bg-backdrop");
}
