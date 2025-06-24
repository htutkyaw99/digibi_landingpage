const mobile_menu = document.querySelector("#mobile-menu");

const menu = document.querySelector("#menu");

const mobile_navbar = document.querySelector("#mobile_nav");

menu.addEventListener("click", () => {
  console.log("show menu");
  mobile_navbar.style.transform = "translateX(0)";
});

mobile_menu.addEventListener("click", () => {
  console.log("hide menu");
  mobile_navbar.style.transform = "translateX(100%)";
});
