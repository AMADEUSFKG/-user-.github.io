let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-image');
const indicators = document.querySelectorAll('.indicator');

// Vérification que les éléments existent
if (slides.length > 0 && indicators.length > 0) {
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
}

// Fonctions pour afficher et fermer le formulaire de newsletter
function showNewsletterForm() {
    const form = document.getElementById("newsletterForm");
    if (form) form.style.display = "flex";
}

function closeNewsletterForm() {
    const form = document.getElementById("newsletterForm");
    if (form) form.style.display = "none";
}



function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active'); // Ajoute ou retire la classe active
}

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active'); // Ajoute ou retire la classe active
    } else {
        console.error("L'élément .nav-menu est introuvable");
    }
}



