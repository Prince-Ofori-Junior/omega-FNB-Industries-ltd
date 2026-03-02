
const slides = document.querySelectorAll('.product-images img');
const prevBtn = document.querySelector('.product-images .prev');
const nextBtn = document.querySelector('.product-images .next');
let current = 0;

function showSlide(index) {
  slides.forEach((img) => img.classList.remove('active'));
  slides[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

prevBtn.addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 3000);

document.addEventListener("DOMContentLoaded", function () {

  const galleryItems = document.querySelectorAll(".gallery-item img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const closeBtn = document.querySelector(".lightbox .close");

  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = item.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
      lightbox.style.display = "none";
    }
  });

});

// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  // Optional: animate hamburger
  hamburger.classList.toggle('open');
});