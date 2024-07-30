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


//FORMULARIO FORMACION ACADEMICA
/*
document.addEventListener('DOMContentLoaded', function() {
  const botonAgregarFormacionAcademica = document.getElementById('agregarFormacionAcademica');
  const contenedorFormacionesAcademicas = document.getElementById('formaciones-academicas');
  let contadorFormacionAcademica = 2;

  botonAgregarFormacionAcademica.addEventListener('click', function() {
    const nuevaFormacionAcademica = document.createElement('div');
    nuevaFormacionAcademica.classList.add('formacion-academica');
    nuevaFormacionAcademica.innerHTML = `
      <hr></hr>
      <h3> Formación Académica ${contadorFormacionAcademica}</h3>
      <div class="elementos">
        <div class="elemento elemento9">
          <label for="centroEducativo${contadorFormacionAcademica}">Centro Educativo</label>
          <input type="text" name="centroEducativo${contadorFormacionAcademica}" required>
        </div>
        <div class="elemento elemento10">
          <label for="tituloObtenido${contadorFormacionAcademica}">Grado o Título Obtenido</label>
          <input type="text" name="tituloObtenido${contadorFormacionAcademica}" required>
        </div>
        <div class="elemento elemento11">
          <label for="fechaObtencion${contadorFormacionAcademica}">Fecha de Obtención</label>
          <input type="date" name="fechaObtencion${contadorFormacionAcademica}" required>
        </div>
      </div>

      <button type="button" class="eliminarFormacionAcademica">Eliminar</button>
    `;
    contenedorFormacionesAcademicas.appendChild(nuevaFormacionAcademica);
    contadorFormacionAcademica ++;

    // Agregar evento para eliminar la formación académica recién agregada
    const botonesEliminar = document.querySelectorAll('.eliminarFormacionAcademica');
    botonesEliminar.forEach(boton => {
      boton.addEventListener('click', function() {
        this.parentElement.remove();
      });
    });
  });
});

//FORMACIONES TECNICAS EN FORMULARIO DE EMPLEO
document.addEventListener('DOMContentLoaded', function() {
  const botonAgregarFormacionTecnica = document.getElementById('agregarFormacionTecnica');
  const contenedorFormacionesTecnicas = document.getElementById('formaciones-tecnicas');
  let contadorFormacionTecnica = 2;

  botonAgregarFormacionTecnica.addEventListener('click', function() {
    const nuevaFormacionTecnica = document.createElement('div');
    nuevaFormacionTecnica.classList.add('formacion-tecnica');
    nuevaFormacionTecnica.innerHTML = `
    <hr></hr>
    <h3>Formación Técnica ${contadorFormacionTecnica}</h3>
    <div class="elementos">
      <div class="elemento elemento12">
        <label for="centroEducativoTec${contadorFormacionTecnica}">Centro Educativo</label>
        <input type="text" name="centroEducativoTec${contadorFormacionTecnica}" required>
      </div>
      <div class="elemento elemento13">
        <label for="tituloObtenidoTec${contadorFormacionTecnica}">Certificado Obtenido</label>
        <input type="text" name="tituloObtenidoTec${contadorFormacionTecnica}" required>
      </div>
      <div class="elemento elemento14">
        <label for="fechaObtencionTec${contadorFormacionTecnica}">Fecha de Obtención</label>
        <input type="date" name="fechaObtencionTec${contadorFormacionTecnica}" required>
      </div>
    </div>

    <button type="button" class="eliminarFormacionTecnica">Eliminar</button>
    `;
    contenedorFormacionesTecnicas.appendChild(nuevaFormacionTecnica);
    contadorFormacionTecnica++;
    // Agregar evento para eliminar la formación académica recién agregada
    const botonesEliminar = document.querySelectorAll('.eliminarFormacionTecnica');
    botonesEliminar.forEach(boton => {
      boton.addEventListener('click', function() {
        this.parentElement.remove();
      });
    });
  });
});

//IDIOMAS EN FORMULARIO DE EMPLEO
document.addEventListener('DOMContentLoaded', function() {
  const botonAgregarIdioma = document.getElementById('agregarIdioma');
  const contenedorIdiomas = document.getElementById('idiomas');
  let contadorIdioma = 2;

  botonAgregarIdioma.addEventListener('click', function() {
    const nuevoIdioma = document.createElement('div');
    nuevoIdioma.classList.add('idioma');
    nuevoIdioma.innerHTML = `
    <hr></hr>
    <h3>Idioma ${contadorIdioma}</h3>
    <div class="elementos">
      <div class="elemento elemento15>
        <label for="idioma${contadorIdioma}">Idioma</label>
        <input type="text" name="idioma${contadorIdioma}" required>
      </div>
      <div class="elemento elemento16>
        <label for="nivelIdioma${contadorIdioma}">Nivel</label>
        <select id="nivelIdioma${contadorIdioma}" name="nivelIdioma${contadorIdioma}" required>
          <option value="pasaporte">Básico</option>
          <option value="cedula">Intermedio</option>
          <option value="cedula">Avanzado</option>
        </select>
      </div>
    </div>
    <button type="button" class="eliminarIdioma">Eliminar</button>
    `;
    contenedorIdiomas.appendChild(nuevoIdioma);
    contadorIdioma++;
    // Agregar evento para eliminar la formación académica recién agregada
    const botonesEliminar = document.querySelectorAll('.eliminarIdioma');
    botonesEliminar.forEach(boton => {
      boton.addEventListener('click', function() {
        this.parentElement.remove();
      });
    });
  });
});*/
