const push = document.getElementById('push');
const unshift = document.getElementById('unshift');
const insert = document.getElementById('insert');
const position = document.getElementById('position');
const pop = document.getElementById('pop');
const shift = document.getElementById('shift');
const remove = document.getElementById('remove');
const positiondown = document.getElementById('positiondown');
const iconContainer = document.getElementById('iconContainer');

iconos  = ['🍎','🍊','🍌','🍉','🍇','🍓','🍒','🍍','🥭','🍑','🍐','🍋','🥥','🍈','🍏','🍎','🥝'];

//Funcion para seleccionar el icono al azar
function iconoAlAzar () {
    const iconos  = ['🍎','🍊','🍌','🍉','🍇','🍓','🍒','🍍','🥭','🍑','🍐','🍋','🥥','🍈','🍏','🍎','🥝'];
    const elegido = Math.floor(Math.random() * iconos.length); 
    return iconos[elegido]; 
};

// Evento 'onclick' del botón
push.onclick = function () {
    // Generar un icono aleatorio
    const icono = iconoAlAzar();
    
    // Crear un nuevo elemento <span> para el icono
    const nuevoIcono = document.createElement('span');
    nuevoIcono.textContent = icono; // Agregar el icono al contenido del span
    
    // Agregar el <span> al contenedor
    iconContainer.appendChild(nuevoIcono);
};

// Función para agregar al inicio
unshift.onclick = function () {
    const icono = iconoAlAzar();
    const nuevoIcono = document.createElement('span');
    nuevoIcono.textContent = icono;
    iconContainer.prepend(nuevoIcono); // Agregar al inicio (unshift)
};

insert.onclick = function () {
    const icono = iconoAlAzar();
    const nuevoIcono = document.createElement('span');
    nuevoIcono.textContent = icono;

    // Obtener la posición deseada desde el input
    const posicion = parseInt(position.value);

    // Validar que la posición esté dentro del rango
    if (isNaN(posicion) || posicion < 0 || posicion > iconContainer.children.length) {
        alert('Por favor ingresa una posición válida');
    } else {
        // Insertar el icono en la posición específica
        const referencia = iconContainer.children[posicion];
        if (referencia) {
            iconContainer.insertBefore(nuevoIcono, referencia);
        } else {
            // Si la referencia no existe (ej. la última posición), agregar al final
            iconContainer.appendChild(nuevoIcono);
        }
    }
};


pop.onclick = function () {
    const iconContainer = document.getElementById('iconContainer');
    
    // Verificar si el contenedor tiene hijos (iconos)
    if (iconContainer.children.length > 0) {
        // Eliminar el último hijo (último icono añadido)
        iconContainer.removeChild(iconContainer.lastChild);
    } else {
        alert('No hay más iconos para eliminar');
    }
};

shift.onclick = function () {
    const iconContainer = document.getElementById('iconContainer');
    
    // Verificar si el contenedor tiene hijos (iconos)
    if (iconContainer.children.length > 0) {
        // Eliminar el último hijo (último icono añadido)
        iconContainer.removeChild(iconContainer.firstChild);
    } else {
        alert('No hay más iconos para eliminar');
    }
};


remove.onclick = function () {
    // Obtener la posición deseada desde el input
    const posicion = parseInt(positiondown.value);

    // Validar que la posición esté dentro del rango
    if (isNaN(posicion) || posicion < 0 || posicion >= iconContainer.children.length) {
        alert('Por favor ingresa una posición válida');
    } else {
        // Obtener el icono en la posición específica
        const iconoAEliminar = iconContainer.children[posicion];
        
        // Eliminar el icono de esa posición
        iconContainer.removeChild(iconoAEliminar);
    }
};