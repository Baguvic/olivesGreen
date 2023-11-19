const navbar = document.querySelector(".nav-link");
document.querySelector("#menu").onclick = () => {
  navbar.classList.toggle("active");
};

const navscroll = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (this.window.scrollY > 1) {
    navscroll.classList.add("good");
  } else if (this.window.scrollY <= 0) {
    navscroll.classList.remove("good");
  }
});
