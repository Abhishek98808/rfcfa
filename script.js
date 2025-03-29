document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.style.display = (navLinks.style.display === "flex") ? "none" : "flex";
    });

    // Form Submission Alert
    const contactForm = document.querySelector("form");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you! Your message has been sent.");
        contactForm.reset();
    });

    // Start Image Slider
    startSlider();

    // Start Testimonials (if available)
    startTestimonials();
});

// IMAGE SLIDER FUNCTIONALITY
let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    if (slides.length === 0) return; // Exit if no slides exist

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000); // Keep looping every 3 seconds
}

// Start the slider function
function startSlider() {
    showSlides(); // Start image slideshow
}

// MANUAL SLIDER NAVIGATION
function plusSlides(n) {
    slideIndex += n - 1; // Adjust slideIndex for manual navigation
    showSlides(); 
}

// TESTIMONIAL SLIDER (if applicable)
let testimonialIndex = 0;

function showTestimonials() {
    let testimonials = document.querySelectorAll(".testimonial");
    if (testimonials.length === 0) return; // Exit if no testimonials

    for (let i = 0; i < testimonials.length; i++) {
        testimonials[i].style.display = "none";
    }

    testimonialIndex++;
    if (testimonialIndex > testimonials.length) { testimonialIndex = 1; }
    testimonials[testimonialIndex - 1].style.display = "block";

    setTimeout(showTestimonials, 4000); // Change every 4 seconds
}

// Start the testimonial slider
function startTestimonials() {
    showTestimonials();
}
