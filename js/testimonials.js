document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.testimonial-carousel');
  const items = document.querySelectorAll('.testimonial-item');
  
  if (!carousel || items.length <= 1) return;

  let currentIndex = 0;
  
  function showTestimonials() {
    const isMobile = window.innerWidth < 768;
    
    items.forEach((item, index) => {
      if (isMobile) {
        item.style.display = index === currentIndex ? 'block' : 'none';
      } else {
        item.style.display = 'block';
      }
    });
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % items.length;
    showTestimonials();
  }

  if (window.innerWidth < 768) {
    setInterval(nextTestimonial, 5000);
  }

  window.addEventListener('resize', showTestimonials);
  
  showTestimonials();
});
