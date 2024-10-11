const botonrojo = document.getElementById('botonrojo');
const botonazul = document.getElementById('botonazul');



botonrojo.onclick = function () {
    const element = document.querySelector('.rojo');
    element.style.color = 'red';
};

botonazul.onclick = function () {
    const element = document.querySelector('.azul');
    element.style.backgroundColor = 'blue';
};