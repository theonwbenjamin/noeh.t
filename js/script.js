// Optional JavaScript for smooth scroll effect
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default anchor click behavior
  
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
  
      // Scroll to the target section
      targetElement.scrollIntoView({
        behavior: 'smooth' // Smooth scroll
      });
    });
  });

  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    burger.classList.toggle('toggle');
  });
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Change slide every 3 seconds
setInterval(showNextSlide, 3000);