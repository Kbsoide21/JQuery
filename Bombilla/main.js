// Obtener los elementos
const bombillaImg = document.getElementById('bombilla-img');
const botonImg = document.getElementById('boton-img');
const slider = document.getElementById('intensidad');

// Estado inicial: bombilla apagada
let bombillaEncendida = false;

// Cambiar imagen de bombilla y botón al hacer clic en el botón
botonImg.addEventListener('click', function() {
    bombillaEncendida = !bombillaEncendida; // Alternar el estado

    if (bombillaEncendida) {
        bombillaImg.src = 'on.jpg'; // Cambiar a imagen de bombilla encendida
        botonImg.src = 'bon.jpg'; // Cambiar a botón de encendido
    } else {
        bombillaImg.src = 'off.jpg'; // Cambiar a imagen de bombilla apagada
        botonImg.src = 'boff.jpg'; // Cambiar a botón de apagado
    }
});

// Ajustar la intensidad de la bombilla usando la barra deslizante
slider.addEventListener('input', function() {
    const intensidad = slider.value; // Obtener el valor del slider
    bombillaImg.style.filter = `brightness(${intensidad}%)`; // Cambiar el brillo de la bombilla
});
