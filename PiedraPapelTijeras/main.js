$(document).ready(function() {
    // Variables de puntaje
    let playerScore = 0;
    let iaScore = 0;
    const options = ['👊', '✋', '✂️'];

    // Actualizar el marcador
    function updateScore() {
        $(".marcador").text(`Marcador: ${playerScore} - ${iaScore}`);
    }

    // Función para generar jugada de la IA
    function iaPlay() {
        return options[Math.floor(Math.random() * 3)];
    }

    // Determinar el ganador
    function determineWinner(playerChoice, iaChoice) {
        if (playerChoice === iaChoice) {
            return 'draw';
        }
        if (
            (playerChoice === '👊' && iaChoice === '✂️') ||
            (playerChoice === '✋' && iaChoice === '👊') ||
            (playerChoice === '✂️' && iaChoice === '✋')
        ) {
            return 'player';
        } else {
            return 'ia';
        }
    }

    // Reiniciar juego
    function resetGame() {
        playerScore = 0;
        iaScore = 0;
        updateScore();
        $(".eleccion-jugador, .eleccion-ia").text(""); // Limpiar las elecciones
    }

    // Detectar clic en los botones
    $(".div").click(function() {
        const playerChoice = $(this).text();
        const iaChoice = iaPlay();

        // Añadir animación a los botones (pulsación)
        $(this).addClass("clicked");
        setTimeout(() => $(this).removeClass("clicked"), 300);

        // Mostrar elección del jugador y de la IA en grande
        $(".eleccion-jugador").text(playerChoice);
        $(".eleccion-ia").text(iaChoice);

        // Añadir animación a las elecciones en grande
        $(".eleccion-jugador, .eleccion-ia").addClass("show");
        setTimeout(() => $(".eleccion-jugador, .eleccion-ia").removeClass("show"), 1000);

        const winner = determineWinner(playerChoice, iaChoice);

        // Actualizar puntajes
        if (winner === 'player') {
            playerScore++;
        } else if (winner === 'ia') {
            iaScore++;
        }

        updateScore();

        // Verificar si alguien ha ganado
        if (playerScore === 3) {
            alert("¡Has ganado!");
            resetGame();
        } else if (iaScore === 3) {
            alert("La IA ha ganado");
            resetGame();
        }
    });
});
