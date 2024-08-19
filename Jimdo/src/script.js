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

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper .iconDiv");
const carouselChildrens = [...carousel.children];

let isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

const infiniteScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));

const indicators = document.querySelectorAll(".indicator");
const totalImages = carouselChildrens.length;

const updateIndicators = () => {
  // Calculate the index of the centered image
  const centeredIndex =
    Math.round(carousel.scrollLeft / firstCardWidth) % totalImages;

  // Remove the active class from all indicators
  indicators.forEach((indicator) => indicator.classList.remove("active"));

  // Add the active class to the correct indicator
  indicators[centeredIndex].classList.add("active");
};

carousel.addEventListener("scroll", updateIndicators);

// Initialize the first indicator as active
updateIndicators();
