const toggles = document.querySelectorAll(".toggleDiv");

toggles.forEach((toggleDiv) => {
  toggleDiv.addEventListener("click", () => {
    toggleDiv.classList.toggle("active");
  });
});

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
};
