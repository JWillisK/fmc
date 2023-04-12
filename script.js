// Set the duration of the slide transition in milliseconds
const slideDuration = 5000; // 5 seconds

// Select all slides
const slides = document.querySelectorAll(".slide");

// Initialize the slide index
let slideIndex = 0;

// Start the slideshow
function startSlideshow() {
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    // Increment the slide index
    slideIndex++;

    // Reset the slide index if it's greater than the number of slides
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Show the current slide
    slides[slideIndex - 1].classList.add("active");

    // Set a timeout to call the function again
    setTimeout(startSlideshow, slideDuration);
}

// Start the slideshow on page load
window.addEventListener("load", startSlideshow);
