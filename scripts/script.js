$(document).ready(function() {
  // Obtener el elemento al que le vamos a agregar la clase
  const header = $("#header-principal");

  /* Función que hace que el header tenga un color de fondo negro cuando el usuario hace scroll */
  function blackHeader() {
    // Agregar un evento que esté pendiente de cuando se produzca un scroll
    $(window).scroll(function(event) {
      const scroll = $(window).scrollTop();
      // Si el scroll top es mayor o igual que 80, agregamos la clase, en caso contrario la quitamos
      if (scroll >= 80) {
        header.addClass("black-header");
      } else {
        header.removeClass("black-header");
      }
    });
  }

  /* Función que hace que los enlaces lleven a la posición correcta */
  function scrollToSection() {
    // Detectar cuando se hace click en un enlace de navegación
    $(".nav-link").click(function(event) {
      // Prevenir el comportamiento por defecto de los enlaces
      event.preventDefault();

      // Obtener el atributo href del enlace en el que se hizo click
      const linkAttribute = $(this).attr("href");

      // Si el atributo es diferente de #, nos movemos a la sección correspondiente
      if (linkAttribute !== "#") {
        // Obtener el offset top de la sección a la que lleva el enlace
        const sectionOffsetTop = $(linkAttribute).offset().top - 67.2;

        // Movernos a esa posición
        $("html, body").scrollTop(sectionOffsetTop);
      }
    });
  }

  scrollToSection();
  blackHeader();
});
