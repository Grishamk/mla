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