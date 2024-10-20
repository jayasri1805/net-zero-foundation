// Add any JavaScript functionality if needed
document.addEventListener("DOMContentLoaded", function() {
    console.log("Document loaded");
});
document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can handle the form data (e.g., send it to a server)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Optionally reset the form after submission
    this.reset();
});

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slides img');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100; // Adjust based on the number of slides
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Initialize the slider
showSlide(currentSlide);
