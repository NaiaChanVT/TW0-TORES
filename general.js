  document.addEventListener('scroll', function() {
    var introduccion = document.getElementById('introduccion');
    var elementos = document.getElementById('elementos');
    var reacciones = document.getElementById('reacciones');
    var tabla = document.getElementById('tabla');

    if (isElementInViewport(introduccion)) {
      introduccion.classList.add('animate__fadeIn');
    }

    if (isElementInViewport(elementos)) {
      elementos.classList.add('animate__fadeIn');
    }

    if (isElementInViewport(reacciones)) {
      reacciones.classList.add('animate__fadeIn');
    }

    if (isElementInViewport(tabla)) {
      tabla.classList.add('animate__fadeIn');
    }
  });

  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function redirectToSupport() {
    // Redirige al usuario a la página de soporte
    window.location.href = "/support.html";
  }

  function redirigirAPagina() {
    // Aquí puedes realizar otras acciones si es necesario antes de redirigir

    window.location.href = '/materias.html'; // Reemplaza '/otra-pagina.html' con la URL de la página a la que deseas redirigir
  }

  function realizarPreRegistro() {
    // Realizar animación utilizando JavaScript (puedes usar librerías como jQuery o CSS)
    var button = document.getElementById('preregistro');
    button.classList.add('animation-class'); // Reemplaza 'animation-class' con la clase de animación deseada
    
    // Cambiar el texto del botón
    button.innerHTML = "Ya estás registrado! <i class='bx bx-check bx-tada' ></i>";
    
    // Guardar el estado en una cookie
    document.cookie = "registro=1; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
  }


  function redirectToHome() {
    // Redirige al usuario a la página de inicio
    window.location.href = "/index.html";
  }



  // Animación de desplazamiento suave al hacer clic en los enlaces del menú
const menuLinks = document.querySelectorAll('nav ul li a');

menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  });
});

// Animación de aparición cuando se desplaza a una sección
const sections = document.querySelectorAll('section');

const options = {
  threshold: 0.5
};

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    } else {
      entry.target.classList.remove('fade-in');
    }
  });
}, options);

sections.forEach(section => {
  sectionObserver.observe(section);
});
