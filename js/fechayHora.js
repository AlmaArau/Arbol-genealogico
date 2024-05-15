// Función para obtener la fecha y hora actual
function obtenerFechaHora() {
    var ahora = new Date();
    var fecha = ahora.toLocaleDateString();
    var hora = ahora.toLocaleTimeString();
    return fecha + ' ' + hora;
  }

  // Función para actualizar el elemento en la página con la fecha y hora actual
  function actualizarFechaHora() {
    var fechaHora = obtenerFechaHora();
    document.getElementById('fecha-hora').textContent = fechaHora;
  }

  // Llamar a la función actualizarFechaHora cada segundo para que la fecha y hora se actualice en tiempo real
  setInterval(actualizarFechaHora, 1000);

  // Llamar a la función una vez al cargar la página para mostrar la fecha y hora actual inicia
  actualizarFechaHora();