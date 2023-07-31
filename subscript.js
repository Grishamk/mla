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