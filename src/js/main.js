// script.js

function toggleServiceDetails(buttonId) {
  console.log('inicia la funcion')
  const serviceDetailsId = 'detalles-' + buttonId.substring(8); // Elimina 'ver-mas-' del id del botón
  const detailsDiv = document.getElementById(serviceDetailsId);
  const button = document.getElementById(buttonId);

  if (detailsDiv.classList.contains('show-details')) {
      detailsDiv.classList.remove('show-details');
      button.textContent = 'Ver más'; // Cambia el texto del botón a "Ver más"
  } else {
      detailsDiv.classList.add('show-details');
      button.textContent = 'Ver menos'; // Cambia el texto del botón a "Ver menos"
  }
}