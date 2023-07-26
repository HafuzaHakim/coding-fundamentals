const notificationBox = document.querySelector(".notification");

const addBtn = document.querySelector(".add__button");

const closeBtn = document.querySelector(".cta__button");

function notificationPop() {
  notificationBox.classList.add("show");
}

function closePopUp() {
  notificationBox.classList.remove("show");
}

addBtn.addEventListener("click", notificationPop);

closeBtn.addEventListener("click", closePopUp);
