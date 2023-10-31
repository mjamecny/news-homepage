const hamburgerEl = document.querySelector(".header__hamburger")
const hamburgerCloseEl = document.querySelector(".header__hamburger-close")
const bodyEl = document.querySelector("body")

hamburgerEl.addEventListener("click", () => {
  bodyEl.classList.toggle("nav-open")
})

hamburgerCloseEl.addEventListener("click", () => {
  bodyEl.classList.toggle("nav-open")
})
