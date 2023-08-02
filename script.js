const carouselContainer = document.querySelector('.carousel-container');
const totalImages = 31; // Reemplaza el total de imágenes adecuadamente
let currentPosition = 0;

function updateCarouselPosition() {
  carouselContainer.style.transform = `translateX(-${currentPosition * 100}%)`;
}

function slideNext() {
  currentPosition = (currentPosition + 1) % totalImages;
  updateCarouselPosition();
}

// Ajusta el intervalo de tiempo aquí (en milisegundos)
const slideInterval = 4000; // 4 segundos

let slideTimer = setInterval(slideNext, slideInterval);

// Detener la transición cuando el mouse está sobre el carrusel
carouselContainer.addEventListener('mouseenter', () => {
  clearInterval(slideTimer);
});

// Reanudar la transición cuando el mouse sale del carrusel
carouselContainer.addEventListener('mouseleave', () => {
  slideTimer = setInterval(slideNext, slideInterval);
});

//FadeIN
function debounce(func, wait = 1, immediate = true) {
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



//CARRUSEL

const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const info = document.querySelectorAll(".info");
const numberOfSlides = slides.length;
var slideNumber = 0;

//image slider next button
nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber++;

  if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

//image slider previous button
prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber--;

  if(slideNumber < 0){
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");

});


//image slider autoplay
var playSlider;

var repeater = () => {
  playSlider = setInterval(function(){
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
      slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
  }, 8000);
}
repeater();

//stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});

//start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
  repeater();
});

// Función para mostrar el slide actual y reiniciar la animación
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
      const textContainer = slide.querySelector("info");
      textContainer.classList.add("animate"); // Cambia "animate__bounceIn" por la animación que desees para el texto
    } else {
      slide.classList.remove("active");
      const textContainer = slide.querySelector(".info");
      textContainer.classList.remove("animate"); // Elimina la clase de animación en slides que no son el actual
    }
  });
}

//Barra de navegación FIXED
window.addEventListener("load", function() {
  // Obtén la barra de navegación
  var barra = document.getElementById("mi-barra");
  
  // Obtén la posición inicial de la barra de navegación
  var barraOffset = barra.offsetTop;

  // Agrega un evento para detectar el scroll de la página
  window.addEventListener("scroll", function() {
    // Obtén la posición actual del scroll
    var scrollActual = window.scrollY;

    // Comprueba si la posición del scroll supera la posición inicial de la barra
    if (scrollActual > barraOffset) {
      // Si es así, agrega la clase CSS 'fixed' para hacer la barra fija
      barra.classList.add("fixed");
    } else {
      // Si el scroll retrocede, elimina la clase 'fixed' para que la barra vuelva a su posición original
      barra.classList.remove("fixed");
    }
  });
});

