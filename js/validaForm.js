document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
      });
      
      function validarFormulario(evento) {
        evento.preventDefault();
        var nombre = document.getElementById('nombre').value;
        if(nombre.length === 0) {
          alert('No has escrito tu nombre');
          return;
        }
        var email = document.getElementById('email').value;
        if (email.length === 0) {
            
          alert('No has escrito tu email');
          return;       
        }
        var mensaje = document.getElementById('mensaje').value;
        if (mensaje.length === 0) {
          alert('No has escrito tu mensaje');
          return;        
        }
        this.submit();        
      }