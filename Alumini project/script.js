
const countdownElement = document.getElementById("countdown");
const eventDate = new Date("January 10, 2025 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    backToTopButton.style.display = "flex";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Set carousel interval to 1 second (1000ms)
var myCarousel = document.querySelector("#eventCarousel");
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000, // 3 seconds for a smooth slide
  ride: "carousel", // Automatically start sliding
  pause: false, // Do not pause when hovered
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
