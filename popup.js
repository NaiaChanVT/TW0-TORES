function showPopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'block';
  setTimeout(function() {
    popup.style.display = 'none';
  }, 5000); // ocultar el pop-up después de 5 segundos
}

setInterval(showPopup, 5000); // mostrar el pop-up cada 5 segundos
