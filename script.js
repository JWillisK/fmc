const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides[currentSlide].classList.remove("active");
  slides[index].classList.add("active");
  currentSlide = index;
}

function nextSlide() {
  let nextIndex = (currentSlide + 1) % slides.length;
  showSlide(nextIndex);
}

setInterval(nextSlide, 2000); // Change images every 2 seconds (2000 ms)
