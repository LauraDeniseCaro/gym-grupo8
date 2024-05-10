// Función para validar el formulario
function validarFormulario() {
    // Obtener todos los campos del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var opcion = document.getElementById('opcion-select').value;
    var foto = document.getElementById('foto').value;
    var asunto = document.getElementById('asunto').value;
    var mensaje = document.getElementById('mensaje').value;
    var acepto = document.getElementById('acepto').checked;
  
    // Verificar que los campos obligatorios no estén vacíos
    if (nombre === '' || email === '' || opcion === '' || foto === '' || asunto === '' || mensaje === '' || !acepto) {
      alert('Por favor completa todos los campos obligatorios.');
      return false; // Evitar que se envíe el formulario
    }
    return true; // Permitir enviar el formulario si todos los campos están completos
  }