const pageHeader = document.querySelector("#header");

//Hide & Show Nav bar while scrolling
window.addEventListener("scroll", (e) => {
  window.scrollY > 30 ? slideOut() : slideIn();
});

//Show Nav bar while hovering
window.addEventListener("mousemove", (e) => {
  if (window.scrollY > 10) {
    e.y < 80 ? slideIn() : slideOut();
  }
});

function slideIn() {
  pageHeader.classList.add("slide-in");
  pageHeader.classList.remove("slide-out");
}

function slideOut() {
  pageHeader.classList.add("slide-out");
  pageHeader.classList.remove("slide-in");
}
