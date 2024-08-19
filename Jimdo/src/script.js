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

const headerToggles = document.querySelectorAll(".headerToggle");

headerToggles.forEach((headerToggle) => {
  headerToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    headerToggle.classList.toggle("active");
    headerToggles.forEach((otherToggle) => {
      if (otherToggle !== headerToggle) {
        otherToggle.classList.remove("active");
      }
    });
  });
});
document.addEventListener("click", () => {
  headerToggles.forEach((headerToggle) => {
    headerToggle.classList.remove("active");
  });
});
