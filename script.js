// Función para desplazarse suavemente a una sección
function scrollToSection(event) {
  event.preventDefault();
  const target = event.target.getAttribute("href");
  document.querySelector(target).scrollIntoView({
    behavior: "smooth"
  });
}

// Agregar evento de clic a los enlaces de la barra de navegación
const navLinks = document.querySelectorAll("nav a");
for (const link of navLinks) {
  link.addEventListener("click", scrollToSection);
}
const screenshots = document.querySelectorAll('.screenshot');

window.addEventListener('scroll', () => {
  const triggerPoint = window.innerHeight / 5 * 4;

  screenshots.forEach(screenshot => {
    const screenshotTop = screenshot.getBoundingClientRect().top;

    if (screenshotTop < triggerPoint) {
      screenshot.classList.add('show');
    } else {
      screenshot.classList.remove('show');
    }
  });
});

window.addEventListener('load', () => {
  const elements = document.querySelectorAll('.animate');
  elements.forEach((element) => {
    element.classList.add('fade-in');
  });
});
