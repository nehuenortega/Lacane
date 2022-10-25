const PORTADA_BTN = document.getElementById('boton-portada')
const ELEMENT = document.querySelector('#categoria-productos')
PORTADA_BTN.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()
    window.location.href = 'informacion.html';
    
});