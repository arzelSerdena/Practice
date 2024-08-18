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

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const indicators = document.querySelectorAll(".indicator");

let currentIndex = 0;

function updateSliderPosition() {
  const offset = (-currentIndex * 100) / 3; // Adjust for 3 images visible
  slider.style.transform = `translateX(${offset}%)`;

  slides.forEach((slide, index) => {
    slide.classList.remove("current-slide");
    if (index === currentIndex) {
      slide.style.opacity = "1";
    } else if (
      index === (currentIndex - 1 + slides.length) % slides.length ||
      index === (currentIndex + 1) % slides.length
    ) {
      slide.style.opacity = "0.5";
    } else {
      slide.style.opacity = "0.3";
    }
  });

  slides[currentIndex].classList.add("current-slide");

  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentIndex);
  });
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSliderPosition();
}

function showPreviousSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSliderPosition();
}

rightArrow.addEventListener("click", showNextSlide);
leftArrow.addEventListener("click", showPreviousSlide);

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentIndex = index;
    updateSliderPosition();
  });
});

updateSliderPosition();
