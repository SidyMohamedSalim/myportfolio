let theme = "";

if (localStorage.getItem("theme") === null) {
  localStorage.setItem("theme", "light");
}

const btn = document.getElementById("theme");
const links = document.querySelectorAll(".limk");

console.log(links);

console.log(btn.checked);

const main = document.getElementById("main");

btn.addEventListener("click", () => {
  if (localStorage.getItem("theme") === "light" && btn.checked) {
    main.classList.add("sombre");
    main.classList.remove("light");

    links.forEach((link) => {
      link.style.color = "#ffff";
    });
    theme = "dark";
  } else {
    main.classList.remove("sombre");
    main.classList.add("light");
    links.forEach((link) => {
      link.style.color = "#000";
    });
    theme = "light";
  }
  localStorage.setItem("theme", theme);
  console.log(theme);
  console.log(btn.checked);
});

// Pour le menu responsive
const navIcon = document.querySelector(".nav-menu");
const nav = document.querySelector(".nav-header");
let isclicked = true;
navIcon.addEventListener("click", () => {
  if (isclicked) {
    nav.classList.add("show-nav");
    nav.classList.remove("nav-header");
    console.log(true);
    isclicked = false;
  } else {
    nav.classList.remove("show-nav");
    nav.classList.add("nav-header");
    isclicked = true;
  }
});
