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

let toggleNosotros = document.querySelector('.toggle__nosotros');
let toggleServicios = document.querySelector('.toggle__servicios');
let toggleNovedades = document.querySelector('.toggle__novedades');

let nosotros = document.querySelector('#nosotros');
let servicios = document.querySelector('#servicios');
let novedades = document.querySelector('#novedades');

function desplegarNosotros(){
  closeMenu = toggleNosotros.classList.contains('mobile-hidden');

  if(closeMenu){
    toggleNosotros.classList.remove('mobile-hidden');
    toggleNosotros.classList.add('mobile-show');
  } else if (!closeMenu){
    toggleNosotros.classList.add('mobile-hidden');
    nosotros.classList.remove('mobile-show');
  }
}

function desplegarServicios(){
  closeMenu = toggleServicios.classList.contains('mobile-hidden');

  if(closeMenu){
    toggleServicios.classList.remove('mobile-hidden');
    toggleServicios.classList.add('mobile-show');
  } else if (!closeMenu){
    toggleServicios.classList.add('mobile-hidden')
    toggleServicios.classList.remove('mobile-show');
  }
}

function desplegarNovedades(){
  closeMenu = toggleNovedades.classList.contains('mobile-hidden');

  if(closeMenu){
    toggleNovedades.classList.remove('mobile-hidden');
    toggleNovedades.classList.add('mobile-show');
  } else if (!closeMenu){
    toggleNovedades.classList.add('mobile-hidden');
    toggleNovedades.classList.remove('mobile-show');
  }
}


nosotros.addEventListener("click", () => {
  desplegarNosotros();
})
servicios.addEventListener("click", () => {
  desplegarServicios();
})
novedades.addEventListener("click", () => {
  desplegarNovedades();
});


document.addEventListener('DOMContentLoaded', function() {
  const botonAgregarFormacionAcademica = document.getElementById('agregarFormacionAcademica');
  const contenedorFormacionesAcademicas = document.getElementById('formaciones-academicas');

  botonAgregarFormacionAcademica.addEventListener('click', function() {
    const nuevaFormacionAcademica = document.createElement('div');
    nuevaFormacionAcademica.classList.add('formacion-academica');
    nuevaFormacionAcademica.innerHTML = `
      <label for="centroEducativo">Centro Educativo</label>
      <input type="text" name="centroEducativo" required>

      <label for="tituloObtenido">Grado o Título Obtenido</label>
      <input type="text" name="tituloObtenido" required>

      <label for="fechaObtencion">Fecha de Obtención</label>
      <input type="date" name="fechaObtencion" required>

      <button type="button" class="eliminarFormacionAcademica">Eliminar</button>
    `;
    contenedorFormacionesAcademicas.appendChild(nuevaFormacionAcademica);

    // Agregar evento para eliminar la formación académica recién agregada
    const botonesEliminar = document.querySelectorAll('.eliminarFormacionAcademica');
    botonesEliminar.forEach(boton => {
      boton.addEventListener('click', function() {
        this.parentElement.remove();
      });
    });
  });
});