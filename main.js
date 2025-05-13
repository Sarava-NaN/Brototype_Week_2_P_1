let icon=document.getElementById("menu-icon")
let nav__lists = document.querySelector(".navbar");

icon.addEventListener("click", () => {
    nav__lists.classList.toggle("show");
})