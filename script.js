document.getElementById('menuToggle').addEventListener('click', function() {
    const navMenu = document.getElementById('myNavMenu');
    navMenu.classList.toggle('active');
});

window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}

let typingEffect = new Typed(".typedText",{
  strings : ["Web Developer","Python Developer"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const navMenu = document.querySelector(".nav_menu_list");

  function updateDotPosition() {
    const activeLink = document.querySelector(".nav-link.active-link");
    if (activeLink) {
      const activeLinkOffset = activeLink.offsetLeft;
      const activeLinkWidth = activeLink.offsetWidth;
      navMenu.style.setProperty("--dot-left", `${activeLinkOffset + activeLinkWidth / 2}px`);
    }
  }

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.forEach(l => l.classList.remove("active-link"));
      this.classList.add("active-link");
      updateDotPosition();
    });
  });

  // Initial position
  updateDotPosition();
});
