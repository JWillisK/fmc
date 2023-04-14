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
document.addEventListener("DOMContentLoaded", startSlideshow);

// Create the dropdown menu element
const dropdownMenu = document.createElement("div");
dropdownMenu.className = "dropdown-menu";

// Add the menu items to the dropdown menu
const menuItems = [
  { text: "HOME", href: "index.html" },
  { text: "ABOUT US", href: "about.html" },
  { text: "MENU", href: "menu.html" },
  { text: "ONLINE ORDERING", href: "online-ordering.html" },
  { text: "WORKSHOP", href: "workshop.html" },
  { text: "CONTACT US", href: "contact.html" },
];

menuItems.forEach((item) => {
  const menuItem = document.createElement("a");
  menuItem.href = item.href;
  menuItem.textContent = item.text;
  menuItem.className = "dropdown-menu-item";
  dropdownMenu.appendChild(menuItem);
});

// Add the dropdown menu to the page
document.body.appendChild(dropdownMenu);

// Set the initial display property of the dropdown menu to 'none'
dropdownMenu.style.display = "none";

// Select the 'icon' element
const menuIcon = document.querySelector(".icon");

// Toggle the dropdown menu visibility when the 'icon' is clicked
menuIcon.addEventListener("click", () => {
  dropdownMenu.style.display = dropdownMenu.style.display === "none" ? "block" : "none";
});
