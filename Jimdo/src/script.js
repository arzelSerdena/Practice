const toggles = document.querySelectorAll(".toggleDiv");

toggles.forEach((toggleDiv) => {
  toggleDiv.addEventListener("click", () => {
    toggleDiv.classList.toggle("active");
  });
});

const hamburgerToggle = document.getElementById("hamburgerToggle");

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
  overlay = document.querySelector(".overlay");
  overlay.classList.toggle("hidden");
  navnav = document.querySelector(".navnav");

  navnav2 = document.querySelector(".navnav2");

  if (navbar.classList.contains("active")) {
    hamburgerToggle.innerHTML =
      '<div class="h-[4px] w-[25px] bg-white rotate-45 translate-y-1"></div><div class="h-[4px] w-[25px] bg-white -rotate-45"></div>';
    navnav.classList.remove("bg-white");
    navnav2.classList.remove(
      "max-[991px]:bg-white",
      "max-[991px]:shadow-custom-shadow"
    );
  } else {
    hamburgerToggle.innerHTML =
      '<div class="h-[3px] w-[25px] bg-dark-blue mb-1"></div><div class="h-[3px] w-[25px] bg-dark-blue mb-1"></div><div class="h-[3px] w-[25px] bg-dark-blue"></div>';
    navnav.classList.add("bg-white");
    navnav2.classList.add(
      "max-[991px]:bg-white",
      "max-[991px]:shadow-custom-shadow"
    );
  }
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

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".sliderBtnLeft");
  const btnRight = document.querySelector(".sliderBtnRight");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      // Translate the slides based on the current slide index
      s.style.transform = `translateX(${100 * (i - slide)}%)`;

      // If this is the next slide, scale and set full opacity
      if (i === slide + 1 || (slide === slides.length - 1 && i === 0)) {
        s.style.transform += " scale(1)"; // Scale the next slide to 100%
        s.style.opacity = "1"; // Set full opacity for the next slide
      } else {
        // For all other slides, scale down and reduce opacity
        s.style.transform += " scale(0.8)";
        s.style.opacity = "0.75"; // Lower opacity for other slides
      }
    });
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 2) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;

      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
