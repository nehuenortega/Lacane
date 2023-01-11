const PORTADA_BTN = document.getElementById('boton-portada')
const ELEMENT = document.querySelector('#categoria-productos')
PORTADA_BTN.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()
    window.location.href = 'informacion.html';
    
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }