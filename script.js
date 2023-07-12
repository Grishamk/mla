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
  slideIndex = (slideIndex + 1) % 32;
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
  const translateX = slideIndex * -100;
  sliderContainer.style.transform = `translateX(${translateX}%)`;
}


startAutoSlide(); // Iniciar el slider automático al cargar la página

//FadeIN
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkFadeIn() {
  const fadeInElements = document.querySelectorAll('.fade-in');
  fadeInElements.forEach(function(element) {
    const fadeInPosition = element.getBoundingClientRect().top + 20;
    if (fadeInPosition < window.innerHeight) {
      element.classList.add('fade-in-show');
    }
  });
}

window.addEventListener('DOMContentLoaded', checkFadeIn);
window.addEventListener('scroll', debounce(checkFadeIn));