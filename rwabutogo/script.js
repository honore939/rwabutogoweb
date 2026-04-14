// Complete JS extracted from index.html with enhancements
// Initialize Swiper slider
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    speed: 1200,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    on: {
        slideChange: function () {
            document.querySelectorAll('.swiper-slide').forEach((slide, index) => {
                slide.style.animationDelay = `${index * 0.5}s`;
            });
        }
    }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
    menuToggle.innerHTML = mainNav.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        mainNav.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Sticky header on scroll
const header = document.querySelector('.main-header');
window.addEventListener('scroll', function() {
    if (window.scrollY > 1000) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Product tabs functionality - handles dynamic categories
const tabBtns = document.querySelectorAll('.tab-btn');
const productCards = document.querySelectorAll('.product-card');

tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        tabBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const category = this.getAttribute('data-category');
        
        productCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Order button functionality (add data-product to buttons if needed)
const orderButtons = document.querySelectorAll('.product-card .btn');
orderButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.closest('.product-card').querySelector('h3').textContent;
        alert(`Thank you for your interest in ${productName}! Please contact Rwabutogo at +250 785 492 976 or rwabutogo@gmail.com to complete your order.`);
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will contact you within 24 hours.');
    this.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^=\"#news\"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#news') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Newsletter subscription
const newsletterForms = document.querySelectorAll('.newsletter-form');
newsletterForms.forEach(form => {
    const newsletterInput = form.querySelector('.newsletter-input');
    const newsletterBtn = form.querySelector('.newsletter-btn');
    
    newsletterBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if(newsletterInput.value) {
            alert(`Thank you for subscribing with ${newsletterInput.value}!`);
            newsletterInput.value = '';
        }
    });
});

// Initialize with header class if scrolled   
if (window.scrollY > 100) {
    header.classList.add('scrolled');
}

// Function to open location in maps
function openLocationInMaps() {
    const address = "Gatunga Center, Nduba Sector, Gasabo, Kigali, Rwanda";
    const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
}

// Make all location elements clickable
const clickableLocations = document.querySelectorAll('.clickable-location');
clickableLocations.forEach(location => {
    location.addEventListener('click', openLocationInMaps);
});

// Product view details enhancement
document.querySelectorAll('.product-card .btn').forEach(btn => {
    btn.textContent = 'Order Now';
    btn.style.background = 'var(--success)';
});

// Update nav links for smooth scroll
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Background image slideshow - changes every 3 seconds using local photos
const bgImages = [
  'Capture.PNG',
  'Capture1.PNG',
  'Capture2.PNG',
  'Capture3.PNG',
  'Capture4.PNG',
  'gate.PNG',
  'ironsheet.PNG',
  'cement.PNG',
  'roofing.PNG',
  'brick.PNG',
  'still.PNG',
  'window.PNG'
];

let currentBgIndex = 0;

function changeBackground() {
  document.body.style.backgroundImage = `url('${bgImages[currentBgIndex]}')`;
  currentBgIndex = (currentBgIndex + 1) % bgImages.length;
}

// Preload images for smooth animation
bgImages.forEach((imgSrc, index) => {
  const img = new Image();
  img.onload = () => console.log(`Preloaded ${imgSrc}`);
  img.onerror = (e) => console.error(`Failed to load ${imgSrc}`, e);
  img.src = imgSrc;
});

// Start the animation immediately
console.log('Background animation started');
changeBackground();
setInterval(changeBackground, 3000);


