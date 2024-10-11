// Variables de estado
let food = 24;
let happiness = 30;
let energy = 49;
let strength = 0;

// Elementos del DOM
const foodProgress = document.getElementById('food-progress');
const happinessProgress = document.getElementById('happiness-progress');
const energyProgress = document.getElementById('energy-progress');
const strengthProgress = document.getElementById('strength-progress');

// Función para actualizar las barras de progreso
function updateProgressBars() {
    foodProgress.innerText = food + '%';
    happinessProgress.innerText = happiness + '%';
    energyProgress.innerText = energy + '%';
    strengthProgress.innerText = strength + '%';

    document.getElementById('food-bar').style.width = food + '%';
    document.getElementById('happiness-bar').style.width = happiness + '%';
    document.getElementById('energy-bar').style.width = energy + '%';
    document.getElementById('strength-bar').style.width = strength + '%';
}

// Funciones para cada acción
document.getElementById('feed-btn').addEventListener('click', () => {
    food = Math.min(100, food + 10); // Aumenta comida
    updateProgressBars();
});

document.getElementById('play-btn').addEventListener('click', () => {
    happiness = Math.min(100, happiness + 15); // Aumenta felicidad
    energy = Math.max(0, energy - 10); // Disminuye energía
    updateProgressBars();
});

document.getElementById('sleep-btn').addEventListener('click', () => {
    energy = Math.min(100, energy + 20); // Aumenta energía
    updateProgressBars();
});

document.getElementById('fight-btn').addEventListener('click', () => {
    strength = Math.min(100, strength + 5); // Aumenta fuerza
    happiness = Math.max(0, happiness - 5); // Disminuye felicidad
    updateProgressBars();
});

// Inicializar barras al cargar
updateProgressBars();
