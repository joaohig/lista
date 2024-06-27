document.addEventListener("DOMContentLoaded", function() {
    let contadorCliques = 0;
    const botaoContador = document.getElementById("botaoContador");
    const contadorParagrafo = document.getElementById("contador");

    function incrementarContador() {
        contadorCliques++;
        contadorParagrafo.textContent = contadorCliques + " cliques";
    }

    botaoContador.addEventListener("click", incrementarContador);
});
