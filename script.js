const prevButton = document.querySelector('.slider-controls .prev');
const nextButton = document.querySelector('.slider-controls .next');
const sliderContainer = document.querySelector('.slider-container');

let slideIndex = 0;
let autoSlideInterval;

prevButton.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 < 0) ? 2 : slideIndex - 1;
  updateSlider();
});

nextButton.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % 15;
  updateSlider();
});

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    slideIndex = (slideIndex + 1) % 32;
    updateSlider();
  }, 3000); // Cambia el intervalo de tiempo según tus necesidades (en milisegundos)
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

function updateSlider() {
  const translateX = slideIndex * -33.333;
  sliderContainer.style.transform = `translateX(${translateX}%)`;
}

startAutoSlide(); // Iniciar el slider automático al cargar la página
