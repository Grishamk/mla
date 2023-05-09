window.addEventListener("load", function () {
    let currentIndex = 0;
    const slideCount = document.querySelectorAll(".slide_group .slide").length;
    const slider = document.querySelector(".main-container__carrusel");
    const slideGroup = document.querySelector(".slide_group");
    const slides = document.querySelectorAll(".slide_group .slide");
    const slideButtons = document.querySelectorAll(".slide_buttons .slide_btn");
    const previousBtn = document.querySelector(".previous_btn");
    const nextBtn = document.querySelector(".next_btn");
    const slideInterval = 5000;
    let slideTimer;
  
    // Ocultamos todas las diapositivas excepto la primera
    slides[currentIndex].style.display = "block";
  
    // Agregamos la clase 'active' al botón correspondiente a la diapositiva actual
    slideButtons[currentIndex].classList.add("active");
  
    // Función para avanzar a la siguiente diapositiva
    function nextSlide() {
      slides[currentIndex].style.display = "none";
      slideButtons[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % slideCount;
      slides[currentIndex].style.display = "block";
      slideButtons[currentIndex].classList.add("active");
    }
  
    // Función para retroceder a la diapositiva anterior
    function previousSlide() {
      slides[currentIndex].style.display = "none";
      slideButtons[currentIndex].classList.remove("active");
      currentIndex = (currentIndex - 1 + slideCount) % slideCount;
      slides[currentIndex].style.display = "block";
      slideButtons[currentIndex].classList.add("active");
    }
  
    // Evento click del botón "Siguiente"
    nextBtn.addEventListener("click", function () {
      clearInterval(slideTimer);
      nextSlide();
      slideTimer = setInterval(nextSlide, slideInterval);
    });
  
    // Evento click del botón "Anterior"
    previousBtn.addEventListener("click", function () {
      clearInterval(slideTimer);
      previousSlide();
      slideTimer = setInterval(nextSlide, slideInterval);
    });
  
    // Evento click de los botones de las diapositivas
    for (let i = 0; i < slideButtons.length; i++) {
      slideButtons[i].addEventListener("click", function () {
        clearInterval(slideTimer);
        slides[currentIndex].style.display = "none";
        slideButtons[currentIndex].classList.remove("active");
        currentIndex = i;
        slides[currentIndex].style.display = "block";
        slideButtons[currentIndex].classList.add("active");
        slideTimer = setInterval(nextSlide, slideInterval);
      });
    }
  
    // Función para iniciar el carrusel
    function startSlider() {
      slideTimer = setInterval(nextSlide, slideInterval);
    }
  
    // Función para detener el carrusel
    function stopSlider() {
      clearInterval(slideTimer);
    }
  
    // Eventos del mouse para detener y reanudar el carrusel
    slider.addEventListener("mouseenter", function () {
      stopSlider();
    });
  
    slider.addEventListener("mouseleave", function () {
      startSlider();
    });
  
    // Iniciar el carrusel
    startSlider();
  });
  