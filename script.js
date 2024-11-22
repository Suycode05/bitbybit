// Image Slider
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slider img');
    slides.forEach(slide => slide.classList.remove('active'));
    
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    slides[slideIndex].classList.add('active');
}

setInterval(showSlides, 3000); // Automatically change slides every 3 seconds

// Initialize the first slide
window.onload = function() {
    showSlides();
};

// Form Validation
document.getElementById("join-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    if (name && email) {
        alert(`Thank you for joining, ${name}! We will contact you at ${email}.`);
    } else {
        alert("Please fill in all fields.");
    }
});
