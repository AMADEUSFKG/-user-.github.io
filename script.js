let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-image');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Fonctions pour afficher et fermer le formulaire de newsletter
function showNewsletterForm() {
    document.getElementById("newsletterForm").style.display = "flex";
}

function closeNewsletterForm() {
    document.getElementById("newsletterForm").style.display = "none";
}

