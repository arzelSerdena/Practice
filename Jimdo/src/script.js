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
  hamburger = document.querySelector(".hamburger");
  hamburger.classList.add("hidden");
  overlay = document.querySelector(".overlay");
  overlay.classList.remove("hidden");
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

const languageToggles = document.querySelectorAll(".languageToggleDiv");

languageToggles.forEach((languageToggleDiv) => {
  languageToggleDiv.addEventListener("click", (event) => {
    event.stopPropagation();
    languageToggleDiv.classList.toggle("active");
    languageToggles.forEach((otherToggle) => {
      if (otherToggle !== languageToggleDiv) {
        otherToggle.classList.remove("active");
      }
    });
  });
});
document.addEventListener("click", () => {
  languageToggles.forEach((languageToggleDiv) => {
    languageToggleDiv.classList.remove("active");
  });
});
