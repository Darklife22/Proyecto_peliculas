document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.carousel');
  
    carousels.forEach(carousel => {
      const nextButton = carousel.querySelector('.carousel-control-next');
      const prevButton = carousel.querySelector('.carousel-control-prev');
      const wrapper = carousel.querySelector('.carousel-wrapper');
      const images = wrapper.querySelectorAll('img');
      const imageWidth = images[0].offsetWidth;
      const visibleCount = 3;
      const totalImages = images.length;
      const totalWidth = imageWidth * totalImages;
      let index = 0;
  
      function updateCarousel() {
        const offset = -index * imageWidth;
        wrapper.style.transform = `translateX(${offset}px)`;
      }
  
      nextButton.addEventListener('click', () => {
        index = (index + 1) % (totalImages - visibleCount + 1);
        updateCarousel();
      });
  
      prevButton.addEventListener('click', () => {
        index = (index - 1 + (totalImages - visibleCount + 1)) % (totalImages - visibleCount + 1);
        updateCarousel();
      });
  
      updateCarousel();
    });
  });
  