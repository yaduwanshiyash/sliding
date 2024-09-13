const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let slideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      gsap.fromTo(slide, 
        { left: '100%', opacity: 0 }, 
        { left: '0%', opacity: 1, duration: 1.5, ease: 'power2.out' }
      );
      slide.style.zIndex = 10; 
    } else {
      gsap.to(slide, { left: '-100%', opacity: 0, duration: 1.5, ease: 'power2.out' });
      slide.style.zIndex = 1;
    }
  });

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

function autoSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(autoSlide, 5000); 
}

slideInterval = setInterval(autoSlide, 5000);

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    showSlide(currentIndex);
    resetInterval(); 
  });
});

showSlide(currentIndex);