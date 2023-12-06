const btn = document.getElementById("checkbox");
const nav = document.getElementById("header__top-row");

btn.addEventListener("click", () => {
  nav.classList.toggle("header__top-row--mobile");

  document.body.classList.toggle("no-scroll");
});
