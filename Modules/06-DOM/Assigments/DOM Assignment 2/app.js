const cmdPlt = document.querySelector("div.palette");
const myDoc = document.querySelector("body");

function toggleCmd() {
  cmdPlt.classList.toggle("fade-out");
  cmdPlt.classList.toggle("fade-in");
}

myDoc.addEventListener("keydown", (e) => {
  const firstKey = event.ctrlKey;
  const secondKey = event.key;

  if (firstKey && (secondKey === "k" || secondKey === "K")) {
    toggleCmd();
  }
});
